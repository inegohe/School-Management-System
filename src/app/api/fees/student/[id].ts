import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { studentId } = req.query;

  if (!studentId || typeof studentId !== "string") {
    return res.status(400).json({ message: "Student ID is required" });
  }

  try {
    const fees = await prisma.feesPayment.findMany({
      where: { studentId },
      orderBy: { paidAt: "desc" },
    });

    res.status(200).json({ fees });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch fees" });
  }
}

