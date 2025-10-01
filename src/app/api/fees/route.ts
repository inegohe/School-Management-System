import { prisma } from "@/lib/prisma";
import { withAuthRoute } from "@/lib/routeauth";
import { NextResponse } from "next/server";

export const GET = withAuthRoute(async (req: Request, user) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search") || "";
    const skip = (page - 1) * limit;

    // Fetch students in the school (optional search by name)
    const studentWhere: any = { schoolId: user.schoolId };
    if (search) {
      studentWhere.name = { contains: search, mode: "insensitive" };
    }

    const students = await prisma.student.findMany({
      where: studentWhere,
      skip,
      take: limit,
    });

    const results = await Promise.all(
      students.map(async (student) => {
        // Get all payments grouped by term
        const payments = await prisma.feesPayment.findMany({
          where: { studentId: student.id, schoolId: user.schoolId },
          orderBy: { paidAt: "desc" },
        });

        // Group payments by term
        const termMap: Record<string, any> = {};
        for (const p of payments) {
          if (!termMap[p.term]) termMap[p.term] = [];
          termMap[p.term].push(p);
        }

        // Build summary per term
        const termSummaries = await Promise.all(
          Object.entries(termMap).map(async ([term, termPayments]) => {
            const totalPaid = termPayments.reduce((acc, p) => acc + p.amount, 0);
            const lastPayment = termPayments[0];

            // Get expected total fee
            const classTermFee = await prisma.classTermFee.findUnique({
              where: {
                className_term: {
                  className: student.class,
                  term,
                },
              },
            });

            const totalFee = classTermFee?.totalFee || 0;
            const balance = totalFee - totalPaid;

            return {
              term,
              totalPaid,
              balance,
              lastPaymentDate: lastPayment?.paidAt || null,
              lastPaymentAmount: lastPayment?.amount || 0,
              lastPaymentMethod: lastPayment?.paymentMethod || "",
            };
          })
        );

        return {
          student,
          termSummaries,
        };
      })
    );

    // Total students count
    const total = await prisma.student.count({ where: studentWhere });

    return NextResponse.json(
      {
        results,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching fees:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

export const POST = withAuthRoute(async (req: Request, user) => {
  try {
    const { studentId, amount, term, status, paymentMethod } = await req.json();

    if (!studentId || !amount || !term || !status) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const payment = await prisma.feesPayment.create({
      data: {
        studentId,
        schoolId: user.schoolId,
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
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

export const PATCH = withAuthRoute(async (req: Request, user) => {
  try {
    const { id, amount, term, status, paymentMethod } = await req.json();

    if (!id) return NextResponse.json({ message: "Id required" }, { status: 400 });

    const updated = await prisma.feesPayment.update({
      where: { id: Number(id) },
      data: { amount, term, status, paymentMethod },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error("Error updating fees payment:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});

export const DELETE = withAuthRoute(async (req: Request, user) => {
  try {
    const { id } = await req.json();

    if (!id) return NextResponse.json({ message: "Id required" }, { status: 400 });

    await prisma.feesPayment.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Payment deleted" }, { status: 200 });
  } catch (err) {
    console.error("Error deleting fees payment:", err);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
});
