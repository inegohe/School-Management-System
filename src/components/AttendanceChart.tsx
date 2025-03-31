"use client";

import BarChart from "./BarChart";
import Image from "next/image";

const AttendanceChart = () => {
  const data = [
    { name: "Mon", present: 50, absent: 80 - 50 },
    { name: "Tue", present: 60, absent: 80 - 60 },
    { name: "Wed", present: 70, absent: 80 - 70 },
    { name: "Thu", present: 40, absent: 80 - 40 },
    { name: "Fri", present: 30, absent: 80 - 30 },
  ];
  return (
    <div className="h-[450px] w-full lg:w-2/3 flex flex-col bg-white rounded-xl p-3 lg:p-4 gap-4">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <BarChart data={data} />
    </div>
  );
};

export default AttendanceChart;
