import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop();

    if (!id) {
      return NextResponse.json(
        { message: "Staff ID is required" },
        { status: 400 }
      );
    }

    const staff = await prisma.staff.findUnique({
      where: { id },
    });

    if (!staff || staff.schoolId !== user.schoolId) {
      return NextResponse.json(
        { message: "Staff not found or unauthorized" },
        { status: 404 }
      );
    }

    return NextResponse.json(staff, { status: 200 });
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});