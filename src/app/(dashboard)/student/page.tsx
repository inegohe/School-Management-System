"use client";

import Announcement from "@/components/Announcements";
import Calender from "@/components/Calender";
import Event from "@/components/Event";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { getUser } from "@/server-actions";
import { useRole, useUser } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const StudentPage = () => {
  const router = useRouter();
  const [value, onChange] = useState<Value>(new Date());
  const setUser = useUser((state) => state.setUser);
  const { role, setRole } = useRole();

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    if (role === "AUTH") {
      getUserRole();
    } else if (role !== "STUDENT") {
      router.push(`/${role.toLowerCase()}`);
    }
  }, [value, role]);

  if (role !== "STUDENT") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not a STUDENT,
        redirecting to ${role} page`}
      </div>
    );
  } else
    return (
      <>
        <section className="w-full flex gap-2 flex-col xl:flex-row h-fit">
          <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
            <div className="h-[850px] lg:h-full flex flex-col bg-primary p-3 lg:p-4">
              <div className="w-full justify-between flex items-center">
                <h1 className="font-bold text-lg">Schedule (4A)</h1>
              </div>
              <ScheduleCalendar />
            </div>
          </div>
          <div className="xl:w-1/3 flex flex-col gap-4 p-2 h-full">
            <div className="w-full rounded-md bg-primary-light flex flex-col gap-4 p-2">
              <Calender value={value} onChange={onChange}/>
              <Event />
            </div>
            <Announcement />
          </div>
        </section>
      </>
    );
};

export default StudentPage;
