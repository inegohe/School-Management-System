"use client";

import Announcement from "@/components/Announcements";
import ScheduleCalendar from "@/components/ScheduleCalender";
import { getUser } from "@/server-actions";
import { useRole, useUser } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ParentPage = () => {
  const router = useRouter();
  const setUser = useUser((state) => state.setUser);
  const { role, setRole } = useRole();

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    if (role === "AUTH") {
      getUserRole();
    } else if (role !== "PARENT") {
      router.push(`/${role.toLowerCase()}`);
    }
  }, [role]);

  if (role !== "PARENT") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not a PARENT,
        redirecting to ${role} page`}
      </div>
    );
  } else
    return (
      <>
        <section className="w-full flex gap-2 flex-col xl:flex-row h-fit">
          <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
            <div className="h-[850px] lg:h-full flex flex-col bg-primary-light p-3 lg:p-4">
              <div className="w-full justify-between flex items-center">
                <h1 className="font-bold text-lg">Schedule (John Doe)</h1>
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

export default ParentPage;
