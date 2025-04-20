"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

interface UserPayload {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "TEACHER" | "STUDENT" | "PARENT";
  schoolId: string;
}

export const getUser = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("refreshtoken")?.value;
    if (!token) redirect("/login");
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    return decoded;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
};
