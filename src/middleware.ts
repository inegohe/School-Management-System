import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const token = req.cookies.get("accesstoken")?.value;
  const url = req.nextUrl.clone();

  if (!token) {
    if (
      url.pathname !== "/" &&
      url.pathname !== "/login" &&
      url.pathname !== "/create" &&
      !url.pathname.startsWith("/api")
    ) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string, email: string, role: string};

    // Example: Restrict access for authenticated users
    if (
      url.pathname === "/" ||
      url.pathname === "/login" ||
      url.pathname == "/create" ||
      url.pathname.startsWith("/api")
    ) {
      url.pathname = `/${decoded.role}`;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    console.error("JWT Verification Error:", error);
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  // Your matcher config...
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
};