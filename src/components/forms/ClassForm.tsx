"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import apiClient from "@/lib/apiclient";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(1, { message: "Class name is required!" }),
  totalStudent: z
    .number()
    .min(0, { message: "Total students must be at least 0!" }),
  classTeacher: z.string().min(1, { message: "Class teacher is required!" }),
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({
  type,
  data,
  close,
}: {
  type: "create" | "update";
  data?: any;
  close: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = handleSubmit(async (formData) => {
    try {
      setLoading(true);
      const res = await apiClient.post(`/classes`, {
        data: formData,
        type,
        id: data?.id,
      });
      if (res.status === 200) {
        toast.success(res.data.message);
        close();
      } else toast.error(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error("Operation unsuccessfull");
    } finally {
      setLoading(false);
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new class" : "Update class"}
      </h1>
      <div className="flex flex-wrap gap-4">
        <InputField
          label="Class Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Total Students"
          name="totalStudent"
          defaultValue={data?.totalStudent}
          register={register}
          error={errors.totalStudent}
          type="number"
        />
        <InputField
          label="Class Teacher"
          name="classTeacher"
          defaultValue={data?.classTeacher}
          register={register}
          error={errors.classTeacher}
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="button text-secondary p-2 rounded-m">
          {loading && <LoaderCircle className="animate-spin" />}{" "}
          {type === "create" ? "Create" : "Update"}
        </button>
      </div>
    </form>
  );
};

export default ClassForm;
