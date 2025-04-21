import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

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