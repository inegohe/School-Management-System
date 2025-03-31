"use client";

import Announcement from "@/components/Announcement";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { useRole } from "@/store";
import { useEffect } from "react";

const TeacherPage = () => {
  const setRole = useRole((state) => state.setRole);
  useEffect(() => {
    setRole("teacher");
  });
  return (
    <>
      <section className="w-full flex gap-2 flex-col xl:flex-row h-full">
        <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
          <div className="h-[850px] lg:h-full flex flex-col bg-white p-3 lg:p-4">
            <div className="w-full justify-between flex items-center">
              <h1 className="font-bold text-lg">Schedule</h1>
            </div>
            <ScheduleCalendar />
          </div>
        </div>
        <div className="xl:w-1/3 flex flex-col gap-4 p-2">
          <Announcement />
        </div>
      </section>
    </>
  );
};

export default TeacherPage;
