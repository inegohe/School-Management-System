import React, { useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AddTimeTableForm = ({
  setTotalData,
  setPage,
  defaultValues,
}: {
  setTotalData: React.Dispatch<React.SetStateAction<TotalData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  defaultValues: Timetable[] | [];
}) => {
  const [timetableData, setTimetableData] = useState<Timetable[]>(defaultValues);
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

        console.log(jsonData, sheet["!merge"], sheet);

        const extractedData: Timetable[] = [];
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        const periods = jsonData[0]?.slice(1) || [];

        jsonData.forEach((row, rowIndex) => {
          if (rowIndex === 0) return;
          const day = days.find((d) => row[0]?.toString().toLowerCase().includes(d.toLowerCase()));
          if (day) {
            row.slice(1).forEach((subject: string | undefined, colIndex: number) => {
              if (subject) {
                extractedData.push({
                  class: row[0].toString().split(" ")[0],
                  day,
                  period: colIndex + 1,
                  subject: subject.toString(),
                  startTime: periods[colIndex]?.split(" - ")[0] || "",
                  endTime: periods[colIndex]?.split(" - ")[1] || "",
                });
              }
            });
          }
        });
        console.log(extractedData);
        setTimetableData(extractedData);
        setTotalData((prev) => ({ ...prev, timetable: extractedData }));
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
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white rounded-lg shadow-lg w-[90%] min-h-[90%] md:min-h-[70%] md:w-3/4 flex flex-col gap-4 mb-4"
    >
      <h1 className="text-2xl font-bold mb-4">Add Timetable</h1>
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <input
          type="file"
          accept=".xlsx,.xls,.xlsm"
          onChange={handleFileUpload}
          className="flex w-full text-sm text-secondary p-2 bg-primary rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-secondary hover:file:bg-primary file:cursor-pointer cursor-pointer"
        />
      </div>
      {fileLoading && (
        <p className="text-green-500 text-sm mb-4 animate-pulse">Loading...</p>
      )}
      {fileError && <p className="text-red-500 text-sm mb-4">{fileError}</p>}
      {timetableData.length > 0 && (
        <div className="w-full overflow-x-scroll mx-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Class</th>
                <th className="border border-gray-300 px-4 py-2">Day</th>
                <th className="border border-gray-300 px-4 py-2">Period</th>
                <th className="border border-gray-300 px-4 py-2">Subject</th>
                <th className="border border-gray-300 px-4 py-2">Start Time</th>
                <th className="border border-gray-300 px-4 py-2">End Time</th>
              </tr>
            </thead>
            <tbody>
              {timetableData.map((entry, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{entry.class}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.day}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.period}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.subject}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.startTime}</td>
                  <td className="border border-gray-300 px-4 py-2">{entry.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="w-full flex gap-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="w-full bg-primary text-secondary p-2 rounded font-bold flex gap-2 items-center"
        >
          <ArrowLeft /> Prev
        </button>
        <button
          disabled={timetableData.length < 1}
          onClick={() => setPage((prev) => prev + 1)}
          className="w-full bg-primary disabled:opacity-50 text-secondary p-2 rounded font-bold flex gap-2 justify-end items-center"
        >
          Next <ArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default AddTimeTableForm;

const FileFormatSample = ({
  requiredColumns,
}: {
  requiredColumns: string[];
}) => {
  const mockStaffData: StaffData[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      oracleNo: "OR12345",
      registrationNo: "REG67890",
      designation: "Senior Teacher",
      post: "Teacher",
      payrollNo: "PAY001",
      level: "Level 10",
      yearOfExit: "2025",
      address: "123 Main Street, Cityville",
      phoneNo: "123-456-7890",
      yearOfService: "10",
      teaching: true,
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      oracleNo: "OR54321",
      registrationNo: "REG09876",
      designation: "Assistant Teacher",
      post: "Counsellor",
      payrollNo: "PAY002",
      level: "Level 8",
      yearOfExit: "2028",
      address: "456 Elm Street, Townsville",
      phoneNo: "987-654-3210",
      yearOfService: "5",
      teaching: false,
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
          {mockStaffData.map((staff, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              {Object.keys(staff).map((col, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">
                  {col === "teaching"
                    ? (staff[col as keyof StaffData] as boolean)
                        .toString()
                        .toUpperCase()
                    : staff[col as keyof StaffData]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
