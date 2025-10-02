"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { getUser } from "@/server-actions";
import { useRole, useUser } from "@/store";
import { Student } from "@prisma/client";
import { Eye, LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
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

const StudentListPageInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = useRole((state) => state.role);
  const [students, setStudents] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [order, setOrder] = useState(
    (searchParams.get("sort") as "asc" | "desc") || "asc"
  );

  const fetchStudents = async (page: number, searchQuery = "") => {
    try {
      const res = await apiClient.get(
        `/students?page=${page}&limit=10&search=${encodeURIComponent(
          searchQuery
        )}&sort=${encodeURIComponent(order)}`
      );
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
              <Eye className="size-4" />
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

  useEffect(() => {
    toast.dismiss()
    if (role !== "AUTH") {
      if (!["ADMIN", "TEACHER", "NONTEACHING"].includes(role)) {
        router.push(`/${role.toLowerCase()}`);
      } else {
        toast.loading("Fetching Data...");
        fetchStudents(page, search);
        setRefresh(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, page, refresh, search, order]);

  if (!["ADMIN", "TEACHER", "NONTEACHING"].includes(role)) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You are not an ADMIN or STAFF,
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
            <TableSearch value={search} onChange={setSearch} />
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
                <RefreshCcw
                  className={`stroke-primary ${refresh && "animate-spin"}`}
                  onClick={() => setRefresh(!refresh)}
                />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-3">
                {order !== "asc" ? (
                  <SortAsc
                    onClick={() => setOrder("asc")}
                    className="stroke-primary"
                  />
                ) : (
                  <SortDesc
                    onClick={() => setOrder("desc")}
                    className="stroke-primary"
                  />
                )}
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

const StudentListPage = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> Loading...
      </div>
    }
  >
    <StudentListPageInner />
  </Suspense>
);

export default StudentListPage;
