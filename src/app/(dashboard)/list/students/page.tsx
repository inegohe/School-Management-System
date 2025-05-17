"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { getUser } from "@/server-actions";
import { useRole, useUser } from "@/store";
import { Student } from "@prisma/client";
import { LoaderCircle, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const columns = [
  {
    header: "Info",
  },
  {
    header: "Student ID",
    className: "hidden md:table-cell",
  },
  {
    header: "Email",
    className: "hidden md:table-cell",
  },
  {
    header: "Parent Name",
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

const StudentListPage = () => {
  const router = useRouter();
  const setUser = useUser((state) => state.setUser);
  const { role, setRole } = useRole();
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStudents = async (page: number) => {
    try {
      const res = await apiClient.get(`/students?page=${page}&limit=10`);
      if (res.status === 200) {
        setStudents(res.data.students);
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch students");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error fetching students:", error);
      toast.error("An error occurred while fetching students");
    }
  };

  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-primary-light text-sm hover:cursor-pointeer"
    >
      <td className="flex justify-start items-center gap-4 p-4">
        <Image
          src={item.image || "/avatar.png"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-start">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <p className="w-20 truncate">{item.id}</p>
      </td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.parentName}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-1">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "ADMIN" && (
            <FormModal
              table="students"
              type="delete"
              id={item.id}
              refresh={() => setRefresh(!refresh)}
            />
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
      fetchStudents(page);
      setRefresh(false);
    }
  }, [role, page, refresh]);

  if (!["ADMIN", "TEACHER"].includes(role)) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not an ADMIN or TEACHER,
        redirecting to ${role} page`}
      </div>
    );
  } else
    return (
      <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">
            All Students
          </h1>
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
                  table="students"
                  type="create"
                  refresh={() => setRefresh(!refresh)}
                />
              )}
            </div>
          </div>
        </div>
        <Table columns={columns} renderRow={renderRow} data={students} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    );
};

export default StudentListPage;
