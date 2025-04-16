import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ status: 400, message: "Invalid token" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gte: new Date(), // Ensure token is not expired
        },
      },
    });

    if (!user) {
      return NextResponse.json({
        status: 400,
        message: "Invalid or expired token",
      });
    }

    // Hash the password and clear the token
    const hashedPassword = await bcrypt.hash(user.password, 10);
    await prisma.user.update({
      where: { email: user.email },
      data: {
        password: hashedPassword,
        resetToken: "",
        resetTokenExpiry: "",
      },
    });

    // Generate JWT
    const accesstoken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1H" }
    );

    // Generate refresh token
    const refreshtoken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "4W" }
    );

    // Set the token in an HTTP-only cookie
    const cookiesStore = await cookies();
    // Set the cookie with the token
    // Delete the old token if it exists
    cookiesStore.delete("accesstoken");
    cookiesStore.delete("refreshtoken");
    cookiesStore.set("accesstoken", accesstoken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 10 * 60, // 10 mins
    });
    cookiesStore.set("refreshtoken", refreshtoken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 30 * 24 * 60 * 60, // 1 month
    });

    return NextResponse.redirect(`${process.env.BASE_URL}/${user.role}`);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
