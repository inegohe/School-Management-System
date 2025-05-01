"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Announcements from "@/components/Announcements";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { useRole } from "@/store";
import Image from "next/image";
import apiClient from "@/lib/apiclient";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const SingleStudentPage = () => {
  const { id } = useParams();
  const role = useRole((state) => state.role);
  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchStudent = async () => {
    try {
      const res = await apiClient.get(`/students/${id}`);
      if (res.status === 200) {
        setStudent(res.data);
      } else {
        console.error("Failed to fetch student:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching student:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [id]);

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

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-primary-light py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-fit">
              <Image
                src={student.image || "/avatar.png"}
                alt={student.name}
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{student.name}</h1>
                {role === "ADMIN" && (
                  <FormModal table="students" type="update" data={student} />
                )}
              </div>
              <p className="text-sm text-gray-500">{student.class}</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="Email" width={14} height={14} />
                  <span>{student.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/calendar.png"
                    alt="BirthData"
                    width={14}
                    height={14}
                  />
                  <span>{student.birthdate}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/home.png"
                    alt="Address"
                    width={14}
                    height={14}
                  />
                  <span>{student.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="flex flex-col gap-1 mt-4 bg-primary-light rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <ScheduleCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-primary-light p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-accent-1"
              href={`/list/staffs?q=student:${student.name}`}
            >
              Student&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-accent-2"
              href={`/list/students?q=student:${student.name}`}
            >
              Student&apos;s Students
            </Link>
            <Link
              className="p-3 rounded-md bg-accent-3"
              href={`/list/subjects?q=student:${student.name}`}
            >
              Student&apos;s Subjects
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
