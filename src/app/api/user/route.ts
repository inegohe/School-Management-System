import { getUser } from "@/server-actions";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const user = await getUser();
    return NextResponse.json({ ...user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An internal error occured" },
      { status: 500 }
    );
  }
};
