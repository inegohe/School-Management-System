import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    const staffs = await prisma.staff.findMany({
      where: { schoolId: user.schoolId },
      skip,
      take: limit,
    });

    const total = await prisma.staff.count({
      where: { schoolId: user.schoolId },
    });

    return NextResponse.json(
      {
        staffs,
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
    const { data } = await req.json();

    if (!data) {
      return NextResponse.json({ error: "Data are required" }, { status: 400 });
    }

    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        schoolId: user.schoolId,
        role: data.admin ? "ADMIN" : data.teaching ? "TEACHER" : "NONTEACHING",
      },
    });

    const staff = await prisma.staff.create({
      data: {
        ...data,
        schoolId: user.schoolId,
      },
    });

    return NextResponse.json({ message: "Staff created successfully"}, { status: 200 });
  } catch (error) {
    console.error("Error creating staff:", error);
    return NextResponse.json(
      { error: "Failed to create staff" },
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

    await prisma.staff.delete({
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
