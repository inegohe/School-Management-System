"use client";

import Announcement from "@/components/Announcement";
import Calender from "@/components/Calender";
import Event from "@/components/Event";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { useRole } from "@/store";
import { useEffect } from "react";

const StudentPage = () => {
  const setRole = useRole((state) => state.setRole);
  useEffect(() => {
    setRole("student");
  });
  return (
    <>
      <section className="w-full flex gap-2 flex-col xl:flex-row h-full">
        <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
          <div className="h-[850px] lg:h-full flex flex-col bg-white p-3 lg:p-4">
            <div className="w-full justify-between flex items-center">
              <h1 className="font-bold text-lg">Schedule (4A)</h1>
            </div>
            <ScheduleCalendar />
          </div>
        </div>
        <div className="xl:w-1/3 flex flex-col gap-4 p-2 h-full">
          <div className="w-full rounded-md bg-white flex flex-col gap-4 p-2">
            <Calender />
            <Event />
          </div>
          <Announcement />
        </div>
      </section>
    </>
  );
};

export default StudentPage;
