"use client";

import AddClassesForm from "@/components/forms/AddClassesForm";
import AddStaffsForm from "@/components/forms/AddStaffsForm";
import AddStudentsForm from "@/components/forms/AddStudentsForm";
import AddSubjectsForm from "@/components/forms/AddSubjectsForm";
import AddTimeTableForm from "@/components/forms/AddTimeTable";
import SchoolInfoForm from "@/components/forms/SchoolInfoForm";
import { useState } from "react";




const RegisterSchoolPage = () => {
  const [totalData, setTotalData] = useState<TotalData>({ schoolData: {}, staffsData: [], studentsData: [], subjects: [], classes: [], timetable: [], timetableHtml: ""});
  const [page, setPage] = useState<number>(5);

  const onSubmit = async () => {
    try {
      console.log(totalData);
      return;
    } catch (error: any) {
      console.error("Error creating school:", error);
      return false;
    }
  };

  return (
    <div className="flex w-full h-full justify-start items-start overflow-x-hidden">
      {page === 0 ? <SchoolInfoForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.schoolData} /> : page === 1 ? <AddStaffsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.staffsData}/> : page === 2 ? <AddStudentsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.studentsData}/> : page === 3 ? <AddClassesForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.classes}/> : page === 4 ? <AddSubjectsForm setTotalData={setTotalData} setPage={setPage} defaultValues={totalData.subjects}/> : page === 5 ? <AddTimeTableForm setTotalData={setTotalData} setPage={setPage} defaultValues={{ timetableData: totalData.timetable, timetableHtml: totalData.timetableHtml}} submit={onSubmit}/> : null}
    </div>
  );
};

export default RegisterSchoolPage;