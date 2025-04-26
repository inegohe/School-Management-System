"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, LoaderCircle, Save, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const schema = z.object({
  name: z.string().min(3, { message: "School name is required!" }),
  address: z.string().min(3, { message: "Address is required!" }),
  principal: z.string().min(3, { message: "Principal name is required!" }),
  vicePrincipal: z
    .string()
    .min(3, { message: "Vice Principal name is required!" }),
  slogan: z.string().min(3, { message: "Slogan is required!" }),
  missionStatement: z
    .string()
    .min(3, { message: "Vision statement is required!" }),
  visionStatement: z
    .string()
    .min(3, { message: "Vision statement is required!" }),
  type: z.enum(["PRIMARY", "JUNIOR", "SENIOR"], {
    message: "School Type can either be PRIMARY, JUNIOR or SENIOR",
  }),
  startHour: z.string().min(4, { message: "Start Hour is required!" }),
  closeHour: z.string().min(4, { message: "Close Hour is required!" }),
  logo: z.string().min(1, { message: "Logo must be a valid Image!" }),
  primaryColor: z.string(),
  primaryColorLight: z.string(),
  secondaryColor: z.string(),
  secondaryColorLight: z.string(),
  accentColor1: z.string(),
  accentColor1Light: z.string(),
  accentColor2: z.string(),
  accentColor2Light: z.string(),
  accentColor3: z.string(),
  accentColor3Light: z.string(),
});

type FormData = z.infer<typeof schema>;

