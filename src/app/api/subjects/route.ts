import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const skip = (page - 1) * limit;

    const subjects = await prisma.subject.findMany({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { teachers: { has: search } },
          ],
        }),
      },
      skip,
      take: limit,
    });

    const total = await prisma.subject.count({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { teachers: { has: search } },
          ],
        }),
      },
    });

    return NextResponse.json(
      {
        subjects,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching subjects:", error);
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
      ? await prisma.subject.create({
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        })
      : await prisma.subject.update({
          where: { id },
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        });

    return NextResponse.json(
      { message: `Subject ${type}d successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating/creating subject:", error);
    return NextResponse.json(
      { error: "Failed to update/create subject" },
      { status: 500 }
    );
  }
});

export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await prisma.subject.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Subject deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting subject:", error);
    return NextResponse.json(
      { error: "Failed to delete subject" },
      { status: 500 }
    );
  }
});
