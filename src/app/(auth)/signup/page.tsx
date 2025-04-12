"use client";

import AddStaffsForm from "@/components/forms/AddStaffsForm";
import AddStudentsForm from "@/components/forms/AddStudentsForm";
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
      {page === 0 ? <SchoolInfoForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.schoolData} /> : page === 1 ? <AddStaffsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.staffsData}/> : page === 2 ? <AddStudentsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.studentsData}/> : page === 3 ? <AddStudentsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.studentsData}/> : null}
    </div>
  );
};

export default RegisterSchoolPage;