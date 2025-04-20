"use client";

import { useCounts } from "@/store";
import BarChart from "./BarChart";
import Image from "next/image";

const AttendanceChart = () => {
  const counts = useCounts((state) => state.counts);
  return (
    <div className="h-[450px] w-full lg:w-2/3 flex flex-col bg-primary-light rounded-xl p-3 lg:p-4 gap-4">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Attendance</h1>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <BarChart data={counts.weeklyDailyAttendance} />
    </div>
  );
};

export default AttendanceChart;
