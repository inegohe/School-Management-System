"use client";

import apiClient from "@/lib/apiclient";
import { LoaderCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

const StaffForm = dynamic(() => import("./forms/StaffForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ParentForm = dynamic(() => import("./forms/ParentForm"), {
  loading: () => <h1>Loading...</h1>,
});
const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});
const ClassForm = dynamic(() => import("./forms/ClassForm"), {
  loading: () => <h1>Loading...</h1>,
});
const EventForm = dynamic(() => import("./forms/EventForm"), {
  loading: () => <h1>Loading...</h1>,
});
const AnnouncementForm = dynamic(() => import("./forms/AnnouncementForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: Record<
  string,
  (
    type: "create" | "update",
    close: () => void,
    data?: any
  ) => React.ReactElement
> = {
  staffs: (type, close, data) => (
    <StaffForm type={type} data={data} close={close} />
  ),
  students: (type, close, data) => (
    <StudentForm type={type} data={data} close={close} />
  ),
  parents: (type, close, data) => (
    <ParentForm type={type} data={data} close={close} />
  ),
  subjects: (type, close, data) => (
    <SubjectForm type={type} data={data} close={close} />
  ),
  classes: (type, close, data) => (
    <ClassForm type={type} data={data} close={close} />
  ),
  events: (type, close, data) => (
    <EventForm type={type} data={data} close={close} />
  ),
  announcements: (type, close, data) => (
    <AnnouncementForm type={type} data={data} close={close} />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  refresh,
}: {
  table:
    | "staffs"
    | "students"
    | "parents"
    | "subjects"
    | "classes"
    | "attendance"
    | "events"
    | "announcements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: string;
  refresh: () => void;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-accent-3"
      : type === "update"
      ? "bg-accent-1"
      : "bg-accent-2";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteTable = async () => {
    try {
      setLoading(true);
      const res = await apiClient.delete(`/${table}`, { data: { id } });
      if (res.status === 200) {
        toast.success(res.data.message);
      } else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Delete unsuccessfull");
    } finally {
      setLoading(false);
      toast("Refreshing");
      refresh();
      setOpen(false);
    }
  };

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 bg-primary-light">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button
          className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center flex gap-2 items-center"
          onClick={deleteTable}
        >
          {loading && <LoaderCircle className="animate-spin" />} Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](
        type,
        () => {
          toast("Refreshing");
          refresh();
          setOpen(false);
        },
        data
      )
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-start justify-center overflow-y-scroll py-4">
          <div className="bg-primary-light p-4 rounded-md relative my-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
