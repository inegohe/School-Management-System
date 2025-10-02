"use client";

import AddClassesForm from "@/components/forms/AddClassesForm";
import AddStaffsForm from "@/components/forms/AddStaffsForm";
import AddStudentsForm from "@/components/forms/AddStudentsForm";
import AddSubjectsForm from "@/components/forms/AddSubjectsForm";
import AddTimeTableForm from "@/components/forms/AddTimeTable";
import SchoolInfoForm from "@/components/forms/SchoolInfoForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSchool } from "@/store";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import AddParentsForm from "@/components/forms/AddParentsForm";
import { updateColors } from "@/lib/helpers";
import Link from "next/link";

const RegisterSchoolPage = () => {
  const router = useRouter();
  const setSchool = useSchool((state) => state.setSchool);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState<TotalData>({
    schoolData: {
      name: "",
      address: "",
      principal: "",
      vicePrincipal: "",
      slogan: "",
      missionStatement: "",
      visionStatement: "",
      type: "PRIMARY",
      startHour: "08:00",
      closeHour: "15:00",
      logo: "",
      primaryColor: "#000000",
      primaryColorLight: "#1f1e1e",
      secondaryColor: "#ffffff",
      secondaryColorLight: "#ffffffef",
      accentColor1: "#ceebfa",
      accentColor1Light: "#edf9fb",
      accentColor2: "#cfceff",
      accentColor2Light: "#f1f0ff",
      accentColor3: "#fae27c",
      accentColor3Light: "#fefce8",
    },
    staffsData: [],
    admins: [],
    studentsData: [],
    parentsData: [],
    subjects: [],
    classes: [],
    timetable: [],
    timetableHtml: "",
  });
  const [page, setPage] = useState<number>(0);

  const onSubmit = async () => {
    try {
      console.log(totalData);
      setLoading(true);
      toast.loading("Creating school");
      const res = await axios.post("/api/auth/create", totalData);
      if (res.status === 201) {
        toast.dismiss();
        toast.success("School created successfully");
        localStorage.removeItem("temp-data");
        localStorage.removeItem("curr-page");
        setSchool(res.data);
        updateColors({
          primary: res.data.primaryColor,
          "primary-light": res.data.primaryColorLight,
          secondary: res.data.secondaryColor,
          "secondary-light": res.data.secondaryColorLight,
          "accent-1": res.data.accentColor1,
          "accent-1-light": res.data.accentColor1Light,
          "accent-2": res.data.accentColor2,
          "accent-2-light": res.data.accentColor2Light,
          "accent-3": res.data.accentColor3,
          "accent-3-light": res.data.accentColor3Light,
        });
        router.push("/newschool");
      } else {
        toast.dismiss();
        toast.error(`Error: ${res.data.message || "Unknown"}`);
      }
    } catch (error: any) {
      toast.dismiss();
      console.error("Error creating school:", error);
      toast.error(`Error: ${error.response?.data?.message || "Unknown"}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadData = () => {
      const storedData = localStorage.getItem("temp-data");
      const storedPage = localStorage.getItem("curr-page");

      if (storedData) {
        try {
          const parsedData: TotalData = JSON.parse(storedData);
          const parsedPage = storedPage ? parseInt(storedPage, 10) : 0;

          if (
            !totalData.schoolData.name &&
            Object.keys(parsedData).length > 0
          ) {
            setTotalData(parsedData);
            setPage(parsedPage);
          }
        } catch (error) {
          console.error("Failed to load data from localStorage", error);
        }
      }
    };

    loadData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("temp-data", JSON.stringify(totalData));
    localStorage.setItem("curr-page", page.toString());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="flex flex-col gap-4 w-full h-full overflow-x-hidden">
      <div className="flex flex-col w-full min-h-[90%] justify-start items-start overflow-y-scroll">
        {page === 0 ? (
          <SchoolInfoForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.schoolData}
          />
        ) : page === 1 ? (
          <AddStaffsForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.staffsData}
          />
        ) : page === 2 ? (
          <AddStudentsForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.studentsData}
          />
        ) : page === 3 ? (
          <AddParentsForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.parentsData}
          />
        ) : page === 4 ? (
          <AddClassesForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.classes}
          />
        ) : page === 5 ? (
          <AddSubjectsForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={totalData.subjects}
          />
        ) : page === 6 ? (
          <AddTimeTableForm
            setTotalData={setTotalData}
            setPage={setPage}
            defaultValues={{
              timetableData: totalData.timetable,
              timetableHtml: totalData.timetableHtml,
            }}
            submit={onSubmit}
            loading={loading}
          />
        ) : null}
      </div>
      <div className="w-full flex justify-center items-center text-center text-sm text-secondary-light gap-1 font-bold">
        Already have a school?{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
      <Toaster
        toastOptions={{
          className: "!bg-primary !text-secondary",
        }}
      />
    </div>
  );
};

export default RegisterSchoolPage;
