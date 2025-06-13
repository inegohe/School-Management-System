"use client";

import { fetchSchool } from "@/actions";
import Announcement from "@/components/Announcements";
import Event from "@/components/Event";
import ScheduleCalendar from "@/components/ScheduleCalender";
import SchoolCard from "@/components/SchoolCard";
import apiClient from "@/lib/apiclient";
import { updateColors } from "@/lib/helpers";
import { useCounts, useRole, useSchool, useUserData } from "@/store";
import { Parent } from "@prisma/client";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ParentPage = () => {
  const router = useRouter();
  const [parent, setParent] = useState<
    {
      Student: {
        name: string;
        class: string;
      }[];
    } & Parent
  >();
  const setUserData = useUserData((state) => state.setUserData);
  const { school, setSchool } = useSchool();
  const setCounts = useCounts((state) => state.setCounts);
  const role = useRole((state) => state.role);

  const fetchParent = async () => {
    try {
      const res = await apiClient.get("/parents/self");
      if (res.status === 200) {
        setParent(res.data);
        setUserData({
          id: res.data.id,
          name: res.data.name,
          image: res.data.image,
          phoneNo: res.data.phoneNo,
          address: res.data.address,
          teaching: res.data.teaching,
          admin: res.data.admin,
        });
      } else {
        console.error("Failed to fetch teacher:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching teacher:", error);
    }
  };

  const getData = async () => {
    toast.loading("Fetching Data...");
    const result = await fetchSchool(new Date(Date.now()));
    await fetchParent();
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
    if (role !== "AUTH") {
      if (role !== "PARENT") {
        router.push(`/${role.toLowerCase()}`);
      } else if (!school.id) {
        getData();
      }
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
      <div className="flex gap-2 flex-col w-full h-full mb-4">
        <section className="w-full flex gap-2 flex-col xl:flex-row h-fit">
          <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
            {parent &&
              parent.Student.map((student, i) => (
                <>
                  <div
                    key={i}
                    className="h-[850px] flex flex-col bg-primary-light p-3 lg:p-4"
                  >
                    <div className="w-full justify-between flex items-center">
                      <h1 className="font-bold text-lg">
                        {student.name}&apos;s Schedule
                      </h1>
                    </div>
                    <ScheduleCalendar
                      classes={[student.class]}
                      subjects={[]}
                      isStaff={false}
                    />
                  </div>
                </>
              ))}
          </div>
          <div className="hidden md:flex xl:w-1/3 h-fit p-2 flex-col gap-4">
            <SchoolCard school={school} />
            <Announcement />
            <Event />
          </div>
        </section>
      </div>
    );
};

export default ParentPage;
