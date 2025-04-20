"use client";

import Announcement from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import AttendanceLineChart from "@/components/AttendanceLineChart";
import Calender from "@/components/Calender";
import Cards from "@/components/Cards";
import CountChart from "@/components/CountChart";
import Event from "@/components/Event";
import { useCounts, useRole, useSchool, useUser } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchSchool } from "@/actions";
import toast from "react-hot-toast";
import { getUser } from "@/server-actions";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const AdminPage = () => {
  const router = useRouter();
  const setUser = useUser((state) => state.setUser);
  const setSchool = useSchool((state) => state.setSchool);
  const setCounts = useCounts((state) => state.setCounts);
  const [value, onChange] = useState<Value>(new Date());
  const { role, setRole } = useRole();

  const getData = async () => {
    toast("Fetching...");
    const result = await fetchSchool(value as Date);
    if (!result.success) {
      toast(result.data);
      toast("An error occured while fetching data, please refresh the page");
    } else {
      const { _count, ...schoolData } = result.data;
      setSchool(schoolData);
      setCounts(_count);
    }
  };

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    if (role === "AUTH") {
      getUserRole();
    } else if (role !== "ADMIN") {
      router.push(`/${role.toLowerCase()}`);
    } else {
      getData();
    }
  }, [value, role]);

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
              <Calender value={value} onChange={onChange} />
              <Event />
            </div>
            <Announcement />
          </div>
        </section>
      </>
    );
};

export default AdminPage;
