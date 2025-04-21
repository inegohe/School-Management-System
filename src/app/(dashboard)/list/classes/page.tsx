"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRole } from "@/store";
import { Class } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const columns = [
  {
    header: "Class Name",
  },
  {
    header: "Total Students",
    className: "hidden md:table-cell",
  },
  {
    header: "Class Teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
  },
];

const ClassListPage = () => {
  const role = useRole((state) => state.role);
  const [classes, setClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchClasses = async (page: number) => {
    try {
      const res = await apiClient.get(`/classes?page=${page}&limit=10`);
      if (res.status === 200) {
        setClasses(res.data.classes);
        setTotalPages(res.data.totalPages);
      } else {
        toast.error(res.data.message || "Failed to fetch classes");
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
      toast.error("An error occurred while fetching classes");
    }
  };

  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-primary-light text-sm hover:cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.totalStudent}</td>
      <td className="hidden md:table-cell">{item.classTeacher}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "ADMIN" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  useEffect(() => {
    fetchClasses(page);
  }, [page]);

  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "ADMIN" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={classes} />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default ClassListPage;
