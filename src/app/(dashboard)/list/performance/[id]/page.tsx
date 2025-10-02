"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import toast from "react-hot-toast";
import { RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import { useUserData } from "@/store";


import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@/components/ui/button"; // optional if you use ShadCN UI

const columns = [
  { header: "Term" },
  { header: "Year" },
  { header: "Subject" },
  { header: "Exam" },
  { header: "Score" },
  { header: "Grade" },
];

export default function StudentPerformanceFull() {
  const params = useParams();
  const studentId = params?.id;

  const [results, setResults] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [term, setTerm] = useState("Term 1");
  const [year, setYear] = useState(new Date().getFullYear());
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [student, setStudent] = useState<any>(null);
  const { userData: admin } = useUserData();

  // --- Modal State ---
  const [showResultModal, setShowResultModal] = useState(false);
  const [newResult, setNewResult] = useState({
    subjectId: "",
    examId: "",
    score: "",
    remarks: "",
  });

  const [exams, setExams] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);

  // Fetch exams and subjects for dropdowns
  const fetchInitialData = async () => {
    try {
      // 1. Fetch student
      const studentRes = await apiClient.get(`/students/${studentId}`);
      let studentData = studentRes.data;

      // 2. Fetch class by student.class (string) + schoolId
      const classRes = await apiClient.get(
        `/classes?search=${studentData.class}`
      );
      // Assume the first match is the correct class
      const matchedClass = classRes.data.classes[0];

      // 3. Merge class teacher into student object
      studentData = {
        ...studentData,
        classTeacher: matchedClass?.classTeacher || "-",
      };

      setStudent(studentData);

      // 4. Fetch exams & subjects as before
      const [examRes, subjectRes] = await Promise.all([
        apiClient.get(`/exams`),
        apiClient.get(`/subjects`),
      ]);

      if (examRes.status === 200) setExams(examRes.data);
      if (subjectRes.status === 200) setSubjects(subjectRes.data.subjects);
    } catch (err) {
      console.error("Error fetching initial data:", err);
      toast.error("Failed to load initial data");
    }
  };

  const fetchResults = async () => {
    try {
      toast.loading("Fetching performance...", { id: "fetch" });
      const res = await apiClient.get(
        `/performance?studentId=${studentId}&page=${page}&limit=10&term=${term}&year=${year}&search=${search}&sort=${order}`
      );
      if (res.status === 200) {
        setResults(res.data.results);
        console.log(results);
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

  const handleAddResult = async () => {
    if (!studentId) {
      toast.error("Student ID is missing. Cannot submit result.");
      return;
    }

    if (!newResult.subjectId || !newResult.examId || !newResult.score) {
      toast.error("Please select subject, exam, and enter a score");
      return;
    }

    try {
      const res = await apiClient.post("/performance", {
        studentId,
        subjectId: newResult.subjectId,
        examId: newResult.examId,
        score: parseFloat(newResult.score),
        remarks: newResult.remarks || "",
      });

      if (res.status === 201) {
        toast.success("Result added successfully");
        setShowResultModal(false);
        setRefresh(!refresh);
      } else {
        toast.error(res.data.message || "Failed to add result");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Error adding result");
    }
  };

  const handleGenerateReport = () => {
    if (!results || results.length === 0) {
      toast.error("No results available to generate report");
      return;
    }
    if (!student) {
      toast.error("Student details not loaded yet");
      return;
    }

    const doc = new jsPDF("p", "pt", "a4");
    const margin = 40;
    let y = margin;

    // --- Header ---
    doc.setFontSize(14);
    doc.text("Student Performance Report", 210, y, { align: "center" });
    y += 30;

    // --- Student & Guardian Details ---
    doc.setFontSize(11);
    doc.text(`Student Name: ${student.name}`, margin, y);
    y += 15;
    doc.text(`Class: ${student.class}`, margin, y);
    y += 15;
    doc.text(`Class Teacher: ${student.classTeacher || "-"}`, margin, y);
    y += 15;
    doc.text(
      `Guardian: ${student.parentName} (${student.parentNo})`,
      margin,
      y
    );
    y += 20;

    // --- Latest Term ---
    const terms = Array.from(new Set(results.map((r) => r.exam.term)));
    const latestTerm = terms.sort().pop();
    const termResults = results.filter((r) => r.exam.term === latestTerm);

    // --- Group by Exam ---
    const examsMap: Record<string, any[]> = {};
    termResults.forEach((r) => {
      if (!examsMap[r.exam.name]) examsMap[r.exam.name] = [];
      examsMap[r.exam.name].push(r);
    });

    Object.keys(examsMap).forEach((examName) => {
      if (y > 700) {
        doc.addPage();
        y = margin;
      }

      doc.setFontSize(12);
      doc.text(`${examName} (${latestTerm})`, margin, y);
      y += 10;

      const tableData = examsMap[examName].map((r) => [
        r.subject.name,
        r.score,
        r.grade,
        r.remarks || "-",
      ]);

      autoTable(doc, {
        startY: y,
        head: [["Subject", "Score", "Grade", "Remarks"]],
        body: tableData,
        margin: { left: margin, right: margin },
        theme: "grid",
        styles: { fontSize: 10 },
      });

      y = (doc as any).lastAutoTable.finalY + 20;
    });

    // --- Footer ---
    doc.setFontSize(10);
    doc.text(`Report generated by Admin ${admin?.name || "Admin"}`, margin, 820);

    doc.save(`${student.name}_report.pdf`);
  };

  useEffect(() => {
    fetchResults();
    fetchInitialData();
  }, [page, term, year, order, refresh, search]);

  const renderRow = (item: any) => (
    <tr key={item.id} className="even:bg-primary-light text-sm">
      <td>{item.exam.term}</td>
      <td>{item.exam.year}</td>
      <td>{item.subject.name}</td>
      <td>{item.exam.name}</td>
      <td>{item.score}</td>
      <td>
        {item.score >= 80
          ? "A"
          : item.score >= 70
          ? "B"
          : item.score >= 60
          ? "C"
          : "D"}
      </td>
    </tr>
  );

  return (
    <div className="p-4 bg-primary-light rounded-md m-4 mt-0">
      <div className="flex items-center gap-4 mb-4">
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option>Term 1</option>
          <option>Term 2</option>
          <option>Term 3</option>
        </select>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20"
        />
        <button
          onClick={() => setRefresh(!refresh)}
          className="w-8 h-8 bg-accent-3 rounded-full flex justify-center items-center"
        >
          <RefreshCcw className="stroke-primary" />
        </button>
        <button
          onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          className="w-8 h-8 bg-accent-3 rounded-full flex justify-center items-center"
        >
          {order === "asc" ? (
            <SortDesc className="stroke-primary" />
          ) : (
            <SortAsc className="stroke-primary" />
          )}
        </button>
        <button
          onClick={() => setShowResultModal(true)}
          className="ml-auto px-3 py-1 bg-accent-1 text-white rounded"
        >
          Add Result
        </button>
        <button
          onClick={() => handleGenerateReport()}
          className="px-3 py-1 bg-accent-2 text-white rounded"
        >
          Generate PDF Report
        </button>
      </div>

      <Table columns={columns} renderRow={renderRow} data={results} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      {/* --- Modal --- */}
      {showResultModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-semibold mb-4">Add Exam Result</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                handleAddResult();
              }}
              className="flex flex-col gap-3"
            >
              <select
                value={newResult.examId}
                onChange={(e) =>
                  setNewResult({ ...newResult, examId: e.target.value })
                }
                className="border p-2 rounded"
                required
              >
                <option value="">Select Exam</option>
                {exams.map((exam) => (
                  <option key={exam.id} value={exam.id}>
                    {exam.name} ({exam.term} {exam.year})
                  </option>
                ))}
              </select>

              <select
                value={newResult.subjectId}
                onChange={(e) =>
                  setNewResult({ ...newResult, subjectId: e.target.value })
                }
                className="border p-2 rounded"
                required
              >
                <option value="">Select Subject</option>
                {subjects.map((subj) => (
                  <option key={subj.id} value={subj.id}>
                    {subj.name}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="Score"
                value={newResult.score}
                onChange={(e) =>
                  setNewResult({ ...newResult, score: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Remarks"
                value={newResult.remarks}
                onChange={(e) =>
                  setNewResult({ ...newResult, remarks: e.target.value })
                }
                className="border p-2 rounded"
              />

              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowResultModal(false)}
                  className="px-3 py-1 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 bg-accent-1 text-white rounded"
                >
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
