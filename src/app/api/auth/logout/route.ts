import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  try {
    const cookiesStore = await cookies();

    // Delete the access and refresh tokens
    cookiesStore.delete("accesstoken");
    cookiesStore.delete("refreshtoken");

    return NextResponse.redirect(`${process.env.BASE_URL}/login`);
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
};