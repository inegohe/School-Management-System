"use client";

import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart"
import AttendanceLineChart from "@/components/AttendanceLineChart";
import Calender from "@/components/Calender"
import Cards from "@/components/Cards"
import CountChart from "@/components/CountChart"
import Event from "@/components/Event";
import Header from "@/components/Header"
import { useRole } from "@/store"
import { useEffect } from "react"

const AdminPage = () => {
  const setRole = useRole(state => state.setRole);
  useEffect(() => {
    setRole("admin");
  });
  return (
    <main className="flex flex-col overflow-scroll gap-4">
      <Header />
      <section className="w-full flex gap-2 flex-col md:flex-row">
        <div className="md:w-2/3 flex flex-col gap-4 p-2">
          <Cards />
          <div className="flex gap-2 w-full flex-col md:flex-row">
            <CountChart />
            <AttendanceChart />
          </div>
          <AttendanceLineChart />
        </div>
        <div className="md:w-1/3 flex flex-col gap-4 p-2">
          <div className="w-full rounded-md bg-white flex flex-col gap-4 p-2">
            <Calender />
            <Event />
          </div>
          <Announcement />
        </div>
      </section>
    </main>
  )
}

export default AdminPage