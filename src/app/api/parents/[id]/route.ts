import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { message: "Parent ID is required" },
        { status: 400 }
      );
    }

    const parent = await prisma.parent.findUnique({
      where: { id: id !== "self" ? id : user.id, schoolId: user.schoolId },
      include: {
        Student: {
          select: {
            name: true,
            class: true,
          },
        },
      },
    });

    if (!parent) {
      return NextResponse.json(
        { message: "Parent not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json(parent, { status: 200 });
  } catch (error) {
    console.error("Error fetching parent:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
