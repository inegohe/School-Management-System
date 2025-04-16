import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 } from "uuid";
import { prisma } from "@/lib/prisma";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    const token = v4();

    // Save token and password to the user's document
    await prisma.user.update({
      where: { email },
      data: {
        password, // Save the password temporarily (hashed in production)
        resetToken: token,
        resetTokenExpiry: new Date(Date.now() + 3600 * 1000), // 1-hour expiry
      },
    });

    // Send confirmation email
    const confirmationUrl = `${process.env.NEXTAUTH_URL}/api/auth/confirm?token=${token}`;
    await transporter.sendMail({
      to: email,
      subject: "Set Your Password",
      text: `Click the link to confirm your password: ${confirmationUrl}`,
      html: `<a href="${confirmationUrl}">Confirm Password</a>`,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500});
  }
};