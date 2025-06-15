import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const order = (searchParams.get("sort") as "asc" | "desc") || "asc";
    const skip = (page - 1) * limit;
    const parents = await prisma.parent.findMany({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { address: { contains: search, mode: "insensitive" } },
            { phoneNo: { contains: search, mode: "insensitive" } },
            { address: { contains: search, mode: "insensitive" } },
          ],
        }),
      },
      skip,
      take: limit,
      orderBy: { name: order },
    });

    const total = await prisma.parent.count({
      where: {
        schoolId: user.schoolId,
        ...(search && {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { address: { contains: search, mode: "insensitive" } },
            { phoneNo: { contains: search, mode: "insensitive" } },
            { address: { contains: search, mode: "insensitive" } },
          ],
        }),
      },
    });

    return NextResponse.json(
      {
        parents,
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
    const { data, type, id } = await req.json();

    if (!data) {
      return NextResponse.json({ error: "Data are required" }, { status: 400 });
    }
    
    const newId = v4();

    type === "create" ? await prisma.user.create({
      data: {
        id: newId,
        name: data.name,
        email: data.email,
        schoolId: user.schoolId,
        role: "PARENT",
      },
    }) : await prisma.user.update({
          where: { id },
          data: {
            name: data.name,
            email: data.email,
            schoolId: user.schoolId,
            role: "PARENT",
          },
        });

    type === "create"
      ? await prisma.parent.create({
          data: {
            id: newId,
            ...data,
            schoolId: user.schoolId,
          },
        })
      : await prisma.parent.update({
          where: { id },
          data: {
            ...data,
            schoolId: user.schoolId,
          },
        });

    return NextResponse.json(
      { message: `Parent ${type}d successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating/creating parent:", error);
    return NextResponse.json(
      { error: "Failed to update/create parent" },
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

    await prisma.parent.delete({
      where: {
        id,
      },
    });

    await prisma.user.delete({
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
