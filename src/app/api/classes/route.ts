import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const order = searchParams.get("sort") as "asc" | "desc" || "asc";
    const skip = (page - 1) * limit;

    const searchNumber = Number.isNaN(Number(search)) ? null : Number(search);

    const orFilters: Array<
      | { name: { contains: string; mode: "insensitive" } }
      | { classTeacher: { contains: string; mode: "insensitive" } }
      | { totalStudent: { equals: number } }
    > = [
      { name: { contains: search, mode: "insensitive" as const } },
      {
        classTeacher: { contains: search, mode: "insensitive" as const },
      },
    ];
    if (searchNumber !== null) {
      orFilters.push({ totalStudent: { equals: searchNumber } });
    }
    const classes = await prisma.class.findMany({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: orFilters,
        }),
      },
      skip,
      take: limit,
      orderBy: { name: order },
    });

    const total = await prisma.class.count({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: orFilters,
        }),
      },
    });

    return NextResponse.json(
      {
        classes,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching classes:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const { data, type, id } = await req.json();

    if (!data) {
      return NextResponse.json({ error: "Data are required" }, { status: 400 });
    }

    type === "create"
      ? await prisma.class.create({
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        })
      : await prisma.class.update({
          where: { id },
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        });

    return NextResponse.json(
      { message: `Class ${type}d successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error(`Error updating/creating class:`, error);
    return NextResponse.json(
      { error: "Failed to update/create class" },
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

    await prisma.class.delete({
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
