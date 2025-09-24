"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface Fee {
  id: number;
  term: string;
  amount: number;
  status: string;
  paidAt: string;
}

interface FeesTableProps {
  studentId: string | number;
}

const columns = [
  { header: "Term" },
  { header: "Amount" },
  { header: "Status" },
  { header: "Date" },
  { header: "Actions" },
];

export default function FeesTable({ studentId }: FeesTableProps) {
  const [fees, setFees] = useState<Fee[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(false);

  const fetchFees = async (page: number, searchQuery = "") => {
    if (!studentId) return;
    setLoading(true);
    toast.dismiss();
    toast.loading("Fetching Fees...");
    try {
      const res = await fetch(
        `/api/fees/student/${studentId}?page=${page}&search=${encodeURIComponent(
          searchQuery
        )}&sort=${order}`
      );
      const data = await res.json();
      if (res.ok) {
        setFees(data.fees || []);
        setTotalPages(data.totalPages || 1);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(data.message || "Failed to fetch fees");
      }
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error("An error occurred while fetching fees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFees(page, search);
  }, [studentId, page, refresh, search, order]);

  const renderRow = (item: Fee) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-primary-light text-sm hover:bg-cursor-pointer">
      <td className="p-2">{item.term}</td>
      <td className="p-2">{item.amount}</td>
      <td className="p-2">{item.status}</td>
      <td className="p-2">{new Date(item.paidAt).toLocaleDateString()}</td>
      <td className="p-2 flex gap-2">
        <FormModal table="fees" type="update" data={item} refresh={() => setRefresh(!refresh)} />
        <FormModal table="fees" type="delete" id={item.id} refresh={() => setRefresh(!refresh)} />
      </td>
    </tr>
  );

  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Fees Payments</h2>
        <div className="flex items-center gap-4">
          <TableSearch value={search} onChange={setSearch} />
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3"
            onClick={() => setRefresh(!refresh)}
          >
            <RefreshCcw className={`stroke-primary ${refresh && "animate-spin"}`} />
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3"
            onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          >
            {order === "asc" ? <SortAsc className="stroke-primary" /> : <SortDesc className="stroke-primary" />}
          </button>
          <FormModal table="fees" type="create" refresh={() => setRefresh(!refresh)} />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center p-4">
          <LoaderCircle className="animate-spin" /> Loading...
        </div>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={fees} />
      )}

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
