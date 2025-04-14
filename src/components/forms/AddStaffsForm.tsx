import React, { useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const AddStaffsForm = ({
  setTotalData,
  setPage,
  defaultValues,
}: {
  setTotalData: React.Dispatch<React.SetStateAction<TotalData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  defaultValues: StaffData[] | [];
}) => {
  const [staffsData, setStaffsData] = useState<StaffData[]>(defaultValues);
  const [fileError, setFileError] = useState<string | null>(null);
  const [fileLoading, setFileLoading] = useState<boolean>(false);

  const requiredColumns = [
    "name",
    "email",
    "oracle no",
    "registration no",
    "designation",
    "post",
    "payroll no",
    "level",
    "year of exit",
    "address",
    "phone no",
    "year of service",
    "teaching",
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

        const parsedData: StaffData[] = jsonData.map((row) => ({
          name: row["NAME"] || "",
          email: row["EMAIL"] || "",
          oracleNo: row["ORACLE NO"] || "",
          registrationNo: row["REGISTRATION NO"] || "",
          designation: row["DESIGNATION"] || "",
          post: row["POST"] || "",
          payrollNo: row["PAYROLL NO"] || "",
          level: row["LEVEL"] || "",
          yearOfExit: row["YEAR OF EXIT"] || "",
          address: row["ADDRESS"] || "",
          phoneNo: row["PHONE NO"] || "",
          yearOfService: row["YEAR OF SERVICE"] || "",
          teaching: row["TEACHING"] === "TRUE",
        }));

        console.log(staffsData);
        setTotalData((prev) => ({ ...prev, staffsData: parsedData }));
        setStaffsData(parsedData);
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-between gap-2 mb-4 mt-5"
    >
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4">Add Staffs</h1>
        {staffsData.length < 1 && (
          <div className="flex flex-col gap-2 w-full">
            <h2 className="text-xl font-bold">File Sample</h2>
            <FileFormatSample requiredColumns={requiredColumns} />
          </div>
        )}
        <div className="w-full items-center md:justify-between flex gap-2 flex-col md:flex-row">
          <button
            onClick={() => {
              const a = document.createElement("a");
              a.download = "Staff's Excel Template";
              a.href = "/staffExcelTemp.xlsx";
              a.click();
            }}
            className="w-full md:w-fit"
          >
            <Download /> Download Excel Template
          </button>
          <input
            type="file"
            accept=".xlsx,.xls,.xlsm"
            onChange={handleFileUpload}
            className="flex w-full md:w-fit text-sm text-secondary p-2 bg-primary rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-secondary hover:file:bg-primary file:cursor-pointer cursor-pointer"
          />
        </div>
        {fileLoading && (
          <p className="text-green-500 text-sm mb-4 animate-pulse">
            Loading...
          </p>
        )}
        {fileError && <p className="text-red-500 text-sm mb-4">{fileError}</p>}
        {staffsData.length > 0 && (
          <div className="w-full overflow-x-scroll mx-auto">
            <table>
              <thead>
                <tr>
                  {requiredColumns.map((col, i) => (
                    <th key={i} className="capitalize">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {staffsData.map((teacher, index) => (
                  <tr key={index}>
                    {Object.keys(teacher).map((col, i) => (
                      <td key={i}>
                        {col === "teaching"
                          ? (teacher[col as keyof StaffData] as boolean)
                              .toString()
                              .toUpperCase()
                          : teacher[col as keyof StaffData]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="w-full flex gap-4 justify-between">
        <button onClick={() => setPage((prev) => prev - 1)}>
          <ArrowLeft /> Prev
        </button>
        <div className="flex gap-2 items-center">
          {[1, 2, 3, 4, 5, 6].map((x, i) => (
            <div
              key={i}
              className={
                "w-2 h-2 md:w-3 md:h-3 border border-secondary rounded-full " +
                (x === 2 ? "bg-secondary" : "bg-transparent")
              }
            />
          ))}
        </div>
        <button
          disabled={staffsData.length < 0}
          onClick={() => setPage((prev) => prev + 1)}
          className="justify-end"
        >
          Next <ArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default AddStaffsForm;

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
      <table>
        <thead>
          <tr>
            {requiredColumns.map((col, i) => (
              <th key={i} className="capitalize">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockStaffData.map((staff, index) => (
            <tr key={index}>
              {Object.keys(staff).map((col, i) => (
                <td key={i}>
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
