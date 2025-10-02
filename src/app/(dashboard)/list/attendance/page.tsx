"use client";

import { useEffect, useState } from "react";
import { useRole, useUser } from "@/store";
import apiClient from "@/lib/apiclient";
import { LoaderCircle, RefreshCcw } from "lucide-react";
import toast from "react-hot-toast";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";

const columns = [
  { header: "Name" },
  { header: "Class", className: "hidden md:table-cell" },
  { header: "Present" },
  { header: "Absent" },
];

const AttendancePage = () => {
  const role = useRole((state) => state.role);
  const user = useUser((state) => state.user);
  const [students, setStudents] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<
    Record<string, "PRESENT" | "ABSENT">
  >({});
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [attendanceMarkable, setAttendanceMarkable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (role !== "AUTH") {
      if (role !== "TEACHER") {
        toast.error("Only teaching staff can take attendance");
      } else {
        toast.loading("Fetching Data...");
        fetchStudents();
        setRefresh(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, page, refresh, search]);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get(
        `/attendance?page=${page}&limit=10&search=${encodeURIComponent(search)}`
      );
      if (res.status === 200) {
        const day = (new Date(Date.now())).getDay();
        setStudents(res.data.students);
        setTotalPages(res.data.totalPages);
        setAttendanceMarked(res.data.attendanceMarked);
        setAttendanceMarkable([0,6].includes(day) ? false : true);
        setAttendance(res.data.attendance || {});
      } else {
        toast.error(res.data.message || "Failed to fetch students");
      }
    } catch (error) {
      toast.error("Error fetching students");
    } finally {
      toast.dismiss();
      setLoading(false);
    }
  };

  const handleCheck = (id: string, status: "PRESENT" | "ABSENT") => {
    setAttendance((prev) => ({
      ...prev,
      [id]: status,
    }));
  };

  const handleSubmit = async () => {
    const data = Object.entries(attendance).map(([studentId, status]) => ({
      studentId,
      status,
    }));
    if (data.length === 0) {
      toast.error("Please mark attendance for at least one student.");
      return;
    }
    try {
      toast.loading("Submitting attendance...");
      const res = await apiClient.post("/attendance", { data });
      if (res.status === 200) {
        toast.success("Attendance submitted!");
        setAttendance({});
        setRefresh((r) => !r);
      } else {
        toast.error(res.data.message || "Failed to submit attendance");
      }
    } catch (error) {
      toast.error("Error submitting attendance");
    } finally {
      toast.dismiss();
    }
  };

  const renderRow = (student: any) => (
    <tr key={student.id} className="even:bg-primary-light text-sm">
      <td>{student.name}</td>
      <td className="hidden md:table-cell">{student.class}</td>
      <td>
        <input
          type="checkbox"
          defaultChecked={attendance[student.id] === "PRESENT"}
          onChange={(e) => attendanceMarkable && handleCheck(student.id, e.target.checked ? "PRESENT" : "ABSENT")}
          disabled={!attendanceMarkable || attendance[student.id] === "ABSENT"}
        />
      </td>
      <td>
        <input
          type="checkbox"
          defaultChecked={attendance[student.id] === "ABSENT"}
          onChange={(e) => attendanceMarkable && handleCheck(student.id, e.target.checked ? "ABSENT" : "PRESENT")}
          disabled={!attendanceMarkable && attendance[student.id] === "PRESENT"}
        />
      </td>
    </tr>
  );

  if (role !== "TEACHER") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : "You are not a teaching staff, redirecting..."}
      </div>
    );
  }

  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Take Attendance
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch value={search} onChange={setSearch} />
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3"
            onClick={() => setRefresh((r) => !r)}
          >
            <RefreshCcw
              className={`stroke-primary ${refresh && "animate-spin"}`}
            />
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <Table columns={columns} renderRow={renderRow} data={students} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
        <button
          type="submit"
          className="button self-end"
          disabled={!attendanceMarkable || loading}
        >
          {loading && <LoaderCircle className="animate-spin" />}{" "}
          {attendanceMarked
            ? "Update Attendance"
            : loading
            ? "Loading..."
            : "Submit Attendance"}
        </button>
      </form>
    </div>
  );
};

export default AttendancePage;
