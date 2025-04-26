"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Edit, LoaderCircle, Save, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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
}) => {
  const [loading, setLoading] = useState(false);
  const [logoBase64, setLogoBase64] = useState<string>(
    "logo" in data.schoolInfo ? data.schoolInfo.logo : ""
  );
  const [editables, setEditables] = useState<Record<string, boolean>>({});

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
      setLoading(true);
      console.log(data);
      setData((prev) => {
        return { ...prev, schoolInfo: data };
      });
    } catch (error) {
      console.error("Error updating school:", error);
    } finally {
      setLoading(false);
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
              "accentColor2",
              "accentColor2Light",
              "accentColor3",
              "accentColor3Light",
            ].map((key: string, i: number) => (
              <div
                className={`flex flex-col gap-2 items-start justify-start w-full ${key === "accentColor3Light" ? "md:w-full" : "md:w-[32%]"}`}
                key={i}
              >
                <p className="font-semibold text-xs capitalize">{key}</p>
                <div className="input p-2 border-b border-primary rounded-md w-full flex gap-2 items-center justify-between">
                  <input
                    disabled={key in editables ? !editables[key] : true}
                    type="color"
                    {...register(key as keyof FormData)}
                    className="outline-none bg-transparent w-full disabled:opacity-70"
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
          <div className="w-full flex flex-col gap-4">
            <h1 className="md:text-lg font-bold text-secondary-light">
              Current Timetable
            </h1>
            <div
              className="w-full overflow-x-scroll mx-auto"
              dangerouslySetInnerHTML={{ __html: data.timetableHtml }}
            />
            <Timetable data={data} setData={setData} loading={loading}/>
          </div>
        </div>
        <p className="text-xs font-semibold text-secondary-light mt-4">
          All field&apos;s are required
        </p>
        <div className="w-full flex justify-end">
          <button type="submit" className="button justify-end">
            {loading ? <LoaderCircle className="animate-spin" /> : <Save />}{" "}
            Update Settings
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default SettingsForm;

const Timetable = ({
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
  loading: boolean;
}) => {
  const [timetableHtml, setTimetableHtml] = useState<string>("");
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileLoading, setFileLoading] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileLoading(true);
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const validExtensions = [".xlsx", ".xls", ".xlsm"];
      const fileExtension = file.name.slice(file.name.lastIndexOf("."));
      if (!validExtensions.includes(fileExtension)) {
        toast("File is not a valid Excel");
        setFileError("Invalid file type. Please upload an Excel file.");
        return;
      }

      setFileError(null);

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) return;

        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet, {
          header: 1,
        });
        const htmlData: string = XLSX.utils.sheet_to_html(sheet);
        const extractedData: Timetable[] = [];
        let lastDay = "";
        const periods = jsonData[0]?.slice(2) || [];

        jsonData.forEach((row, rowIndex) => {
          if (rowIndex === 0) return;
          let day = lastDay;
          if (row[0]) {
            day = row[0];
            lastDay = row[0];
          }

          if (day) {
            let period = 1;
            const subjects = row.slice(2);

            for (let colIndex = 0; colIndex < subjects.length; colIndex++) {
              if (subjects[colIndex]) {
                extractedData.push({
                  class: row[1],
                  day,
                  period: period++,
                  periodSpan: 1,
                  subject: subjects[colIndex].toString(),
                  startTime: periods[colIndex]?.split(" - ")[0] || "",
                  endTime: periods[colIndex]?.split(" - ")[1] || "",
                });
              } else {
                extractedData[extractedData.length - 1].endTime =
                  periods[colIndex]?.split(" - ")[1] || "";
                extractedData[extractedData.length - 1].periodSpan += 1;
              }
            }
          }
        });
        if (extractedData.length < 1) {
          toast("Timetable is empty");
        } else {
          setTimetableHtml(htmlData);
          setData((prev) => ({
            ...prev,
            timetableHtml: htmlData,
          }));
        }
      };

      reader.readAsBinaryString(file);
    } catch (err: any) {
      console.error("Error occurred when reading file", err);
      setFileError(err?.message || "An unknown error occurred");
    } finally {
      setFileLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col gap-4"
    >
      <h1 className="md:text-lg font-bold mb-2">Update Timetable</h1>
      <div className="w-full items-center md:justify-between px-2 flex gap-2 flex-col md:flex-row">
        <button
          onClick={() => {
            handleDownloadFromHtml(data.timetableHtml, "Timetable-Excel-File.xlsx")
          }}
          disabled={loading}
          className="button w-full md:w-fit"
        >
          <Download /> Download Excel
        </button>
        <input
          type="file"
          accept=".xlsx,.xls,.xlsm"
          onChange={handleFileUpload}
          disabled={loading}
          className="input flex w-full md:w-fit text-sm text-secondary p-2 bg-primary rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-secondary hover:file:bg-primary file:cursor-pointer cursor-pointer"
        />
      </div>
      {fileLoading && (
        <p className="text-green-500 text-sm mb-4 animate-pulse">Loading...</p>
      )}
      {fileError && (
        <p className="text-red-500 text-sm mb-4 font-bold">{fileError}</p>
      )}
      {timetableHtml && (data.timetableHtml !== timetableHtml) && (
        <div
          className="w-full overflow-x-scroll mx-auto"
          dangerouslySetInnerHTML={{ __html: timetableHtml }}
        />
      )}
    </motion.div>
  );
};


const handleDownloadFromHtml = (htmlString: string, filename: string = "downloaded-file.xlsx") => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const table = doc.querySelector('table');

    if (!table) {
      console.error("No table found in the HTML.");
      return;
    }

    const worksheet = XLSX.utils.table_to_sheet(table);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const data = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(data, filename);

  } catch (error) {
    console.error("Error generating or downloading file:", error);
  }
};