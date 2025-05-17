"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRole } from "@/store";
import { Subject } from "@prisma/client";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const columns = [
  {
    header: "Subject Name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectListPage = () => {
  const role = useRole((state) => state.role);
  const [subjects, setSubjects] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const fetchSubjects = async (page: number) => {
    try {
      const res = await apiClient.get(`/subjects?page=${page}&limit=10`);
      if (res.status === 200) {
        setSubjects(res.data.subjects);
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch subjects");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error fetching subjects:", error);
      toast.error("An error occurred while fetching subjects");
    }
  };

  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-primary-light text-sm hover:cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "ADMIN" && (
            <>
              <FormModal
                table="subjects"
                type="update"
                data={item}
                refresh={() => setRefresh(!refresh)}
              />
              <FormModal
                table="subjects"
                type="delete"
                id={item.id}
                refresh={() => setRefresh(!refresh)}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  useEffect(() => {
    toast.loading("Fetching Data...");
    fetchSubjects(page);
    setRefresh(false);
  }, [page, refresh]);

  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
              <RefreshCcw
                className={`stroke-primary ${refresh && "animate-spin"}`}
                onClick={() => setRefresh(!refresh)}
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "ADMIN" && (
              <FormModal
                table="subjects"
                type="create"
                refresh={() => setRefresh(!refresh)}
              />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjects} />
      {/* PAGINATION */}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default SubjectListPage;
