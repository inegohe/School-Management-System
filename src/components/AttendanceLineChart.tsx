"use client";

import Image from "next/image";
import LineChart from "./LineChart";

const AttendanceLineChart = () => {
  const data = [
    { name: "January", present: 200, absent: 400 - 200 },
    { name: "February", present: 180, absent: 400 - 180 },
    { name: "March", present: 220, absent: 400 - 220 },
    { name: "April", present: 210, absent: 400 - 210 },
    { name: "May", present: 230, absent: 400 - 230 },
    { name: "June", present: 240, absent: 400 - 240 },
    { name: "July", present: 250, absent: 400 - 250 },
    { name: "August", present: 260, absent: 400 - 260 },
    { name: "September", present: 270, absent: 400 - 270 },
    { name: "October", present: 280, absent: 400 - 280 },
    { name: "November", present: 290, absent: 400 - 290 },
    { name: "December", present: 300, absent: 400 - 300 },
  ];
  return (
    <div className="h-[450px] lg:h-full w-full flex flex-col bg-primary-light rounded-xl p-3 lg:p-4 gap-4">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Monthly Attendance</h1>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <LineChart data={data} />
    </div>
  );
};

export default AttendanceLineChart;
