import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const studentId = searchParams.get("studentid"); // <-- get studentId from query
    const skip = (page - 1) * limit;

    // Build filter
    const whereClause: any = { schoolId: user.schoolId };

    if (studentId) {
      whereClause.studentId = studentId; // filter by student id
    }

    if (search) {
      whereClause.OR = [
        { student: { name: { contains: search, mode: "insensitive" } } },
        { term: { contains: search, mode: "insensitive" } },
        { status: { contains: search, mode: "insensitive" } },
      ];
    }

    // Count total
    const total = await prisma.feesPayment.count({ where: whereClause });

    // Fetch payments with student info
    const payments = await prisma.feesPayment.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: { paidAt: "desc" },
      include: { student: true }, // <-- include student details
    });

    return NextResponse.json(
      {
        payments,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching fees:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const { studentId, amount, term, status, paymentMethod, schoolId } = await req.json();

    if (!studentId || !amount || !term || !status) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const payment = await prisma.feesPayment.create({
      data: {
        studentId,
        schoolId,
        amount: parseFloat(amount),
        term,
        status,
        paymentMethod: paymentMethod || "Cash",
        paidAt: new Date(),
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (err) {
    console.error("Error creating fees payment:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    const { id, amount, term, status, paymentMethod } = await req.json();

    if (!id)
      return NextResponse.json({ message: "Id required" }, { status: 400 });

    const updated = await prisma.feesPayment.update({
      where: { id: Number(id) },
      data: { amount, term, status, paymentMethod },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("Error updating fees payment:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});

export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();

    if (!id)
      return NextResponse.json({ message: "Id required" }, { status: 400 });

    await prisma.feesPayment.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Payment deleted" }, { status: 200 });
  } catch (err) {
    console.error("Error deleting fees payment:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
});
