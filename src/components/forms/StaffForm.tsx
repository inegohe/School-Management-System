"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long!" })
    .max(50, { message: "Name must be at most 50 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  oracleNo: z
    .string()
    .min(4, { message: "Oracle Number must be at least 4 characters long!" }),
  registrationNo: z
    .string()
    .min(1, { message: "Registration Number is required!" }),
  designation: z.string().min(1, { message: "Designation is required!" }),
  post: z.string().min(3, { message: "Post must be at least 3 characters long!" }),
  payrollNo: z.string().min(1, { message: "Payroll Number is required!" }),
  level: z.string().min(1, { message: "Level is required!" }),
  yearOfService: z
    .number()
    .min(1, { message: "Year of Service must be at least 1!" }),
  teaching: z.boolean(),
  admin: z.boolean(),
  address: z.string().min(1, { message: "Address is required!" }),
  phoneNo: z.string().min(1, { message: "Phone Number is required!" }),
  yearOfExit: z
    .number()
    .min(1, { message: "Year of Exit must be at least 1!" }),
});

type Inputs = z.infer<typeof schema>;

const StaffForm = ({
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
        {type === "create" ? "Create a New Staff" : "Update Staff"}
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
          label="Oracle No"
          name="oracleNo"
          defaultValue={data?.oracleNo}
          register={register}
          error={errors.oracleNo}
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
          label="Year of Service"
          name="yearOfService"
          defaultValue={data?.yearOfService}
          register={register}
          error={errors.yearOfService}
          type="number"
        />
        <InputField
          label="Year of Exit"
          name="yearOfExit"
          defaultValue={data?.yearOfExit}
          register={register}
          error={errors.yearOfExit}
          type="number"
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
      </div>
      <button className="button text-secondary p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StaffForm;