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
  { header: "Student Name" },
  { header: "Class" },
  { header: "Average Score" },
  { header: "Best Subject" },
  { header: "Weak Subject" },
  { header: "Actions" },
];

const PerformanceSummaryPageInner = () => {
  const [performances, setPerformances] = useState<any[]>([]);
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
        `/performance?page=${page}&limit=50&term=${term}&year=${year}&search=${encodeURIComponent(search)}`
      );

      if (res.status === 200) {
        const results = res.data.results;

        // --- Aggregate per student ---
        const studentMap = new Map<string, any>();
        results.forEach((r: any) => {
          const id = r.student.id;
          if (!studentMap.has(id)) {
            studentMap.set(id, {
              studentId: id,
              studentName: r.student.name,
              class: r.student.class,
              totalScore: r.score,
              count: 1,
              bestSubject: r.subject.name,
              weakSubject: r.subject.name,
            });
          } else {
            const s = studentMap.get(id);
            s.totalScore += r.score;
            s.count += 1;
            if (r.score > s.totalScore / s.count) s.bestSubject = r.subject.name;
            if (r.score < s.totalScore / s.count) s.weakSubject = r.subject.name;
          }
        });

        const aggregated = Array.from(studentMap.values()).map((s: any) => ({
          studentId: s.studentId,
          studentName: s.studentName,
          class: s.class,
          averageScore: s.totalScore / s.count,
          bestSubject: s.bestSubject,
          weakSubject: s.weakSubject,
        }));

        // --- Sort by averageScore ---
        aggregated.sort((a, b) => (order === "asc" ? a.averageScore - b.averageScore : b.averageScore - a.averageScore));

        setPerformances(aggregated);
        setTotalPages(Math.ceil(aggregated.length / 10)); // simple pagination
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
    <tr key={item.studentId} className="even:bg-primary-light text-sm hover:cursor-pointer">
      <td className="p-3">{item.studentName}</td>
      <td>{item.class}</td>
      <td>{item.averageScore.toFixed(2)}%</td>
      <td>{item.bestSubject}</td>
      <td>{item.weakSubject}</td>
      <td>
        <Link href={`/list/performance/${item.studentId}`}>
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
          <select className="border rounded px-2 py-1" value={term} onChange={(e) => setTerm(e.target.value)}>
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
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3"
            onClick={() => setRefresh(!refresh)}
          >
            <RefreshCcw className={`stroke-primary ${refresh && "animate-spin"}`} />
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
