import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 } from "uuid";
import "@/components/forms/types";

export const POST = async (req: Request) => {
  try {
    const {
      schoolData,
      staffsData,
      studentsData,
      parentsData,
      subjects,
      classes,
      timetable,
      timetableHtml,
      admins,
    } = await req.json();

    const schoolId = v4();

    const staffs = staffsData.map((staff: StaffData) => {
      return { id: v4(), ...staff, schoolId };
    });
    const classData = classes.map((classData: ClassData) => {
      return { id: v4(), ...classData, schoolId };
    });
    const timetableData = timetable.map((timetable: Timetable) => {
      return { id: v4(), ...timetable, schoolId };
    });
    const parents = parentsData.map((parent: ParentData) => {
      return { id: v4(), ...parent, schoolId };
    });
    const students = studentsData.map((student: StudentData) => {
      return {
        id: v4(),
        ...student,
        schoolId,
        parentId: (parents.find(
          (parent: ParentData) =>
            parent.name === student.parentName &&
            parent.phoneNo === student.parentNo
        )).id,
      };
    });

    //Creating School
    const school = await prisma.school.create({
      data: {
        id: schoolId,
        ...schoolData,
        type: schoolData.type.toUpperCase(),
        admins: [...admins.map((admin: StaffData) => admin.name)],
        subjects,
        timetableHtml,
      },
    });

    await prisma.staff.createMany({
      data: [...staffs],
    });

    await prisma.parent.createMany({
      data: [...parents],
    });

    await prisma.student.createMany({
      data: [...students],
    });

    await prisma.class.createMany({
      data: [...classData],
    });

    await prisma.timetable.createMany({
      data: [...timetableData],
    });

    //Creating Users
    await prisma.user.createMany({
      data: [
        ...staffs.map((staff: StaffData & { id: string }) => {
          return {
            id: staff.id,
            name: staff.name,
            email: staff.email,
            role: staff.admin ? "ADMIN" : staff.teaching ? "TEACHER" : "NONTEACHING",
            schoolId
          };
        }),
        ...parents.map((parent: ParentData & { id: string }) => {
          return {
            id: parent.id,
            name: parent.name,
            email: parent.email,
            role: "PARENT",
            schoolId
          };
        }),
        ...students.map((student: StudentData & { id: string }) => {
          return {
            id: student.id,
            name: student.name,
            email: student.email,
            role: "STUDENT",
            schoolId
          };
        }),
      ],
    });

    return NextResponse.json({ ...school }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
