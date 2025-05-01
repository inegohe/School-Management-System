import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const students = await prisma.student.findMany({
      where: { schoolId: user.schoolId },
      skip,
      take: limit,
    });

    const total = await prisma.student.count({
      where: { schoolId: user.schoolId },
    });

    return NextResponse.json(
      {
        students,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const {
      totalData: { parentEmail, ...data },
    } = await req.json();

    if (!data) {
      return NextResponse.json({ error: "Data are required" }, { status: 400 });
    }

    let parentId = v4();

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        schoolId: user.schoolId,
        role: "STUDENT",
      },
    });

    const existingParent = await prisma.parent.findUnique({
      where: {
        email: parentEmail,
      },
    });

    if (existingParent) {
      parentId = existingParent.id;
    } else {
      await prisma.parent.create({
        data: {
          id: parentId,
          name: data.parentName,
          email: parentEmail,
          address: data.address,
          phoneNo: data.parentNo,
          schoolId: user.schoolId,
        },
      });
    }

    const student = await prisma.student.create({
      data: {
        ...data,
        parentId,
        schoolId: user.schoolId,
      },
    });

    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    console.error("Error creating student:", error);
    return NextResponse.json(
      { error: "Failed to create student" },
      { status: 500 }
    );
  }
});

export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    const { id, data } = await req.json();

    if (!id || !data) {
      return NextResponse.json(
        { error: "Id and data are required" },
        { status: 400 }
      );
    }

    const staff = await prisma.staff.update({
      where: { id },
      data: {
        ...data,
        schoolId: user.schoolId,
      },
    });

    return NextResponse.json(staff, { status: 200 });
  } catch (error) {
    console.error("Error updating staff:", error);
    return NextResponse.json(
      { error: "Failed to update staff" },
      { status: 500 }
    );
  }
});

export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ message: "Id not provided" }, { status: 404 });
    }

    await prisma.student.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      { message: "Delete successfull" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
