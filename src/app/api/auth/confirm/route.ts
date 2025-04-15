import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

const prisma = new PrismaClient();

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
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    const result = await signIn("credentials", {
      redirect: false,
      email: user.email,
      password: user.password,
    });

    if (result?.error) {
      // Redirect to the login page with a success message
      return NextResponse.redirect(
        `${process.env.NEXTAUTH_URL}/login?success=false`
      );
    } else {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/${user.role}`);
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ status: 500, message: "Internal Server Error" });
  }
};
