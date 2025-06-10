"use client";

import { getUser } from "@/server-actions";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRole, useUser } from "@/store";
import { Staff } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Eye, LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import { useSearchParams } from "next/navigation";

const columns = [
  {
    header: "Info",
  },
  {
    header: "Staff ID",
    className: "hidden md:table-cell",
  },
  {
    header: "Post",
    className: "hidden md:table-cell",
  },
  {
    header: "Level",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone No",
    className: "hidden lg:table-cell",
  },
  {
    header: "Classes Teaching",
    className: "hidden lg:table-cell",
  },
  {
    header: "Subjects Teaching",
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

const StaffListPageInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setUser = useUser((state) => state.setUser);
  const { role, setRole } = useRole();
  const [staffs, setStaffs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [order, setOrder] = useState(
    (searchParams.get("sort") as "asc" | "desc") || "asc"
  );

  const fetchStaffs = async (page: number, searchQuery = "") => {
    try {
      const res = await apiClient.get(
        `/staffs?page=${page}&limit=10&search=${encodeURIComponent(
          searchQuery
        )}&sort=${encodeURIComponent(order)}`
      );
      if (res.status === 200) {
        setStaffs(res.data.staffs);
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch staffs");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error fetching staffs:", error);
      toast.error("An error occurred while fetching staffs");
    }
  };

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    if (role === "AUTH") {
      getUserRole();
    } else if (!["ADMIN", "TEACHER", "NONTEACHING"].includes(role)) {
      router.push(`/${role.toLowerCase()}`);
    } else {
      toast.loading("Fetching Data...");
      fetchStaffs(page, search);
      setRefresh(false);
    }
  }, [role, page, refresh, search, order]);

  const renderRow = (item: Staff) => (
    <tr
      key={item.id}
      className="even:bg-primary-light text-sm hover:cursor-pointer"
    >
      <td className="flex p-3 h-full">
        <div className="flex justify-start items-center gap-4 h-full">
          <Link
            href={`/list/staffs/${item.id}`}
            className="md:hidden xl:block w-10 h-10"
          >
            <Image
              src={item.image || "/avatar.png"}
              alt=""
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          </Link>
          <div className="flex flex-col items-start justify-center">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500 w-20 truncate md:w-32">
              {item.email}
            </p>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <p className="w-20 truncate">{item.id}</p>
      </td>
      <td className="hidden md:table-cell">{item.post}</td>
      <td className="hidden md:table-cell">{item.level}</td>
      <td className="hidden md:table-cell">{item.phoneNo}</td>
      <td className="hidden md:table-cell">
        <p className="w-16 truncate">{item.classesTeaching.join(",")}</p>
      </td>
      <td className="hidden md:table-cell">
        <p className="w-20 truncate">{item.subjectsTaught.join(",")}</p>
      </td>
      <td className="hidden md:table-cell">
        <p className="w-20 truncate">{item.address}</p>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/staffs/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-1">
              <Eye className="size-4" />
            </button>
          </Link>
          {role === "ADMIN" && (
            <FormModal
              table="staffs"
              type="delete"
              id={item.id}
              refresh={() => setRefresh(!refresh)}
            />
          )}
        </div>
      </td>
    </tr>
  );

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
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Staffs</h1>
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
                  table="staffs"
                  type="create"
                  refresh={() => setRefresh(!refresh)}
                />
              )}
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={staffs} />
        {/* PAGINATION */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>
    );
};

const StaffListPage = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> Loading...
      </div>
    }
  >
    <StaffListPageInner />
  </Suspense>
);

export default StaffListPage;
