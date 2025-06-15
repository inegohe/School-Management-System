import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

function getDayRange(date: Date): { gte: Date; lt: Date } {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const startOfNextDay = new Date(startOfDay);
  startOfNextDay.setDate(startOfDay.getDate() + 1);
  return { gte: startOfDay, lt: startOfNextDay };
}

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    if (user.role !== "TEACHER") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const skip = (page - 1) * limit;

    // Find the class where this teacher is the classTeacher
    const teacherClass = await prisma.class.findFirst({
      where: {
        schoolId: user.schoolId,
        classTeacher: user.name,
      },
    });

    if (!teacherClass) {
      return NextResponse.json(
        { students: [], total: 0, page, totalPages: 1, attendanceMarked: false },
        { status: 200 }
      );
    }

    // Get today's attendance for this class
    const today = new Date();
    const { gte, lt } = getDayRange(today);

    const attendanceRecords = await prisma.attendance.findMany({
      where: {
        classId: teacherClass.id,
        date: { gte, lt },
      },
      select: {
        id: true,
        studentId: true,
        status: true,
      },
    });

    // Fetch students in this class
    const where = {
      schoolId: user.schoolId,
      class: teacherClass.name,
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { address: { contains: search, mode: "insensitive" } },
          { parentName: { contains: search, mode: "insensitive" } },
          { admissionNo: { contains: search, mode: "insensitive" } },
        ],
      }),
    };

    const students = await prisma.student.findMany({
      where,
      skip,
      take: limit,
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        class: true,
      },
    });

    const total = await prisma.student.count({ where });

    // If attendance already marked for all students, return attendance status
    const attendanceMap = Object.fromEntries(
      attendanceRecords.map((a) => [a.studentId, a.status])
    );
    const attendanceMarked = attendanceRecords.length > 0;

    return NextResponse.json(
      {
        students,
        total,
        page,
        totalPages: Math.ceil(total / limit),
        attendanceMarked,
        attendance: attendanceMap,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching attendance students:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    if (user.role !== "TEACHER") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const { data } = await req.json();
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json({ message: "No attendance data provided" }, { status: 400 });
    }

    // Find the class for this teacher
    const teacherClass = await prisma.class.findFirst({
      where: {
        schoolId: user.schoolId,
        classTeacher: user.name,
      },
    });

    if (!teacherClass) {
      return NextResponse.json({ message: "No class found for teacher" }, { status: 400 });
    }

    // Check if attendance already marked for today
    const today = new Date();
    const { gte, lt } = getDayRange(today);
    const alreadyMarked = await prisma.attendance.findFirst({
      where: {
        classId: teacherClass.id,
        date: { gte, lt },
      },
    });
    if (alreadyMarked) {
      return NextResponse.json({ message: "Attendance already marked for today" }, { status: 400 });
    }

    // Create attendance records
    await prisma.attendance.createMany({
      data: data.map((item: { studentId: string; status: "PRESENT" | "ABSENT" }) => ({
        date: today,
        schoolId: user.schoolId,
        studentId: item.studentId,
        classId: teacherClass.id,
        status: item.status,
      })),
    });

    return NextResponse.json({ message: "Attendance submitted" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting attendance:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    if (user.role !== "TEACHER") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ message: "Id and status required" }, { status: 400 });
    }

    const attendance = await prisma.attendance.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(attendance, { status: 200 });
  } catch (error) {
    console.error("Error updating attendance:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    if (user.role !== "TEACHER") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ message: "Id required" }, { status: 400 });
    }

    await prisma.attendance.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Attendance deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting attendance:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});