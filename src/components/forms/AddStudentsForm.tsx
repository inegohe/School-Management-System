import React, { useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const AddStudentsForm = ({
  setTotalData,
  setPage,
  defaultValues,
}: {
  setTotalData: React.Dispatch<React.SetStateAction<TotalData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  defaultValues: StudentData[] | [];
}) => {
  const [studentsData, setStudentsData] =
    useState<StudentData[]>(defaultValues);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileLoading, setFileLoading] = useState<boolean>(false);

  const requiredColumns = [
    "name",
    "email",
    "parent no",
    "parent name",
    "registration no",
    "doa",
    "birthdate",
    "admission no",
    "gender",
    "class",
    "address",
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileLoading(true);
    try {
      const file = event.target.files?.[0];
      if (!file) return;

      const validExtensions = [".xlsx", ".xls", ".xlsm"];
      const fileExtension = file.name.slice(file.name.lastIndexOf("."));
      if (!validExtensions.includes(fileExtension)) {
        setFileError(
          "Invalid file type. Please upload an Excel file with the above format."
        );
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
        const jsonData: any[] = XLSX.utils.sheet_to_json(sheet);

        const missingColumns = requiredColumns.filter(
          (col) => !Object.keys(jsonData[0] || {}).includes(col.toUpperCase())
        );

        if (missingColumns.length > 0) {
          setFileError(
            `Missing required columns: ${missingColumns
              .join(", ")
              .toUpperCase()}. Please upload a valid Excel file.`
          );
          return;
        }

        const parsedData: StudentData[] = jsonData.map((row) => ({
          name: row["NAME"] || "",
          email: row["EMAIL"] || "",
          parentNo: row["PARENT NO"] || "",
          parentName: row["PARENT NAME"] || "",
          registrationNo: row["REGISTRATION NO"] || "",
          DOA: row["DOA"] || "",
          birthdate: row["BIRTHDATE"] || "",
          admissionNo: row["ADMISSION NO"] || "",
          gender: row["GENDER"] || "",
          class: row["CLASS"] || "",
          address: row["ADDRESS"] || "",
        }));

        console.log(studentsData);
        setTotalData((prev) => ({ ...prev, studentsData: parsedData }));
        setStudentsData(parsedData);
      };

      reader.readAsBinaryString(file);
    } catch (err: any) {
      console.log("Error occured when reading file", err);
      setFileError(err?.message || "An unknown error occured");
    } finally {
      setFileLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white rounded-lg shadow-lg w-[90%] min-h-[90%] md:min-h-[70%] md:w-3/4 flex flex-col gap-4 mb-4"
    >
      <h1 className="text-2xl font-bold mb-4">Add Students</h1>
      {studentsData.length < 1 && (
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xl font-bold">File Sample</h2>
          <FileFormatSample requiredColumns={requiredColumns} />
        </div>
      )}
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <button
          onClick={() => {
            const a = document.createElement("a");
            a.download = "Student's Excel Template";
            a.href = "/studentExcelTemp.xlsx";
            a.click();
          }}
          className="w-full bg-sky text-black p-2 rounded font-bold flex gap-2 items-center"
        >
          <Download /> Download Excel Template
        </button>
        <input
          type="file"
          accept=".xlsx,.xls,.xlsm"
          onChange={handleFileUpload}
          className="flex w-full text-sm text-black p-2 bg-sky hover:bg-sky-light rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-sky-light file:text-black hover:file:bg-sky file:cursor-pointer cursor-pointer"
        />
      </div>
      {fileLoading && (
        <p className="text-green-500 text-sm mb-4 animate-pulse">Loading...</p>
      )}
      {fileError && <p className="text-red-500 text-sm mb-4">{fileError}</p>}
      {studentsData.length > 0 && (
        <div className="w-full overflow-x-scroll mx-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                {requiredColumns.map((col, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 px-4 py-2 capitalize"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentsData.map((student, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  {Object.keys(student).map((col, i) => (
                    <td key={i} className="border border-gray-300 px-4 py-2">
                      {student[col as keyof StudentData]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="w-full flex gap-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="w-full bg-sky text-black p-2 rounded font-bold flex gap-2 items-center"
        >
          <ArrowLeft /> Prev
        </button>
        <button
          disabled={studentsData.length < 0}
          onClick={() => setPage((prev) => prev + 1)}
          className="w-full bg-sky disabled:opacity-50 text-black p-2 rounded font-bold flex gap-2 justify-end items-center"
        >
          Next <ArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default AddStudentsForm;

const FileFormatSample = ({
  requiredColumns,
}: {
  requiredColumns: string[];
}) => {
  const mockStudentData: StudentData[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      parentNo: "123-456-7890",
      parentName: "Jane Doe",
      registrationNo: "REG12345",
      DOA: "15-01-2022",
      birthdate: "10-11-2008",
      admissionNo: "ADM001",
      gender: "Male",
      class: "3A",
      address: "123 Main Street, Cityville",
    },
    {
      name: "Alice Smith",
      email: "alice.smith@example.com",
      parentNo: "987-654-3210",
      parentName: "Bob Smith",
      registrationNo: "REG67890",
      DOA: "10-04-2023",
      birthdate: "15-09-2010",
      admissionNo: "ADM002",
      gender: "Female",
      class: "2E",
      address: "456 Elm Street, Townsville",
    },
  ];
  return (
    <div className="w-full overflow-x-scroll mx-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-left">
        <thead>
          <tr className="bg-gray-100">
            {requiredColumns.map((col, i) => (
              <th
                key={i}
                className="border border-gray-300 px-4 py-2 capitalize"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockStudentData.map((student, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              {Object.keys(student).map((col, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">
                  {student[col as keyof StudentData]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
