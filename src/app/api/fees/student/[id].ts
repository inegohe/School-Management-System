import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      if (!id || Array.isArray(id)) {
        return res.status(400).json({ message: 'Invalid or missing student ID' });
      }

      const fees = await prisma.feesPayment.findMany({
        where: { studentId: Number(id) },
      });

      res.status(200).json(fees);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
