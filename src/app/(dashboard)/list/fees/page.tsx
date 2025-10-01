"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { LoaderCircle, RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";
import FormModal from "@/components/FormModal";

interface FeeSummary {
  studentId: string;
  studentName: string;
  term: string;
  totalPaid: number;
  lastPaymentAmount: number;
  lastPaymentDate: string;
  lastPaymentMethod: string;
}

export default function AllFeesTable() {
  const [fees, setFees] = useState<FeeSummary[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchFees = async () => {
    setLoading(true);
    toast.dismiss();
    toast.loading("Fetching fees...");
    try {
      const res = await fetch(`/api/fees?page=${page}&limit=50&search=${search}`);
      const data = await res.json();
      
      console.log(data);

      if (res.ok) {
        // Aggregate payments per student per term
        const summaryMap = new Map<string, FeeSummary>();

        data.payments.forEach((p: any) => {
          const key = `${p.student.id}-${p.term}`;
          const prev = summaryMap.get(key);

          if (prev) {
            prev.totalPaid += p.amount;
            if (new Date(p.paidAt) > new Date(prev.lastPaymentDate)) {
              prev.lastPaymentDate = p.paidAt;
              prev.lastPaymentAmount = p.amount;
              prev.lastPaymentMethod = p.paymentMethod || "Cash";
            }
          } else {
            summaryMap.set(key, {
              studentId: p.student.id,
              studentName: p.student.name,
              term: p.term,
              totalPaid: p.amount,
              lastPaymentAmount: p.amount,
              lastPaymentDate: p.paidAt,
              lastPaymentMethod: p.paymentMethod || "Cash",
            });
          }
        });

        setFees(Array.from(summaryMap.values()));
        setTotalPages(data.totalPages || 1);
      } else toast.error(data.message || "Failed to fetch fees");
    } catch (err) {
      console.error(err);
      toast.error("Error fetching fees");
    } finally {
      toast.dismiss();
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFees();
  }, [page, refresh, search]);

  const columns = [
    { header: "Student Name" },
    { header: "Term" },
    { header: "Total Paid" },
    { header: "Last Payment Amount" },
    { header: "Last Payment Method" },
    { header: "Last Payment Date" },
    { header: "Actions" },
  ];

  const renderRow = (item: FeeSummary) => (
    <tr key={`${item.studentId}-${item.term}`} className="border-b even:bg-primary-light hover:bg-gray-100">
      <td className="p-2">{item.studentName}</td>
      <td className="p-2">{item.term}</td>
      <td className="p-2">{item.totalPaid}</td>
      <td className="p-2">{item.lastPaymentAmount}</td>
      <td className="p-2">{item.lastPaymentMethod}</td>
      <td className="p-2">{new Date(item.lastPaymentDate).toLocaleDateString()}</td>
      <td className="p-2 flex gap-2">
        <FormModal
          table="fees"
          type="update"
          data={{ studentId: item.studentId, term: item.term }}
          refresh={() => setRefresh(!refresh)}
        />
        <FormModal
          table="fees"
          type="delete"
          id={item.studentId}
          refresh={() => setRefresh(!refresh)}
        />
      </td>
    </tr>
  );

  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
      <div className="bg-primary-light p-4 rounded-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">All Students Fees Summary</h2>
          <div className="flex gap-4 items-center">
            <TableSearch value={search} onChange={setSearch} />
            <button onClick={() => setRefresh(!refresh)} className="p-2 rounded bg-accent-3">
              <RefreshCcw className={`stroke-primary ${refresh && "animate-spin"}`} />
            </button>
            <FormModal table="fees" type="create" refresh={() => setRefresh(!refresh)} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center p-4">
            <LoaderCircle className="animate-spin" />
          </div>
        ) : (
          <Table columns={columns} renderRow={renderRow} data={fees} />
        )}

        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>
    </div>
  );
}
