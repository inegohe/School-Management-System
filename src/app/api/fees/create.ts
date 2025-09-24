// pages/api/fees/create.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { studentId, amount, term, status, paymentMethod } = req.body as {
    studentId?: string;
    amount?: number | string;
    term?: string;
    status?: string;
    paymentMethod?: string;
  };

  if (!studentId || !amount || !term || !status) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const payment = await prisma.feesPayment.create({
      data: {
        studentId,
        amount: parseFloat(amount as string),
        term,
        status,
        paymentMethod: paymentMethod || "Cash",
        paidAt: new Date(),
      },
    });

    return res.status(200).json(payment);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to create payment" });
  }
}
