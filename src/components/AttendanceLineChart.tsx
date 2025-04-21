"use client";

import Image from "next/image";
import LineChart from "./LineChart";
import { useCounts } from "@/store";

const AttendanceLineChart = () => {
  const counts = useCounts((state) => state.counts);
  return (
    <div className="h-[450px] min-h-[450px] md:h-full w-full flex flex-col bg-primary-light rounded-xl p-3 md:p-4 gap-4">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Monthly Attendance</h1>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <LineChart data={counts.monthlyAttendance} />
    </div>
  );
};

export default AttendanceLineChart;
