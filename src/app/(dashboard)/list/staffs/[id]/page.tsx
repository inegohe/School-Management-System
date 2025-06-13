"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Announcements from "@/components/Announcements";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { useRole } from "@/store";
import Image from "next/image";
import apiClient from "@/lib/apiclient";
import { Home, LoaderCircle, Mail, PhoneCall } from "lucide-react";
import Link from "next/link";
import { Staff } from "@prisma/client";

const SingleTeacherPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const role = useRole((state) => state.role);
  const [teacher, setTeacher] = useState<Staff | null>(null);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchTeacher = async () => {
    try {
      const res = await apiClient.get(`/staffs/${id}`);
      if (res.status === 200) {
        setTeacher(res.data);
      } else {
        console.error("Failed to fetch teacher:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching teacher:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    toast.dismiss()
    if (role !== "AUTH") {
      if (
        !["ADMIN", "TEACHER", "NONTEACHING", "PARENT", "STUDENT"].includes(role)
      ) {
        router.push("/login");
      } else {
        fetchTeacher();
        setRefresh(false);
      }
    }
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

  if (!teacher) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-red-600 font-bold">Teacher not found</p>
      </div>
    );
  }

  if (!["ADMIN", "TEACHER", "NONTEACHING", "PARENT", "STUDENT"].includes(role)) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
          <LoaderCircle className="animate-spin" />{" "}
          {role === "AUTH"
            ? "Authenticating..."
            : `You do not have the necessary permission,
          redirecting to ${role} page`}
        </div>
    );
  } else
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
                  src={teacher.image || "/avatar.png"}
                  alt={teacher.name}
                  width={144}
                  height={144}
                  className="w-36 h-full md:h-36 rounded-md md:rounded-full object-cover"
                />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-semibold">{teacher.name}</h1>
                  {role === "ADMIN" && (
                    <FormModal
                      table="staffs"
                      type="update"
                      data={teacher}
                      refresh={() => setRefresh(!refresh)}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-500">{teacher.post}</p>
                <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <div>
                      <Mail className="text-secondary-light size-5" />
                    </div>
                    <span>{teacher.email}</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <div>
                      <PhoneCall className="text-secondary-light size-5" />
                    </div>
                    <span>{teacher.phoneNo}</span>
                  </div>
                  <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <div>
                      <Home className="text-secondary-light size-5" />
                    </div>
                    <span>{teacher.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="flex flex-col gap-1 mt-4 bg-primary-light rounded-md p-4 h-[1080px]">
            <h1>Teacher&apos;s Schedule</h1>
            <ScheduleCalendar
              classes={teacher.classesTeaching}
              subjects={teacher.subjectsTaught}
              isStaff={true}
            />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <div className="bg-primary-light p-4 rounded-md">
            <h1 className="text-xl font-semibold">Shortcuts</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
              <Link
                className="p-3 rounded-md bg-accent-1"
                href={`/list/classes?q=${teacher.name}`}
              >
                Teacher&apos;s Classes
              </Link>
              <Link
                className="p-3 rounded-md bg-accent-2"
                href={`/list/students?q=${teacher.name}`}
              >
                Teacher&apos;s Students
              </Link>
              <Link
                className="p-3 rounded-md bg-accent-3"
                href={`/list/subjects?q=${teacher.name}`}
              >
                Teacher&apos;s Subjects
              </Link>
            </div>
          </div>
          <div className="bg-primary-light p-4 rounded-md">
            <h1 className="text-xl font-semibold">Classes Teaching</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs">
              {teacher.classesTeaching.map((x, i) => (
                <p
                  key={i}
                  className="p-3 rounded-md odd:bg-accent-2 even:bg-accent-1 text-gray-500"
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-primary-light p-4 rounded-md">
            <h1 className="text-xl font-semibold">Subjects Teaching</h1>
            <div className="mt-4 flex gap-4 flex-wrap text-xs">
              {teacher.subjectsTaught.map((x, i) => (
                <p
                  key={i}
                  className="p-3 rounded-md odd:bg-accent-3 even:bg-accent-2 text-gray-500"
                >
                  {x}
                </p>
              ))}
            </div>
          </div>
          <Performance level={parseInt(teacher.level) || 0} />
          <Announcements />
        </div>
      </div>
    );
};

export default SingleTeacherPage;
