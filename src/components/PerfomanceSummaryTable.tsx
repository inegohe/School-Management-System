"use client";

import { useEffect, useState } from "react";
import apiClient from "@/lib/apiclient";
import toast from "react-hot-toast";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function StudentPerformanceSummary({
  studentId,
}: {
  studentId: string;
}) {
  const [summary, setSummary] = useState<any>(null);
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState(new Date().getFullYear());

  const fetchSummary = async () => {
    try {
      const res = await apiClient.get(
        `/performance/summary?studentId=${studentId}&term=${term}&year=${year}`
      );
      if (res.status === 200) {
        setSummary(res.data.summary);
      } else {
        toast.error(res.data.message || "Failed to fetch summary");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error fetching summary");
    }
  };

  useEffect(() => {
    fetchSummary();
  }, [term, year]);

  if (!summary) return <p>No data available for this term</p>;

  return (
    <Card className="p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">
        Performance Summary ({term}, {year})
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500">Average Score</p>
          <p className="font-bold text-xl">{summary.average.toFixed(2)}%</p>
        </div>
        <div>
          <p className="text-gray-500">Best Subject</p>
          <p className="font-bold text-xl">{summary.bestSubject}</p>
        </div>
        <div>
          <p className="text-gray-500">Weakest Subject</p>
          <p className="font-bold text-xl">{summary.weakestSubject}</p>
        </div>
        <div>
          <p className="text-gray-500">Grade</p>
          <p className="font-bold text-xl">{summary.grade}</p>
        </div>
      </div>
      <Link href={`/students/${studentId}/performance`} className="button mt-4">
        View Full Performance
      </Link>
    </Card>
  );
}
