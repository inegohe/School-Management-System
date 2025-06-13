"use client";

import { fetchSchool } from "@/actions";
import { useCounts, useRole, useSchool } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import SettingsForm from "@/components/forms/SettingsForm";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { School } from "@prisma/client";
import { updateColors } from "@/lib/helpers";

const Settings = () => {
  const router = useRouter();
  const role = useRole((state) => state.role);
  const { school, setSchool } = useSchool();
  const setCounts = useCounts((state) => state.setCounts);
  const [data, setData] = useState<
    | {
        schoolInfo: SchoolInfo;
        timetableHtml: string;
        admins: string[];
        id: string;
      }
    | {}
  >({});

  const getData = async () => {
    toast.loading("Fetching Data...");
    const result = await fetchSchool(new Date(Date.now()));
    if (!result.success) {
      toast.dismiss();
      toast.error(result.data);
      toast.error(
        "An error occured while fetching data, please refresh the page"
      );
    } else {
      const { _count, ...schoolData } = result.data;
      const { timetableHtml, id, admins, ...schoolInfo } = schoolData;
      console.log({ schoolInfo, timetableHtml, id, admins });
      setData({ schoolInfo, timetableHtml, id, admins });
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
      if (role !== "ADMIN") {
        router.push(`/${role.toLowerCase()}`);
      } else if (!school.id) {
        getData();
      } else {
        const { timetableHtml, id, admins, ...schoolInfo } = school as School;
        setData({ schoolInfo, timetableHtml, id, admins });
      }
    }
  }, [role]);

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
      <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
        {"schoolInfo" in data ? (
          <SettingsForm data={data} setData={setData} />
        ) : (
          <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
            <LoaderCircle className="animate-spin" /> Loading
          </div>
        )}
      </div>
    );
};

export default Settings;
