"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  parentNo: z.string().min(1, { message: "Parent Number is required!" }),
  parentName: z.string().min(1, { message: "Parent Name is required!" }),
  registrationNo: z
    .string()
    .min(1, { message: "Registration Number is required!" }),
  admissionNo: z.string().min(1, { message: "Admission Number is required!" }),
  birthdate: z.string().min(1, { message: "Birthdate is required!" }),
  gender: z.enum(["MALE", "FEMALE"], { message: "Gender is required!" }),
  DOA: z.string().min(1, { message: "Date of Admission is required!" }),
  class: z.string().min(1, { message: "Class is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((formData) => {
    console.log(formData);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new student" : "Update student"}
      </h1>
      <div className="flex flex-wrap gap-4">
        <InputField
          label="Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Parent Number"
          name="parentNo"
          defaultValue={data?.parentNo}
          register={register}
          error={errors.parentNo}
        />
        <InputField
          label="Parent Name"
          name="parentName"
          defaultValue={data?.parentName}
          register={register}
          error={errors.parentName}
        />
        <InputField
          label="Registration Number"
          name="registrationNo"
          defaultValue={data?.registrationNo}
          register={register}
          error={errors.registrationNo}
        />
        <InputField
          label="Admission Number"
          name="admissionNo"
          defaultValue={data?.admissionNo}
          register={register}
          error={errors.admissionNo}
        />
        <InputField
          label="Birthdate"
          name="birthdate"
          defaultValue={data?.birthdate}
          register={register}
          error={errors.birthdate}
          type="date"
        />
        <InputField
          label="Date of Admission"
          name="DOA"
          defaultValue={data?.DOA}
          register={register}
          error={errors.DOA}
          type="date"
        />
        <InputField
          label="Class"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors.class}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Gender</label>
          <select
            className="bg-transparent outline-none border-b border-secondary p-2 rounded-md text-sm w-full"
            {...register("gender")}
            defaultValue={data?.gender}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-xs text-red-400">{errors.gender.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="Upload" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">{errors.img.message}</p>
          )}
        </div>
      </div>
      <button className="button text-secondary p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
