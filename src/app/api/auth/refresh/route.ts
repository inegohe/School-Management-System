import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies, headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const POST = async () => {
  try {
    const cookiesStore = await cookies();
    const refreshToken = cookiesStore.get("refreshtoken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "Refresh token missing" },
        { status: 401 }
      );
    }

    // Verify the refresh token
    let decoded;

    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET!) as {
        id: string;
        name: string;
        email: string;
        role: string;
        schoolId: string;
      };
      const userRefreshToken = await prisma.refreshTokens.findFirst({
        where: {
          tokenHash: crypto
            .createHash("sha256")
            .update(refreshToken)
            .digest("hex"),
          expiresOn: {
            gte: new Date(), // Ensure token is not expired
          },
        },
      });
      if (!userRefreshToken) {
        return NextResponse.json(
          { error: "Invalid refresh token" },
          { status: 401 }
        );
      } else {
        // Generate a new refresh token
        const newRefreshToken = jwt.sign(
          {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
            schoolId: decoded.schoolId,
          },
          process.env.JWT_SECRET!,
          { expiresIn: "1W" }
        );

        // Set the new refresh token in an HTTP-only cookie
        cookiesStore.set("refreshtoken", newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 7 * 24 * 60 * 60, // 1 Week
        });

        const headersList = await headers();

        const forwardedFor = headersList.get("x-forwarded-for");
        let ipAddress =
          forwardedFor?.split(",")[0].trim() ||
          headersList.get("x-vercel-forwarded-for") ||
          headersList.get("x-real-ip") ||
          "Unknown";

        console.log(
          "Detected IP Address:",
          ipAddress || "Could not determine IP"
        );
        const userAgent = headersList.get("user-agent") || "Unknown";
        console.log("Detected User Agent:", userAgent);

        await prisma.refreshTokens.update({
          where: {
            tokenHash: crypto
              .createHash("sha256")
              .update(refreshToken)
              .digest("hex"),
          },
          data: {
            deviceInfo: userAgent,
            ipAddress: ipAddress,
            tokenHash: crypto
              .createHash("sha256")
              .update(newRefreshToken)
              .digest("hex"),
            expiresOn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            lastUsed: new Date(Date.now()),
          },
        });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid refresh token" },
        { status: 401 }
      );
    }

    // Generate a new access token
    const newAccessToken = jwt.sign(
      {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
        schoolId: decoded.schoolId,
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

    return NextResponse.json(
      { message: "Token refreshed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Refresh error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
