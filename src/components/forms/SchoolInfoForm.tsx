"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(3, { message: "School name is required!" }),
  address: z.string().min(3, { message: "Address is required!" }),
  principal: z.string().min(3, { message: "Principal name is required!" }),
  vicePrincipal: z
    .string()
    .min(3, { message: "Vice Principal name is required!" }),
  slogan: z.string().min(3, { message: "Slogan is required!" }),
  schoolType: z.enum(["Primary", "Junior", "Senior"], {
    message: "School Type can either be Primary, Junior or Senior",
  }),
  startHour: z.string().min(4, { message: "Start Hour is required!" }),
  closeHour: z.string().min(4, { message: "Close Hour is required!" }),
  primaryColor: z.string().min(6, { message: "Primary color is required!" }),
  secondaryColor: z
    .string()
    .min(6, { message: "Secondary color is required!" }),
  mutedColor: z.string().min(6, { message: "Muted color is required!" }),
  accentColor: z.string().min(6, { message: "Accent color is required!" }),
  logoImage: z
    .string()
    .min(1, { message: "Logo must be a valid Base64 string!" }),
});

type FormData = z.infer<typeof schema>;

const SchoolInfoForm = ({
  setTotalData,
  setPage,
  defaultValues,
}: {
  setTotalData: React.Dispatch<React.SetStateAction<TotalData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  defaultValues: SchoolInfo | {};
}) => {
  const [logoBase64, setLogoBase64] = useState<string | null>(
    "logoImage" in defaultValues ? defaultValues.logoImage : null
  );

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setLogoBase64(base64);
        setValue("logoImage", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      setTotalData((prev) => ({ ...prev, schoolData: data }));
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error creating school:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 rounded-lg shadow-lg w-full h-full flex flex-col gap-4 mb-4 mt-5"
      >
        <h1 className="text-2xl font-bold mb-4">Register Your School</h1>
        <div className="gap-4 w-full md:flex-row md:flex-wrap flex-col flex">
          {Object.keys(schema.shape).map((key) => (
            <div className="w-full md:w-1/4" key={key}>
              <label className="block text-sm font-medium capitalize">
                School&apos;s {key.replace(/([A-Z])/g, " $1")}
              </label>
              {key === "logoImage" && (
                <>
                  <label
                    htmlFor={key}
                    className="flex gap-2 p-2 border rounded-md outline-none cursor-pointer"
                  >
                    <Upload /> Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id={key}
                    hidden
                    onChange={handleFileChange}
                    className="input"
                  />
                  {logoBase64 && (
                    <img
                      src={logoBase64}
                      alt="Preview"
                      className="mt-2 border rounded-md"
                    />
                  )}
                </>
              )}
              {key !== "logoImage" && (
                <input
                  type={
                    key.includes("Color")
                      ? "color"
                      : key.includes("Hour")
                      ? "time"
                      : "text"
                  }
                  {...register(key as keyof FormData)}
                  className={`input p-2 border rounded-md outline-none ${
                    key.includes("Color") ? "h-10 w-full" : "w-full"
                  }`}
                />
              )}
              {errors[key as keyof FormData] && (
                <p className="text-red-500 text-sm">
                  {errors[key as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex gap-4 justify-between">
          <button
            disabled
            onClick={() => setPage((prev) => prev - 1)}
            className="button"
          >
            <ArrowLeft /> Prev
          </button>
          <div className="flex gap-2 items-center">
            {[1, 2, 3, 4, 5, 6].map((x, i) => (
              <div
                key={i}
                className={
                  "w-2 h-2 md:w-3 md:h-3 border border-secondary rounded-full " +
                  (x === 1 ? "bg-secondary" : "bg-transparent")
                }
              />
            ))}
          </div>
          <button type="submit" className="button justify-end">
            Next <ArrowRight />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SchoolInfoForm;
