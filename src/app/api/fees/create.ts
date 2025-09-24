import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

type Data = {
  id: number;
  studentId: string;
  amount: number;
  term: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) {
  if (req.method === 'POST') {
    try {
      const { studentId, amount, term } = req.body;

      if (!studentId || !amount || !term) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const payment = await prisma.feesPayment.create({
        data: { studentId, amount, term, status: 'Paid' },
      });

      res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
