import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 } from "uuid";
import { prisma } from "@/lib/prisma";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    const token = v4();

    // Save token and password to the user's document
    const user = await prisma.user.update({
      where: { email },
      data: {
        tempPassword: password, // Save the password temporarily (hashed in production)
        resetToken: token,
        resetTokenExpiry: new Date(Date.now() + 3600 * 1000), // 1-hour expiry
      },
    });

    // Send confirmation email
    const confirmationUrl = `${process.env.BASE_URL}/api/auth/confirm?token=${token}`;
    await transporter.sendMail(mailOptions(email, confirmationUrl, user.name));

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (err) {
    console.error(err, JSON.stringify(err));
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

const mailOptions = (
  email: string,
  confirmationUrl: string,
  username: string
) => ({
  to: email,
  subject: "Set Your Password",
  text: `You've requested to set a new password for your account.\n\nClick the following link to confirm your password:\n${confirmationUrl}\n\nIf you didn't request this, please ignore this email.\n\nThank you,\nYour Company`,
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Set Your Password</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #fff;
              color: #333;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
          }
          .container {
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              width: 80%;
              max-width: 600px;
          }
          h1 {
              color: #333;
          }
          p {
              color: #666;
          }
          .button {
              display: inline-block;
              padding: 10px 20px;
              background-color: #000;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
          }
          .button:hover {
              background-color: #333;
          }
          .footer {
              margin-top: 20px;
              font-size: 0.8em;
              color: #777;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Set Your Password</h1>
          <p>Hello there ${username},</p>
          <p>You've requested to set a new password for your account. Click the button below to confirm your password:</p>
          <a href="${confirmationUrl}" class="button">Confirm Password</a>
          <p>If you didn't request this, please ignore this email.</p>
          <div class="footer">
              Thank you,<br>
              MySchoolApp
          </div>
      </div>
  </body>
  </html>`,
});
