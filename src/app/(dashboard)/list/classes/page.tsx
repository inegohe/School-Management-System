"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRole } from "@/store";
import { Class } from "@prisma/client";
import { LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Suspense, useEffect, useState } from "react";
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

const ClassListPageInner = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = useRole((state) => state.role);
  const [classes, setClasses] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [order, setOrder] = useState(
    (searchParams.get("sort") as "asc" | "desc") || "asc"
  );

  const fetchClasses = async (page: number, searchQuery = "") => {
    try {
      const res = await apiClient.get(
        `/classes?page=${page}&limit=10&search=${encodeURIComponent(
          searchQuery
        )}&sort=${encodeURIComponent(order)}`
      );
      if (res.status === 200) {
        setClasses(res.data.classes);
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch classes");
      }
    } catch (error) {
      toast.dismiss();
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
              <FormModal
                table="classes"
                type="update"
                data={item}
                refresh={() => setRefresh(!refresh)}
              />
              <FormModal
                table="classes"
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
    if (role !== "AUTH") {
      if (
        !["ADMIN", "TEACHER", "NONTEACHING", "PARENT", "STUDENT"].includes(role)
      ) {
        router.push("/login");
      } else {
        toast.loading("Fetching Data...");
        fetchClasses(page, search);
        setRefresh(false);
      }
    }
  }, [page, refresh, search, order]);

  if (
    !["ADMIN", "TEACHER", "NONTEACHING", "PARENT", "STUDENT", "AUTH"].includes(
      role
    )
  ) {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" />{" "}
        {role === "AUTH"
          ? "Authenticating..."
          : `You do not have a valid role,
        redirecting to login page`}
      </div>
    );
  } else
    return (
      <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
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
                  table="classes"
                  type="create"
                  refresh={() => setRefresh(!refresh)}
                />
              )}
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

const ClassListPage = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> Loading...
      </div>
    }
  >
    <ClassListPageInner />
  </Suspense>
);

export default ClassListPage;
