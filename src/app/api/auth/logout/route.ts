import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    // Get request cookies
    const cookieStore = await cookies();
    const refreshtoken = cookieStore.get("refreshtoken")?.value;

    // Prepare response to delete cookies
    const response = NextResponse.json({ success: true });
    response.cookies.set("accesstoken", "", { maxAge: 0 });
    response.cookies.set("refreshtoken", "", { maxAge: 0 });

    // Delete refresh token from database if it exists
    if (refreshtoken) {
      await prisma.refreshTokens.deleteMany({
        where: {
          tokenHash: crypto.createHash("sha256").update(refreshtoken).digest("hex"),
        },
      });
    }

    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

