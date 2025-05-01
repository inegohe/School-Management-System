import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

interface UserPayload {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TEACHER" | "NONTEACHING" | "STUDENT" | "PARENT";
  schoolId: string;
}

type AuthenticatedRouteHandler = (
  request: Request,
  user: UserPayload
) => Promise<NextResponse> | NextResponse;

export function withAuthRoute(handler: AuthenticatedRouteHandler) {
  return async (request: Request): Promise<NextResponse> => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accesstoken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Authentication required: No token found." },
        { status: 401 }
      );
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
      return await handler(request, decoded);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return NextResponse.json(
          {
            message: "Authentication required: Token expired.",
            code: "TOKEN_EXPIRED",
          },
          { status: 401 }
        );
      } else if (error instanceof jwt.JsonWebTokenError) {
        return NextResponse.json(
          { message: "Authentication required: Invalid token." },
          { status: 401 }
        );
      } else {
        console.error("Auth Middleware Error:", error);
        return NextResponse.json(
          { message: "Internal server error during authentication." },
          { status: 500 }
        );
      }
    }
  };
}
