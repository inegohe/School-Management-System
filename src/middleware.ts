import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const publicOnlyRoutes = ["/", "/login", "/create", "/newschool"];
const roleRoutes = ["/admin", "/teacher", "/student", "/parent"];
const genericAuthenticatedRoute = "/auth";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const cookieStore = await cookies();
  const refreshToken =
    cookieStore.get("refreshtoken")?.value ||
    req.cookies.get("refreshtoken")?.value ||
    "";
  const url = req.nextUrl.clone();
  const requestedPath = url.pathname;
  let decoded;

  const isPublicOnlyRoute = publicOnlyRoutes.includes(requestedPath);

  if (!refreshToken) {
    if (!isPublicOnlyRoute) {
      console.log(
        `Middleware: No token, redirecting from protected route ${requestedPath} to /login`
      );
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", requestedPath);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
    if (isPublicOnlyRoute) {
      console.log(
        `Middleware: Logged-in user redirected from public-only route ${requestedPath} to ${genericAuthenticatedRoute}`
      );
      url.pathname = genericAuthenticatedRoute;
      url.search = "";
      return NextResponse.redirect(url);
    }

    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!) as {
        id: string;
        email: string;
        role: string;
      };
      console.log(decoded);
      // if (
      //   roleRoutes.includes(requestedPath) &&
      //   requestedPath !== `/${decoded.role.toLowerCase()}`
      // ) {
      //   console.log(
      //     `Middleware: Logged-in user redirected from role route ${requestedPath} to /${decoded.role.toLowerCase()}`
      //   );
      //   url.pathname = decoded.role.toLowerCase();
      //   url.search = "";
      //   return NextResponse.redirect(url);
      // }
    } catch (err) {
      console.log(
        `Middleware: Error decoding token, redirecting from protected route ${requestedPath} to /login`
      );
      console.log(err);
      // url.pathname = "/login";
      // url.searchParams.set("callbackUrl", requestedPath);
      // return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
