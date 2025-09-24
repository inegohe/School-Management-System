"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { LoaderCircle, RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";
import FormModal from "@/components/FormModal";

interface Fee {
  id: number;
  studentId: string;
  student: { id: string; name: string };
  term: string;
  amount: number;
  status: string;
  paidAt: string;
  paymentMethod?: string;
}

export default function AllFeesTable() {
  const [fees, setFees] = useState<Fee[]>([]);
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
      const res = await fetch(`/api/fees?page=${page}&limit=10&search=${search}`);
      const data = await res.json();
      if (res.ok) {
        setFees(data.payments || []);
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
    { header: "Amount" },
    { header: "Status" },
    { header: "Payment Method" },
    { header: "Date" },
    { header: "Actions" },
  ];

  const renderRow = (item: Fee) => (
    <tr key={item.id} className="border-b even:bg-primary-light hover:bg-gray-100">
      <td className="p-2">{item.student.name}</td>
      <td className="p-2">{item.term}</td>
      <td className="p-2">{item.amount}</td>
      <td className="p-2">{item.status}</td>
      <td className="p-2">{item.paymentMethod || "Cash"}</td>
      <td className="p-2">{new Date(item.paidAt).toLocaleDateString()}</td>
      <td className="p-2 flex gap-2">
        <FormModal table="fees" type="update" data={item} refresh={() => setRefresh(!refresh)} />
        <FormModal table="fees" type="delete" id={item.id} refresh={() => setRefresh(!refresh)} />
      </td>
    </tr>
  );

  return (
    <div className="flex-1 p-4 flex flex-col gap-4">
    <div className="bg-primary-light p-4 rounded-md">
    <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold">All Students Fees</h2>
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
