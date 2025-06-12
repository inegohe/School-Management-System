"use client";

import Announcement from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import AttendanceLineChart from "@/components/AttendanceLineChart";
import Calender from "@/components/Calender";
import Cards from "@/components/Cards";
import CountChart from "@/components/CountChart";
import Event from "@/components/Event";
import { useCounts, useRole, useSchool } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchSchool } from "@/actions";
import toast from "react-hot-toast";
import { updateColors } from "@/lib/helpers";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const AdminPage = () => {
  const initDate = new Date();
  const router = useRouter();
  const { school, setSchool } = useSchool();
  const setCounts = useCounts((state) => state.setCounts);
  const [value, onChange] = useState<Value>(new Date());
  const role = useRole(state => state.role);

  const getData = async () => {
    toast.loading("Fetching Data...");
    const result = await fetchSchool(value as Date);
    if (!result.success) {
      toast.dismiss();
      toast.error(result.data);
      toast.error(
        "An error occured while fetching data, please refresh the page"
      );
    } else {
      const { _count, ...schoolData } = result.data;
      setSchool(schoolData);
      setCounts(_count);
      updateColors({
        primary: schoolData.primaryColor,
        "primary-light": schoolData.primaryColorLight,
        secondary: schoolData.secondaryColor,
        "secondary-light": schoolData.secondaryColorLight,
        "accent-1": schoolData.accentColor1,
        "accent-1-light": schoolData.accentColor1Light,
        "accent-2": schoolData.accentColor2,
        "accent-2-light": schoolData.accentColor2Light,
        "accent-3": schoolData.accentColor3,
        "accent-3-light": schoolData.accentColor3Light,
      });
      toast.dismiss();
    }
  };

  useEffect(() => {
    toast.dismiss();
    if (role !== "ADMIN") {
      router.push(`/${role.toLowerCase()}`);
    } else if (
      !school.id ||
      (value instanceof Date && value.getDay() !== initDate.getDay())
    ) {
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
        <section className="w-full flex gap-2 flex-col lg:flex-row">
          <div className="lg:w-2/3 flex flex-col gap-4 p-2">
            <Cards />
            <div className="flex gap-2 w-full flex-col md:flex-row">
              <CountChart />
              <AttendanceChart />
            </div>
            <AttendanceLineChart />
          </div>
          <div className="lg:w-1/3 flex flex-col gap-4 p-2">
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
