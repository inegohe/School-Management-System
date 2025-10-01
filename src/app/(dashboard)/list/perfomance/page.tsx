"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import apiClient from "@/lib/apiclient";
import toast from "react-hot-toast";
import { LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";

const columns = [
  { header: "Student Info" },
  { header: "Class" },
  { header: "Average Score" },
  { header: "Best Subject" },
  { header: "Weak Subject" },
  { header: "Actions" },
];

const PerformanceSummaryPageInner = () => {
  const [performances, setPerformances] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState(new Date().getFullYear());
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");

  const fetchPerformances = async () => {
    try {
      toast.loading("Fetching performance data...", { id: "fetch" });
      const res = await apiClient.get(
        `/performance?page=${page}&limit=10&term=${term}&year=${year}&search=${encodeURIComponent(
          search
        )}&sort=${order}`
      );
      if (res.status === 200) {
        setPerformances(res.data.performances);
        setTotalPages(res.data.totalPages);
        toast.dismiss("fetch");
      } else {
        toast.dismiss("fetch");
        toast.error(res.data.message || "Failed to fetch performances");
      }
    } catch (err) {
      toast.dismiss("fetch");
      console.error("Error fetching performance:", err);
      toast.error("An error occurred while fetching performances");
    }
  };

  useEffect(() => {
    fetchPerformances();
  }, [page, term, year, order, refresh, search]);

  const renderRow = (item: any) => (
    <tr key={item.id} className="even:bg-primary-light text-sm hover:cursor-pointer">
      <td className="flex p-3 h-full flex-col">
        <Link href={`/students/${item.studentId}`}>
          <h3 className="font-semibold">{item.studentName}</h3>
        </Link>
        <p className="text-xs text-gray-500 truncate w-32">{item.studentEmail}</p>
      </td>
      <td>{item.class}</td>
      <td>{item.averageScore.toFixed(2)}%</td>
      <td>{item.bestSubject}</td>
      <td>{item.weakSubject}</td>
      <td>
        <Link href={`/students/${item.studentId}/performance-full`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-1">
            View
          </button>
        </Link>
      </td>
    </tr>
  );

  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold">Student Performance Summary</h1>
        <div className="flex items-center gap-4">
          <TableSearch value={search} onChange={setSearch} />
          <select
            className="border rounded px-2 py-1"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option>Term 1</option>
            <option>Term 2</option>
            <option>Term 3</option>
          </select>
          <input
            type="number"
            className="border rounded px-2 py-1 w-20"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
            <RefreshCcw className={`stroke-primary ${refresh && "animate-spin"}`} onClick={() => setRefresh(!refresh)} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
            {order !== "asc" ? (
              <SortAsc onClick={() => setOrder("asc")} className="stroke-primary" />
            ) : (
              <SortDesc onClick={() => setOrder("desc")} className="stroke-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      <Table columns={columns} renderRow={renderRow} data={performances} />

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

const PerformanceSummaryPage = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> Loading...
      </div>
    }
  >
    <PerformanceSummaryPageInner />
  </Suspense>
);

export default PerformanceSummaryPage;
