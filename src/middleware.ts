import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicOnlyRoutes = ["/", "/login", "/create", "/newschool"];
const genericAuthenticatedRoute = "/auth";

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refreshtoken")?.value req.cookies.get(“refreshtoken”)?.value || "";
  const url = req.nextUrl.clone();
  const requestedPath = url.pathname;

  const isPublicOnlyRoute = publicOnlyRoutes.includes(requestedPath);

  if (!refreshToken) {
    if (!isPublicOnlyRoute) {
      url.pathname = "/login";
      url.searchParams.set("callbackUrl", requestedPath);
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } else {
    if (isPublicOnlyRoute) {
      url.pathname = genericAuthenticatedRoute;
      url.search = "";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - /android, /ios, /window11 (specific directories)
     * - favicon.ico (favicon file)
     * - icons (PWA icons directory)
     * - manifest.json (PWA manifest file)
     * - sw.js (service worker file)
     * - sw.ts (service worker file)
     * - image files (png, jpg, jpeg)
     * - excel files (xlsx)
     */
    "/((?!api|_next/static|_next/image|/android|/ios|/windows11|favicon\\.ico|icons|manifest\\.json|sw\\.js|sw\\.ts|.*\\.(png|jpg|jpeg|xlsx)$).*)",
  ],
};