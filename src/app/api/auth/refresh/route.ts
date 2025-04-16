import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const POST = async () => {
  try {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get("refreshtoken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ error: "Refresh token missing" }, { status: 401 });
    }

    // Verify the refresh token
    let decoded;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!) as { id: string, email: string, role: string };
    } catch (error) {
      return NextResponse.json({ error: "Invalid refresh token" }, { status: 401 });
    }

    // Generate a new access token
    const newAccessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
        role: decoded.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1H" }
    );

    // Set the new access token in an HTTP-only cookie
    cookiesStore.set("accesstoken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 10 * 60, // 10 mins
    });

    return NextResponse.json({ message: "Token refreshed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Refresh error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};