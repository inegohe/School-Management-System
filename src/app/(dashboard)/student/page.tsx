"use client";

import { fetchSchool } from "@/actions";
import Announcement from "@/components/Announcements";
import Calender from "@/components/Calender";
import Event from "@/components/Event";
import ScheduleCalendar from "@/components/ScheduleCalender";
import SchoolCard from "@/components/SchoolCard";
import apiClient from "@/lib/apiclient";
import { getRoleLabel, updateColors } from "@/lib/helpers";
import { useCounts, useRole, useSchool, useUserData } from "@/store";
import { Student } from "@prisma/client";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const StudentPage = () => {
  const router = useRouter();
  const [student, setStudent] = useState<Student>();
  const setUserData = useUserData((state) => state.setUserData);
  const { school, setSchool } = useSchool();
  const setCounts = useCounts((state) => state.setCounts);
  const role = useRole((state) => state.role);

  const fetchStudent = async () => {
    try {
      const res = await apiClient.get("/students/self");
      if (res.status === 200) {
        setStudent(res.data);
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
    await fetchStudent();
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
    if (role !== "AUTH") {
      if (role !== "STUDENT") {
        router.push(`/${getRoleLabel(role)}`);
      } else if (!school.id) {
        getData();
      } else fetchStudent();
    }
  }, [role]);

  if (role !== "STUDENT") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not a STUDENT,
        redirecting to ${role} page`}
      </div>
    );
  } else
    return (
      <div className="flex gap-2 flex-col w-full h-full mb-4">
        <section className="w-full flex gap-2 flex-col xl:flex-row h-fit">
          <div className="xl:w-2/3 flex flex-col gap-4 p-2 h-full">
            <div className="h-[850px] flex flex-col bg-primary-light p-3 lg:p-4">
              <div className="w-full justify-between flex items-center">
                <h1 className="font-bold text-lg">Your Schedule</h1>
              </div>
              <ScheduleCalendar
                classes={student ? [student.class] : []}
                subjects={[]}
                isStaff={false}
              />
            </div>
          </div>
          <div className="hidden md:flex xl:w-1/3 h-fit p-2 flex-col gap-4">
            <SchoolCard school={school} />
            <Announcement />
          </div>
        </section>
        <section className="hidden md:flex w-full h-fit p-2">
          <div className="bg-primary-light rounded-md w-full flex h-full">
            <Event />
          </div>
        </section>
      </div>
    );
};

export default StudentPage;
