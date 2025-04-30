"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

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
      <button className="button text-secondary p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ClassForm;
