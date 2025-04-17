import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicOnlyRoutes = ["/", "/login", "/create"];
const genericAuthenticatedRoute = "/dashboard";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const accessToken = req.cookies.get("accesstoken")?.value;
  const url = req.nextUrl.clone();
  const requestedPath = url.pathname;

  const isPublicOnlyRoute = publicOnlyRoutes.includes(requestedPath);

  if (!accessToken) {
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
