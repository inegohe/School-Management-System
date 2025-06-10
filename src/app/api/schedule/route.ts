import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const POST = withAuthRoute(async (req, user) => {
  try {
    const { classes, subjects, staff } = await req.json();
    let result;
    if (staff) {
      result = await prisma.timetable.findMany({
        where: {
          schoolId: user.schoolId,
          class: {
            in: classes.map((x: string) => x.toUpperCase()),
          },
          subject: {
            in: subjects.map((x: string) => x.toUpperCase()),
          },
        },
      });
    } else {
      result = await prisma.timetable.findMany({
        where: {
          schoolId: user.schoolId,
          class: classes[0].toUpperCase(),
        },
      });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
