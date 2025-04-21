"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { getUser } from "@/server-actions";
import { useRole, useUser } from "@/store";
import { Parent } from "@prisma/client";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const columns = [
  {
    header: "Info",
  },
  {
    header: "Parent ID",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone No",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
  },
];

const ParentListPage = () => {
  const router = useRouter();
  const setUser = useUser((state) => state.setUser);
  const { role, setRole } = useRole();
  const [parents, setParents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchParents = async (page: number) => {
    try {
      const res = await apiClient.get(`/parents?page=${page}&limit=10`);
      if (res.status === 200) {
        setParents(res.data.parents);
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch parents");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error fetching parents:", error);
      toast.error("An error occurred while fetching parents");
    }
  };

  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-primary-light text-sm hover:bg-cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col items-start justify-center">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <p className="w-20 truncate">{item.id}</p>
      </td>
      <td className="hidden md:table-cell">{item.phoneNo}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "ADMIN" && (
            <>
              <FormModal table="parent" type="update" data={item} />
              <FormModal table="parent" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    if (role === "AUTH") {
      getUserRole();
    } else if (!["ADMIN", "TEACHER"].includes(role)) {
      router.push(`/${role.toLowerCase()}`);
    } else {
      toast.loading("Fetching Data...");
      fetchParents(page);
    }
  }, [role, page]);

  if (!["ADMIN", "TEACHER"].includes(role)) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> You are not an ADMIN or
        TEACHER, redirecting to {role} page
      </div>
    );
  } else
    return (
      <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
                <Image src="/filter.png" alt="" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
                <Image src="/sort.png" alt="" width={14} height={14} />
              </button>
              {role === "ADMIN" && <FormModal table="teacher" type="create" />}
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={parents} />
        {/* PAGINATION */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    );
};

export default ParentListPage;
