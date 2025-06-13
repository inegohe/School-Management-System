import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req, user) => {
  try {
    let data;
    if (user.role === "STUDENT") {
      data = await prisma.student.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          name: true,
          address: true,
          parentNo: true,
          image: true,
        },
      });
    } else if (["TEACHER", "NONTEACHING", "ADMIN"].includes(user.role)) {
      data = await prisma.staff.findUnique({
        where:
          user.role === "ADMIN"
            ? { id: user.id, admin: true }
            : { id: user.id },
        select: {
          id: true,
          name: true,
          phoneNo: true,
          address: true,
          image: true,
          teaching: true,
          admin: true,
        },
      });
    } else if (user.role === "PARENT") {
      data = await prisma.parent.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          name: true,
          address: true,
          phoneNo: true,
        },
      });
    } else {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching classes:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const POST = withAuthRoute(async (req, user) => {
  try {
    const { data, role, roleState } = await req.json();

    let userdata;
    if (user.role === "STUDENT") {
      userdata = await prisma.student.update({
        where: { id: user.id },
        data: {
          name: data.name,
          address: data.address,
          image: data.image,
        },
        select: {
          id: true,
          name: true,
          address: true,
          image: true,
        },
      });
      return NextResponse.json(userdata, { status: 200 });
    } else if (["TEACHER", "NONTEACHING", "ADMIN"].includes(user.role)) {
      await prisma.user.update({
        where: { id: user.id },
        data: { role: roleState || role || user.role },
      });
      userdata =
        role !== "ADMIN"
          ? await prisma.staff.update({
              where: { id: user.id },
              data: {
                name: data.name,
                phoneNo: data.phoneNo,
                address: data.address,
                image: data.image,
              },
              select: {
                id: true,
                name: true,
                phoneNo: true,
                address: true,
                image: true,
              },
            })
          : { roleChange: true };
      return NextResponse.json(
        { ...userdata, ...(role !== roleState ? { roleChange: true } : {}) },
        { status: 200 }
      );
    } else if (user.role === "PARENT") {
      userdata = await prisma.parent.update({
        where: { id: user.id },
        data: {
          name: data.name,
          address: data.address,
          phoneNo: data.phoneNo,
        },
        select: {
          id: true,
          name: true,
          address: true,
          phoneNo: true,
        },
      });
      return NextResponse.json(userdata, { status: 200 });
    } else {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error fetching classes:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
