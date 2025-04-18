"use client";

import AddClassesForm from "@/components/forms/AddClassesForm";
import AddStaffsForm from "@/components/forms/AddStaffsForm";
import AddStudentsForm from "@/components/forms/AddStudentsForm";
import AddSubjectsForm from "@/components/forms/AddSubjectsForm";
import AddTimeTableForm from "@/components/forms/AddTimeTable";
import SchoolInfoForm from "@/components/forms/SchoolInfoForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSchool } from "@/store";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import AddParentsForm from "@/components/forms/AddParentsForm";

const RegisterSchoolPage = () => {
  const router = useRouter();
  const setSchool = useSchool((state) => state.setSchool);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState<TotalData>({
    schoolData: {},
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
      const res = await axios.post("/api/auth/create", totalData);
      if (res.status === 201) {
        toast("School created successfully");
        setSchool(res.data);
        router.push("/newschool");
      }
    } catch (error: any) {
      console.error("Error creating school:", error);
      toast(`Error: ${error.response?.data?.message || "Unknown"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full h-full justify-start items-start overflow-x-hidden">
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
      <Toaster
        toastOptions={{
          className: "!bg-primary !text-secondary",
        }}
      />
    </div>
  );
};

export default RegisterSchoolPage;
