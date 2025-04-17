import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(
  async (req: Request, user: { id: string; email: string; role: string }) => {
    try {
      if (user.role) {
        return NextResponse.json({ ...user }, { status: 200 });
      }
      return NextResponse.json({ message: "Unauthenticated" }, { status: 401 });
    } catch (error) {
      console.log(error);
      return NextResponse.json(
        { message: "An internal error occured" },
        { status: 500 }
      );
    }
  }
);
