import { useEffect, useState } from 'react';

interface Fee {
  id: number;
  term: string;
  amount: number;
  status: string;
  paidAt: string; // or Date if you transform it
}

interface FeesTableProps {
  studentId: string | number;
}

export default function FeesTable({ studentId }: FeesTableProps) {
  const [fees, setFees] = useState<Fee[]>([]);

  useEffect(() => {
    if (!studentId) return;

    fetch(`/api/fees/student/${studentId}`)
      .then(res => res.json())
      .then((data: Fee[]) => setFees(data))
      .catch(err => console.error('Failed to fetch fees:', err));
  }, [studentId]);

  return (
    <table className="table-auto w-full border">
      <thead>
        <tr>
          <th>Term</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {fees.map(f => (
          <tr key={f.id}>
            <td>{f.term}</td>
            <td>{f.amount}</td>
            <td>{f.status}</td>
            <td>{new Date(f.paidAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
