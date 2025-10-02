"use client";

import { useEffect, useState } from "react";

interface Fee {
  id: number;
  term: string;
  amount: number;
  status: string;
  paidAt: string;
  paymentMethod?: string;
}

interface FeesTableProps {
  studentId: string;
}

export default function FeesTable({ studentId }: FeesTableProps) {
  const [fees, setFees] = useState<Fee[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!studentId) return;

    const fetchFees = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/fees/student/${studentId}`);
        const data = await res.json();
        setFees(data);
      } catch (err) {
        console.error("Failed to fetch fees:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFees();
  }, [studentId]);

  if (loading) return <p>Loading fees...</p>;

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th>Term</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Payment Method</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {fees.map(f => (
          <tr key={f.id}>
            <td>{f.term}</td>
            <td>{f.amount}</td>
            <td>{f.status}</td>
            <td>{f.paymentMethod || "Cash"}</td>
            <td>{new Date(f.paidAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
