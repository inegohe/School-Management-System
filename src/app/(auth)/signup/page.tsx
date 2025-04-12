"use client";

import AddClassesForm from "@/components/forms/AddClassesForm";
import AddStaffsForm from "@/components/forms/AddStaffsForm";
import AddStudentsForm from "@/components/forms/AddStudentsForm";
import AddSubjectsForm from "@/components/forms/AddSubjectsForm";
import SchoolInfoForm from "@/components/forms/SchoolInfoForm";
import { useState } from "react";




const RegisterSchoolPage = () => {
  const [totalData, setTotalData] = useState<TotalData>({ schoolData: {}, staffsData: [], studentsData: [], subjects: [], classes: [], timetable: {}});
  const [page, setPage] = useState<number>(1);

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error creating school:", error);
    }
  };

  return (
    <div className="bg-gray-100 flex w-screen h-full min-h-screen justify-center items-center overflow-x-hidden">
      {page === 0 ? <SchoolInfoForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.schoolData} /> : page === 1 ? <AddStaffsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.staffsData}/> : page === 2 ? <AddStudentsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.studentsData}/> : page === 3 ? <AddClassesForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.classes}/> : page === 4 ? <AddSubjectsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.subjects}/> : null}
    </div>
  );
};

export default RegisterSchoolPage;