const SettingsForm = ({
  setData,
  data,
  loading,
}: {
  setData: React.Dispatch<
    React.SetStateAction<{
      schoolInfo: SchoolInfo;
      timetableHtml: string;
      admins: string[];
      id: string;
    }>
  >;
  data: {
    schoolInfo: SchoolInfo;
    timetableHtml: string;
    admins: string[];
    id: string;
  };
  loading: boolean
}) => {
  const [logoBase64, setLogoBase64] = useState<string>(
    "logo" in data.schoolInfo ? data.schoolInfo.logo : ""
  );
  const [editables, setEditables] = useState<Record<string, boolean>>({
    name: false,
    address: false,
    principal: false,
    vicePrincipal: false,
    slogan: false,
    type: false,
    missionStatement: false,
    visionStatement: false,
    startHour: false,
    closeHour: false,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: data.schoolInfo,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setLogoBase64(base64);
        setValue("logo", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      setData((prev) => {
        return { ...prev, schoolInfo: data };
      });
    } catch (error) {
      console.error("Error updating school:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center w-full h-full overflow-hidden"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-lg shadow-lg w-full h-full flex flex-col gap-4 mb-4 mt-5"
      >
        <h1 className="text-xl md:text-2xl font-bold mb-4">
          Change Your School&apos;s Settings
        </h1>
        <div className="w-full flex-col flex items-between">
          <div className="gap-4 w-full md:flex-row flex-col flex w-full h-full">
            <label
              htmlFor="image"
              className="flex gap-2 items-center justify-center w-full md:w-60 h-full rounded-md overflow-hidden relative bg-black"
            >
              <Image
                width={200}
                height={200}
                src={logoBase64}
                alt="Preview"
                className="w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full z-10 w-full h-full flex items-center justify-center cursor-pointer p-2 rounded-md bg-primary-light opacity-0 hover:opacity-60">
                <Upload className="size-8" />
              </div>
              <input
                type="file"
                accept="image/*"
                id="image"
                hidden
                onChange={handleFileChange}
                className="input"
              />
            </label>
            <div className="flex flex-col gap-4 w-full">
              {["name", "address", "slogan", "type"].map(
                (key: string, i: number) => (
                  <div
                    className="flex flex-col gap-2 items-start justify-start"
                    key={i}
                  >
                    <p className="font-semibold text-xs capitalize">{key}</p>
                    <div className="input p-2 border-b border-primary rounded-md w-full flex gap-2 items-center justify-between">
                      <input
                        disabled={key in editables ? !editables[key] : true}
                        type="text"
                        {...register(key as keyof FormData)}
                        className="outline-none bg-transparent w-full disabled:opacity-50 text-sm"
                      />
                      <Edit
                        className="size-5 cursor-pointer"
                        onClick={() =>
                          setEditables((prev) => ({
                            ...prev,
                            [key]: key in editables ? !editables[key] : true,
                          }))
                        }
                      />
                    </div>
                    {errors[key as keyof FormData] && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors[key as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:flex-row md:flex-wrap items-center justify-center mt-4">
            {[
              "principal",
              "vicePrincipal",
              "missionStatement",
              "visionStatement",
            ].map((key: string, i: number) => (
              <div
                className={`flex flex-col gap-2 items-start justify-start ${
                  key.includes("Statement") ? "w-full" : "w-full md:w-[49%]"
                }`}
                key={i}
              >
                <p className="font-semibold text-xs capitalize">{key}</p>
                <div className="input p-2 border-b border-primary rounded-md w-full flex gap-2 items-center justify-between">
                  <input
                    disabled={key in editables ? !editables[key] : true}
                    type="text"
                    {...register(key as keyof FormData)}
                    className="outline-none bg-transparent w-full disabled:opacity-50 text-sm"
                  />
                  <Edit
                    className="size-5 cursor-pointer"
                    onClick={() =>
                      setEditables((prev) => ({
                        ...prev,
                        [key]: key in editables ? !editables[key] : true,
                      }))
                    }
                  />
                </div>
                {errors[key as keyof FormData] && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors[key as keyof FormData]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h1 className="font-bold md:text-lg">Card Samples</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-primary text-secondary">
                <h2 className="md:text-lg font-bold text-accent-1">
                  Card Title 1
                </h2>
                <p className="mt-2 text-accent-1-light">
                  This is placeholder text for the first card.
                </p>
              </div>

              {/* Card 2 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-primary">
                <h2 className="md:text-lg font-bold text-accent-2">
                  Card Title 2
                </h2>
                <p className="mt-2 text-accent-2-light">
                  This is placeholder text for the second card.
                </p>
              </div>

              {/* Card 3 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-primary">
                <h2 className="md:text-lg font-bold text-accent-3">
                  Card Title 3
                </h2>
                <p className="mt-2 text-accent-3-light">
                  This is placeholder text for the second card.
                </p>
              </div>

              {/* Card 4 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-accent-1">
                <h2 className="md:text-lg font-bold text-primary">
                  Card Title 4
                </h2>
                <p className="mt-2 text-primary-light">
                  This is placeholder text for the second card.
                </p>
              </div>

              {/* Card 5 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-accent-2">
                <h2 className="md:text-lg font-bold text-primary">
                  Card Title 5
                </h2>
                <p className="mt-2 text-primary-light">
                  This is placeholder text for the third card.
                </p>
              </div>

              {/* Card 6 */}
              <div className="text-sm p-4 rounded-lg shadow-md bg-accent-3">
                <h2 className="md:text-lg font-bold text-primary">
                  Card Title 6
                </h2>
                <p className="mt-2 text-primary-light">
                  This is placeholder text for the third card.
                </p>
              </div>
            </div>
            <p className="font-bold text-[10px] md:text-xs text-secondary-light">
              Card 1-3 uses background: primary, header: accent[1-3], text:
              accent[1-3]-light, while card 4-6 uses background: accent[1-3],
              header: primary, text: primary-light
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:flex-row md:flex-wrap items-center justify-center mt-4">
            {[
              "primaryColor",
              "primaryColorLight",
              "secondaryColor",
              "secondaryColorLight",
              "accentColor1",
              "accentColor1Light",
              "secondaryColorLight",
              "accentColor2",
              "accentColor2Light",
              "secondaryColorLight",
              "accentColor3",
              "accentColor3Light",
            ].map((key: string, i: number) => (
              <div
                className={`flex flex-col gap-2 items-start justify-start w-full md:w-[32%]`}
                key={i}
              >
                <p className="font-semibold text-xs capitalize">{key}</p>
                <div className="input p-2 border-b border-primary rounded-md w-full flex gap-2 items-center justify-between">
                  <input
                    disabled={key in editables ? !editables[key] : true}
                    type="color"
                    {...register(key as keyof FormData)}
                    className="outline-none bg-transparent w-full disabled:opacity-50"
                  />
                  <Edit
                    className="size-5 cursor-pointer"
                    onClick={() =>
                      setEditables((prev) => ({
                        ...prev,
                        [key]: key in editables ? !editables[key] : true,
                      }))
                    }
                  />
                </div>
                {errors[key as keyof FormData] && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors[key as keyof FormData]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold text-secondary-light mt-4">
            All field&apos;s are required except color palette as you can leave
            it default and change it later in the settings
          </p>
          <div></div>
        </div>
        <div className="w-full flex justify-end">
          <button type="submit" className="button justify-end">
            {loading ? <LoaderCircle className="animate-spin" /> : <Save />}{" "}
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SettingsForm;
