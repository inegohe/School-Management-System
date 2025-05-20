import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("searchQuery") || "";
    const skip = (page - 1) * limit;

    const events = await prisma.event.findMany({
      where: { schoolId: user.schoolId, ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    }), },
      skip,
      take: limit,
    });

    const total = await prisma.event.count({
      where: { schoolId: user.schoolId, ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    }), },
    });

    return NextResponse.json(
      {
        events,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
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
      ? await prisma.event.create({
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        })
      : await prisma.event.update({
          where: { id },
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        });

    return NextResponse.json(
      { message: `Event ${type}d successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating/creating event:", error);
    return NextResponse.json(
      { error: "Failed to update/create event" },
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

    await prisma.event.delete({
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
