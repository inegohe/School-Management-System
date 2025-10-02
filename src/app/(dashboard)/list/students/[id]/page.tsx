"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Announcements from "@/components/Announcements";
import FormModal from "@/components/FormModal";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { useRole } from "@/store";
import Image from "next/image";
import apiClient from "@/lib/apiclient";
import { Calendar, Home, LoaderCircle, Mail } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Student } from "@prisma/client";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface FeeSummary {
  term: string;
  totalPaid: number;
  balance: number;
  lastPaymentDate: string | null;
  lastPaymentAmount: number;
  lastPaymentMethod?: string;
}

interface Payment {
  id: string;
  term: string;
  amount: number;
  status: string;
  paymentMethod?: string;
  paidAt: string;
}

const SingleStudentPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const role = useRole((state) => state.role);

  const [student, setStudent] = useState<Student>();
  const [fees, setFees] = useState<FeeSummary[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showFeeModal, setShowFeeModal] = useState(false);
  const [newFee, setNewFee] = useState({
    term: "",
    amount: "",
    status: "Paid",
    paymentMethod: "Cash",
  });

  // Fetch student details
  const fetchStudent = async () => {
    try {
      const res = await apiClient.get(`/students/${id}`);
      if (res.status === 200) {
        setStudent(res.data);
        fetchStudentFees(res.data.id);
      } else {
        console.error("Failed to fetch student:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching student:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch fees and payments for the student
  const fetchStudentFees = async (studentId: string) => {
    try {
      const res = await apiClient.get(`/fees?studentid=${studentId}`);
      if (res.status === 200) {
        const studentData = res.data.results.find(
          (r: any) => r.student.id === studentId
        );

        if (studentData) {
          setFees(studentData.termSummaries || []);
          setPayments(studentData.allPayments || []);
        }
      } else {
        console.error("Failed to fetch fees:", res.data.message);
      }
    } catch (err) {
      console.error("Error fetching fees:", err);
    }
  };

  // Generate PDF report for current year
  const generateFeesReport = () => {
    if (!student || payments.length === 0) {
      toast.error("No fee records available for report.");
      return;
    }

    const currentYear = new Date().getFullYear();
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Payment Report for ${student.name} (${currentYear})`, 14, 20);

    const terms = ["Term 1", "Term 2", "Term 3"];
    let yPos = 30;

    terms.forEach((term) => {
      const termPayments = payments.filter((p) => p.term === term);

      doc.setFontSize(14);
      doc.text(term, 14, yPos);
      yPos += 4;

      const tableData = termPayments.length
        ? termPayments.map((p) => [
            p.term,
            p.amount,
            p.status,
            p.paymentMethod || "Cash",
            p.paidAt ? new Date(p.paidAt).toLocaleDateString() : "-",
          ])
        : [["-", "0", "-", "-", "-"]];

      autoTable(doc, {
        startY: yPos,
        head: [["Term", "Amount", "Status", "Payment Method", "Paid At"]],
        body: tableData,
        theme: "grid",
        headStyles: { fillColor: [22, 160, 133] },
        margin: { left: 14, right: 14 },
        styles: { fontSize: 10 },
      });

      yPos = (doc as any).lastAutoTable.finalY + 10;
    });

    doc.save(`${student.name}_Fees_Report_${currentYear}.pdf`);
  };

  useEffect(() => {
    toast.dismiss();
    if (role !== "AUTH") {
      if (!["ADMIN", "TEACHER", "NONTEACHING"].includes(role)) {
        router.push(`/${role.toLowerCase()}`);
      } else {
        fetchStudent();
        setRefresh(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, refresh]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="font-bold flex gap-1 text-secondary-light">
          <LoaderCircle className="animate-spin" /> Loading...
        </p>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-red-600 font-bold">Student not found</p>
      </div>
    );
  }

  if (!["ADMIN", "TEACHER", "NONTEACHING"].includes(role)) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You do not have the necessary permission, redirecting to ${role} page`}
      </div>
    );
  }

  // Handle fee submission
  const handleFeeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/fees", {
        studentId: student?.id,
        schoolId: student?.schoolId,
        ...newFee,
        amount: parseFloat(newFee.amount),
      });

      if (res.status === 201) {
        toast.success("Fee recorded successfully");
        setShowFeeModal(false);
        setRefresh(!refresh);
      } else {
        toast.error("Failed to record fee");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error recording fee");
    }
  };

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* Student Info */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-primary-light py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-fit">
              <Image
                src={student.image || "/avatar.png"}
                alt={student.name}
                width={144}
                height={144}
                className="w-36 h-full md:h-36 rounded-md md:rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{student.name}</h1>
                {role === "ADMIN" && (
                  <FormModal
                    table="students"
                    type="update"
                    data={student}
                    refresh={() => setRefresh(!refresh)}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">{student.class}</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Mail className="text-secondary-light size-5" />
                  <span>{student.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Calendar className="text-secondary-light size-5" />
                  <span>{student.birthdate}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Home className="text-secondary-light size-5" />
                  <span>{student.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="flex flex-col gap-4 mt-4 bg-primary-light rounded-md p-4">
          <h1 className="font-semibold text-lg">Student&apos;s Schedule</h1>
          <ScheduleCalendar classes={[student.class]} subjects={[]} />
        </div>

        {/* Fees Summary Table */}
        <div className="flex flex-col gap-2 mt-4 bg-primary-light rounded-md p-4">
          <h1 className="font-semibold text-lg">Fees Payments Summary</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Total Paid</th>
                  <th>Balance</th>
                  <th>Last Payment Date</th>
                  <th>Last Payment Amount</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {fees.length > 0 ? (
                  fees.map((f) => (
                    <tr key={f.term} className="border-t">
                      <td>{f.term}</td>
                      <td>{f.totalPaid}</td>
                      <td>{f.balance}</td>
                      <td>
                        {f.lastPaymentDate
                          ? new Date(f.lastPaymentDate).toLocaleDateString()
                          : "-"}
                      </td>
                      <td>{f.lastPaymentAmount}</td>
                      <td>{f.lastPaymentMethod || "Cash"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-2">
                      No fees records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {role === "ADMIN" && (
            <button
              onClick={() => setShowFeeModal(true)}
              className="mt-2 bg-accent-1 text-white px-3 py-1 rounded-md"
            >
              Record Payment
            </button>
          )}
        </div>
      </div>

      {/* RIGHT: Shortcuts & Announcements */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-primary-light p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-accent-1"
              href={`/list/classes?q=${student.class}`}
            >
              Student&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-accent-2"
              href={`/list/staffs?q=${student.class}`}
            >
              Student&apos;s Teacher
            </Link>
            <Link
              className="p-3 rounded-md bg-accent-3"
              href={`/list/parent?q=${student.parentName}`}
            >
              Student&apos;s Parent
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                generateFeesReport();
              }}
              className="p-3 rounded-md bg-accent-3"
            >
              Fees Report Summary
            </Link>
            <Link
              className="p-3 rounded-md bg-accent-2"
              href={`/list/performance/${student.id}`} // adjust path to match your route
            >
              View Performance
            </Link>
          </div>
        </div>
        <Announcements />
      </div>

      {/* Fee Modal */}
      {showFeeModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-semibold mb-4">Record Fee Payment</h2>
            <form onSubmit={handleFeeSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Term (e.g. Term 1)"
                value={newFee.term}
                onChange={(e) => setNewFee({ ...newFee, term: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={newFee.amount}
                onChange={(e) =>
                  setNewFee({ ...newFee, amount: e.target.value })
                }
                className="border p-2 rounded"
                required
              />
              <select
                value={newFee.status}
                onChange={(e) =>
                  setNewFee({ ...newFee, status: e.target.value })
                }
                className="border p-2 rounded"
              >
                <option value="Paid">Paid</option>
                <option value="Pending">Pending</option>
                <option value="Overdue">Overdue</option>
              </select>
              <select
                value={newFee.paymentMethod}
                onChange={(e) =>
                  setNewFee({ ...newFee, paymentMethod: e.target.value })
                }
                className="border p-2 rounded"
              >
                <option value="Cash">Cash</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Bank">Bank</option>
              </select>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowFeeModal(false)}
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
};

export default SingleStudentPage;
