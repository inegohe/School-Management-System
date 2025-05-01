"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";

const schema = z.object({
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()).optional(), // Array of teacher IDs or names
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
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
        {type === "create" ? "Create a new subject" : "Update subject"}
      </h1>
      <div className="flex flex-wrap gap-4">
        <InputField
          label="Subject Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs text-gray-500">Teachers</label>
          <textarea
            className="bg-transparent outline-none border-b border-secondary p-2 rounded-md text-sm w-full"
            {...register("teachers")}
            defaultValue={data?.teachers?.join(", ")}
            placeholder="Enter teacher names or IDs, separated by commas"
          />
          {errors.teachers?.message && (
            <p className="text-xs text-red-400">{errors.teachers.message}</p>
          )}
        </div>
      </div>
      <button className="button text-secondary p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;
