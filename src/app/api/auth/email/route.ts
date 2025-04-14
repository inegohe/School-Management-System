import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 } from "uuid";

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
    const getToken = v4();
    NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(JSON.stringify(err), err);
    NextResponse.json({ status: 500 });
  }
};
