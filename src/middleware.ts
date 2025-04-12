import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

interface UserToken {
    user?: {
        role?: string;
    };
}

export async function middleware(req: NextRequest): Promise<NextResponse> {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET }) as UserToken | null;
    const url = req.nextUrl.clone();

    if (!token) {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    // Example: Restrict access to `/admin` for non-admin users
    if (url.pathname.startsWith("/admin") && token?.user?.role !== "admin") {
        url.pathname = `/${token?.user?.role}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};