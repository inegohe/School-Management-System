"use client";

import { useEffect, useState } from "react";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import toast from "react-hot-toast";
import { LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";

const columns = [
  { header: "Term" },
  { header: "Year" },
  { header: "Subject" },
  { header: "Exam" },
  { header: "Score" },
  { header: "Grade" },
];

export default function StudentPerformanceFull({ studentId }: { studentId: string }) {
  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState(new Date().getFullYear());
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");

  const fetchResults = async () => {
    try {
      toast.loading("Fetching performance...", { id: "fetch" });
      const res = await apiClient.get(
        `/performance?studentId=${studentId}&page=${page}&limit=10&term=${term}&year=${year}&search=${search}&sort=${order}`
      );
      if (res.status === 200) {
        setResults(res.data.performances);
        setTotalPages(res.data.totalPages);
        toast.dismiss("fetch");
      } else {
        toast.dismiss("fetch");
        toast.error(res.data.message || "Failed to fetch results");
      }
    } catch (err) {
      toast.dismiss("fetch");
      console.error(err);
      toast.error("Error fetching results");
    }
  };

  useEffect(() => {
    fetchResults();
  }, [page, term, year, order, refresh, search]);

  const renderRow = (item: any) => (
    <tr key={item.id} className="even:bg-primary-light text-sm">
      <td>{item.term}</td>
      <td>{item.year}</td>
      <td>{item.subject.name}</td>
      <td>{item.exam.name}</td>
      <td>{item.score}</td>
      <td>
        {item.score >= 80 ? "A" : item.score >= 70 ? "B" : item.score >= 60 ? "C" : "D"}
      </td>
    </tr>
  );

  return (
    <div className="p-4 bg-primary-light rounded-md m-4 mt-0">
      <div className="flex items-center gap-4 mb-4">
        <TableSearch value={search} onChange={setSearch} />
        <select value={term} onChange={(e) => setTerm(e.target.value)} className="border rounded px-2 py-1">
          <option>Term 1</option>
          <option>Term 2</option>
          <option>Term 3</option>
        </select>
        <input type="number" value={year} onChange={(e) => setYear(Number(e.target.value))} className="border rounded px-2 py-1 w-20" />
        <button onClick={() => setRefresh(!refresh)} className="w-8 h-8 bg-accent-3 rounded-full flex justify-center items-center">
          <RefreshCcw className="stroke-primary" />
        </button>
        <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")} className="w-8 h-8 bg-accent-3 rounded-full flex justify-center items-center">
          {order === "asc" ? <SortDesc className="stroke-primary" /> : <SortAsc className="stroke-primary" />}
        </button>
      </div>

      <Table columns={columns} renderRow={renderRow} data={results} />

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
