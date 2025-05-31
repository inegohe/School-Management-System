import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicOnlyRoutes = ["/", "/login", "/create", "/newschool", "/logout"];
const genericAuthenticatedRoute = "/auth";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const origin = req.headers.get("origin");
  const forwardedHost = req.headers.get("x-forwarded-host");
  // Reject requests with mismatched headers
  // if ((origin !== forwardedHost) && process.env.NODE_ENV !== "development") {
  //   return new NextResponse("Invalid request headers", { status: 400 });
  // }

  const cookieStore = await cookies();
  const refreshToken =
    cookieStore.get("refreshtoken")?.value ||
    req.cookies.get("refreshtoken")?.value ||
    "";
  const url = req.nextUrl.clone();
  const requestedPath = url.pathname;

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

    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
