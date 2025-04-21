"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  post: z
    .string()
    .min(3, { message: "Post must be at least 3 characters long!" }),
  oracleNo: z
    .string()
    .min(4, { message: "Oracle Number must be at least 4 characters long!" }),
  designation: z.string().min(1, { message: "First name is required!" }),
  registrationNo: z.string().min(1, { message: "Last name is required!" }),
  payrollNo: z.string().min(1, { message: "Last name is required!" }),
  level: z.string().min(1, { message: "Last name is required!" }),
  yearOfExit: z.number().min(1, { message: "Last name is required!" }),
  phoneNo: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  teaching: z.boolean(),
  admin: z.boolean(),
  yearOfService: z.number().min(1, { message: "Last name is required!" }),
  image: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
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

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new staff</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Oracle No"
          name="oracleNo"
          defaultValue={data?.oracleNo}
          register={register}
          error={errors?.oracleNo}
        />
        <InputField
          label="Registration No"
          name="registrationNo"
          defaultValue={data?.registrationNo}
          register={register}
          error={errors.registrationNo}
        />
        <InputField
          label="Designation"
          name="designation"
          defaultValue={data?.designation}
          register={register}
          error={errors.designation}
        />
        <InputField
          label="Phone No"
          name="phoneNo"
          defaultValue={data?.phoneNo}
          register={register}
          error={errors.phoneNo}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Post"
          name="post"
          defaultValue={data?.post}
          register={register}
          error={errors.post}
        />
        <InputField
          label="Payroll No"
          name="payrollNo"
          defaultValue={data?.payrollNo}
          register={register}
          error={errors.payrollNo}
        />
        <InputField
          label="Level"
          name="level"
          defaultValue={data?.level}
          register={register}
          error={errors.level}
        />
        <InputField
          label="Year Of Exit"
          name="yearOfExit"
          defaultValue={data?.yearOfExit}
          register={register}
          error={errors.yearOfExit}
          type="number"
        />
        <InputField
          label="Year Of Service"
          name="yearOfService"
          defaultValue={data?.yearOfService}
          register={register}
          error={errors.yearOfService}
          type="number"
        />
        <InputField
          label="Teaching"
          name="teaching"
          defaultValue={data?.teaching}
          register={register}
          error={errors.teaching}
          type="checkbox"
        />
        <InputField
          label="Admin"
          name="admin"
          defaultValue={data?.admin}
          register={register}
          error={errors.admin}
          type="checkbox"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input
            type="file"
            id="image"
            {...register("image")}
            className="hidden"
          />
          {errors.image?.message && (
            <p className="text-xs text-red-400">
              {errors.image.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="button text-secondary p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
