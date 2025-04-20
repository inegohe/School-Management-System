import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

export const GET = async () => {
  try {
    const cookiesStore = await cookies();

    const refreshtoken = cookiesStore.get("refreshtoken")?.value || "";

    // Delete the access and refresh tokens
    cookiesStore.delete("accesstoken");
    cookiesStore.delete("refreshtoken");

    await prisma.refreshTokens.delete({
      where: {
        tokenHash: crypto
          .createHash("sha256")
          .update(refreshtoken)
          .digest("hex"),
      },
    });

    return NextResponse.redirect(`${process.env.BASE_URL}/login`);
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
