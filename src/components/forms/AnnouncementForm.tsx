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
  title: z.string().min(1, { message: "Title is required!" }),
  description: z.string().min(1, { message: "Description is required!" }),
  date: z.string().min(1, { message: "Date is required!" }),
});

type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({
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
      const res = await apiClient.post(`/announcements`, {
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
        {type === "create"
          ? "Create a new announcement"
          : "Update announcement"}
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <InputField
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors.title}
          className="w-full"
        />
        <InputField
          label="Description"
          name="description"
          defaultValue={data?.description}
          register={register}
          error={errors.description}
          className="w-full"
        />
        <InputField
          label="Date"
          name="date"
          defaultValue={data?.date}
          register={register}
          error={errors.date}
          className="w-full"
          type="date"
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

export default AnnouncementForm;
