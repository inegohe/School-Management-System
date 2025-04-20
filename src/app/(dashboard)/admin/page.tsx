"use client";

import Announcement from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import AttendanceLineChart from "@/components/AttendanceLineChart";
import Calender from "@/components/Calender";
import Cards from "@/components/Cards";
import CountChart from "@/components/CountChart";
import Event from "@/components/Event";
import { useRole } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminPage = () => {
  const router = useRouter();
  const role = useRole((state) => state.role);

  useEffect(() => {
    if (role !== "ADMIN") {
      router.push(`/${role.toLowerCase()}`);
    }
  }, []);
  if (role !== "ADMIN") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not an ADMIN,
        redirecting to ${role} page`}
      </div>
    );
  } else
    return (
      <>
        <section className="w-full flex gap-2 flex-col xl:flex-row">
          <div className="xl:w-2/3 flex flex-col gap-4 p-2">
            <Cards />
            <div className="flex gap-2 w-full flex-col xl:flex-row">
              <CountChart />
              <AttendanceChart />
            </div>
            <AttendanceLineChart />
          </div>
          <div className="xl:w-1/3 flex flex-col gap-4 p-2">
            <div className="w-full rounded-md bg-primary-light flex flex-col gap-4 p-2">
              <Calender />
              <Event />
            </div>
            <Announcement />
          </div>
        </section>
      </>
    );
};

export default AdminPage;
