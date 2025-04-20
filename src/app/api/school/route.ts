import { AttendanceType, Gender } from "@prisma/client";
import { NextResponse } from "next/server";
import { withAuthRoute } from "@/lib/routeauth";
import { prisma } from "@/lib/prisma";

function getDayRange(date: Date): { gte: Date; lt: Date } {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const startOfNextDay = new Date(startOfDay);
  startOfNextDay.setDate(startOfDay.getDate() + 1);

  return {
    gte: startOfDay,
    lt: startOfNextDay,
  };
}

function getCurrentWeekMonday(): Date {
  const today = new Date();
  const currentDay = today.getDay();
  const daysToSubtract = currentDay === 0 ? 6 : currentDay - 1;
  const startOfWeekMonday = new Date(today);
  startOfWeekMonday.setDate(today.getDate() - daysToSubtract);
  startOfWeekMonday.setHours(0, 0, 0, 0);
  return startOfWeekMonday;
}

function getMonthRange(
  year: number,
  monthIndex: number
): { gte: Date; lt: Date } {
  const startDate = new Date(year, monthIndex, 1, 0, 0, 0, 0);
  const nextMonthStartDate = new Date(year, monthIndex + 1, 1, 0, 0, 0, 0);
  return { gte: startDate, lt: nextMonthStartDate };
}

interface DailyAttendanceRecord {
  name: string;
  present: number;
  absent: number;
}
const weekDayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];

async function getDailyAttendanceForWeek(
  schoolId: string
): Promise<DailyAttendanceRecord[]> {
  try {
    const startOfWeekMonday = getCurrentWeekMonday();
    const dailyPromises: Promise<{ present: number; absent: number }>[] = [];
    for (let i = 0; i < 5; i++) {
      const currentDayDate = new Date(startOfWeekMonday);
      currentDayDate.setDate(startOfWeekMonday.getDate() + i);
      const { gte, lt } = getDayRange(currentDayDate);

      const promise = prisma.attendance
        .groupBy({
          by: ["status"],
          where: {
            schoolId: schoolId,
            date: { gte, lt },
          },
          _count: { _all: true },
        })
        .then((statusGroups) => {
          const counts = { present: 0, absent: 0 };
          for (const group of statusGroups) {
            if (group.status === AttendanceType.PRESENT) {
              counts.present = group._count._all || 0;
            } else if (group.status === AttendanceType.ABSENT) {
              counts.absent = group._count._all || 0;
            }
          }
          return counts;
        });
      dailyPromises.push(promise);
    }

    const dailyCounts = await Promise.all(dailyPromises);

    const result: DailyAttendanceRecord[] = dailyCounts.map(
      (counts, index) => ({
        name: weekDayNames[index],
        present: counts.present,
        absent: counts.absent,
      })
    );

    console.log(
      `Daily attendance for current week (School ${schoolId}):`,
      result
    );
    return result;
  } catch (error) {
    console.error("Error calculating daily weekly attendance:", error);
    return weekDayNames.map((name) => ({ name, present: 0, absent: 0 }));
  }
}

interface MonthlyAttendanceRecord {
  name: string;
  present: number;
  absent: number;
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getMonthlyAttendanceForYear(
  schoolId: string,
  year: number
): Promise<MonthlyAttendanceRecord[]> {
  try {
    const monthPromises = Array.from({ length: 12 }).map(
      async (_, monthIndex) => {
        const { gte, lt } = getMonthRange(year, monthIndex);
        const statusGroups = await prisma.attendance.groupBy({
          by: ["status"],
          where: {
            schoolId: schoolId,
            date: { gte, lt },
          },
          _count: { _all: true },
        });
        const counts = { present: 0, absent: 0 };
        for (const group of statusGroups) {
          if (group.status === AttendanceType.PRESENT)
            counts.present = group._count._all || 0;
          else if (group.status === AttendanceType.ABSENT)
            counts.absent = group._count._all || 0;
        }
        return counts;
      }
    );

    const monthlyCounts = await Promise.all(monthPromises);

    const result: MonthlyAttendanceRecord[] = monthlyCounts.map(
      (counts, index) => ({
        name: monthNames[index],
        present: counts.present,
        absent: counts.absent,
      })
    );
    console.log(
      `Monthly attendance for year ${year} (School ${schoolId}):`,
      result
    );
    return result;
  } catch (error) {
    console.error(
      `Error calculating monthly attendance for year ${year}:`,
      error
    );
    return monthNames.map((name) => ({ name, present: 0, absent: 0 }));
  }
}

interface GenderCounts {
  male: number;
  female: number;
}

async function getStudentGenderCountsForSchool(
  schoolId: string
): Promise<GenderCounts> {
  try {
    const genderGroups = await prisma.student.groupBy({
      by: ["gender"],
      where: { schoolId },
      _count: { _all: true },
    });
    const counts: GenderCounts = { male: 0, female: 0 };
    for (const group of genderGroups) {
      if (group.gender === "MALE") counts.male = group._count?._all || 0;
      else if (group.gender === "FEMALE")
        counts.female = group._count?._all || 0;
    }
    return counts;
  } catch (error) {
    console.error("Error counting students by gender:", error);
    return { male: 0, female: 0 };
  }
}

export const GET = withAuthRoute(async (req: Request, user) => {
  if (!user.schoolId) {
    return NextResponse.json(
      { message: "User not associated with a school." },
      { status: 400 }
    );
  }

  try {
    const schoolId = user.schoolId;
    const currentYear = new Date().getFullYear();

    const [school, genderCounts, weeklyDailyAttendance, monthlyAttendance] =
      await Promise.all([
        prisma.school.findUnique({
          where: { id: schoolId },
          include: {
            _count: {
              select: {
                users: true,
                staffs: true,
                students: true,
                parents: true,
                classes: true,
              },
            },
          },
        }),
        getStudentGenderCountsForSchool(schoolId),
        getDailyAttendanceForWeek(schoolId),
        getMonthlyAttendanceForYear(schoolId, currentYear),
      ]);

    if (!school) {
      return NextResponse.json(
        { message: "School not found." },
        { status: 404 }
      );
    }

    const responsePayload = {
      ...school,
      _count: {
        ...school._count,
        maleStudents: genderCounts.male,
        femaleStudents: genderCounts.female,
        weeklyDailyAttendance,
        monthlyAttendance,
      },
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching dashboard data:", error);
    return NextResponse.json(
      { message: "Failed to fetch dashboard data." },
      { status: 500 }
    );
  }
});
