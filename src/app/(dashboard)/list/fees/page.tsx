"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { LoaderCircle, RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";
import apiClient from "@/lib/apiclient";

// Dummy role check; replace with your auth store
const role = "ADMIN"; // or fetch from your useRole hook

interface FeeSummary {
  studentId: string;
  studentName: string;
  term: string;
  totalPaid: number;
  balance: number;
  lastPaymentAmount: number;
  lastPaymentDate: string | null;
  lastPaymentMethod: string;
}

export default function AllFeesTable() {
  const [fees, setFees] = useState<FeeSummary[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{
    studentId: string;
    studentName: string;
    term: string;
  } | null>(null);

  const [newFee, setNewFee] = useState({
    amount: "",
    status: "Paid",
    paymentMethod: "Cash",
  });

  const fetchFees = async () => {
    setLoading(true);
    toast.dismiss();
    toast.loading("Fetching fees...");
    try {
      const res = await fetch(`/api/fees?page=${page}&limit=50&search=${search}`);
      const data = await res.json();

      if (res.ok) {
        const flattened: FeeSummary[] = [];

        data.results.forEach((r: any) => {
          const student = r.student;
          const terms = ["Term 1", "Term 2", "Term 3"];
          const termMap: Record<string, any> = {};

          r.termSummaries.forEach((t: any) => {
            termMap[t.term] = t;
          });

          terms.forEach((term) => {
            const t = termMap[term];
            flattened.push({
              studentId: student.id,
              studentName: student.name,
              term,
              totalPaid: t?.totalPaid || 0,
              balance: t?.balance || 0,
              lastPaymentAmount: t?.lastPaymentAmount || 0,
              lastPaymentDate: t?.lastPaymentDate || null,
              lastPaymentMethod: t?.lastPaymentMethod || "",
            });
          });
        });

        setFees(flattened);
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

  const handleFeeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return;
    try {
      const res = await apiClient.post("/fees", {
        studentId: selectedStudent.studentId,
        term: selectedStudent.term,
        amount: parseFloat(newFee.amount),
        status: newFee.status,
        paymentMethod: newFee.paymentMethod,
      });

      if (res.status === 201) {
        toast.success("Fee recorded successfully");
        setShowModal(false);
        setNewFee({ amount: "", status: "Paid", paymentMethod: "Cash" });
        setRefresh(!refresh);
      } else {
        toast.error("Failed to record fee");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error recording fee");
    }
  };

  const columns = [
    { header: "Student Name" },
    { header: "Term" },
    { header: "Total Paid" },
    { header: "Balance" },
    { header: "Last Payment Amount" },
    { header: "Last Payment Method" },
    { header: "Last Payment Date" },
    { header: "Actions" },
  ];

  const renderRow = (item: FeeSummary) => (
    <tr
      key={`${item.studentId}-${item.term}`}
      className="border-b even:bg-primary-light hover:bg-gray-100"
    >
      <td className="p-2">{item.studentName}</td>
      <td className="p-2">{item.term}</td>
      <td className="p-2">{item.totalPaid}</td>
      <td className="p-2">{item.balance}</td>
      <td className="p-2">{item.lastPaymentAmount}</td>
      <td className="p-2">{item.lastPaymentMethod}</td>
      <td className="p-2">
        {item.lastPaymentDate ? new Date(item.lastPaymentDate).toLocaleDateString() : "-"}
      </td>
      <td className="p-2 flex gap-2">
        {role === "ADMIN" && (
          <button
            onClick={() => {
              setSelectedStudent({
                studentId: item.studentId,
                studentName: item.studentName,
                term: item.term,
              });
              setShowModal(true);
            }}
            className="px-2 py-1 bg-accent-1 text-white rounded"
          >
            Add Payment
          </button>
        )}
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

      {showModal && selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-semibold mb-4">
              Add Payment for {selectedStudent.studentName} ({selectedStudent.term})
            </h2>
            <form onSubmit={handleFeeSubmit} className="flex flex-col gap-3">
              <input
                type="number"
                placeholder="Amount"
                value={newFee.amount}
                onChange={(e) => setNewFee({ ...newFee, amount: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <select
                value={newFee.status}
                onChange={(e) => setNewFee({ ...newFee, status: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
              <select
                value={newFee.paymentMethod}
                onChange={(e) => setNewFee({ ...newFee, paymentMethod: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="Cash">Cash</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Bank">Bank</option>
              </select>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="px-3 py-1 bg-accent-1 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
