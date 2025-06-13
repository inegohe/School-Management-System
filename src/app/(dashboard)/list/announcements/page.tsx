"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRecents, useRole } from "@/store";
import { Announcement } from "@prisma/client";
import { Eye, LoaderCircle, RefreshCcw, SortAsc, SortDesc } from "lucide-react";
import { Announcement as AnnouncementType } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";

const columns = [
  {
    header: "Title",
  },
  {
    header: "Description",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
  },
];

const AnnouncementListPageInner = () => {
  const router = useRouter();
  const role = useRole((state) => state.role);
  const searchParams = useSearchParams();
  const [announcements, setAnnouncements] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState<{
    state: boolean;
    data: Announcement | null;
  }>({ state: false, data: null });
  const { recents, setRecents } = useRecents();
  const [refresh, setRefresh] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [order, setOrder] = useState(
    (searchParams.get("sort") as "asc" | "desc") || "asc"
  );

  const fetchAnnouncements = async (page: number, searchQuery = "") => {
    try {
      const res = await apiClient.get(
        `/announcements?page=${page}&limit=10&search=${encodeURIComponent(
          searchQuery
        )}&sort=${encodeURIComponent(order)}`
      );
      if (res.status === 200) {
        setAnnouncements(res.data.announcements);
        setRecents({
          announcements: res.data.announcements.filter(
            (x: AnnouncementType) =>
              new Date(x.date).toDateString() ===
              new Date(Date.now()).toDateString()
          ).length,
          events: recents.events,
        });
        setTotalPages(res.data.totalPages);
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(res.data.message || "Failed to fetch announcements");
      }
    } catch (error) {
      toast.dismiss();
      console.error("Error fetching announcements:", error);
      toast.error("An error occurred while fetching announcements");
    }
  };
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-primary-light text-sm hover:cursor-pointer"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="hidden md:table-cell">{item.description}</td>
      <td className="hidden md:table-cell">
        {new Date(item.date).toDateString()}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <div onClick={() => setShow({ state: true, data: item })}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-accent-1">
              <Eye className="size-4" />
            </button>
          </div>
          {role === "ADMIN" && (
            <>
              <FormModal
                table="announcements"
                type="update"
                data={item}
                refresh={() => setRefresh(!refresh)}
              />
              <FormModal
                table="announcements"
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
        fetchAnnouncements(page, search);
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
        {/* TOP */}
        <div className="flex items-center justify-between">
          <h1 className="hidden md:block text-lg font-semibold">
            All Announcements
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
                  table="announcements"
                  type="create"
                  refresh={() => setRefresh(!refresh)}
                />
              )}
            </div>
          </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={announcements} />
        {/* PAGINATION */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
        {/* Full Details Dialog */}
        {show.state && (
          <FullDetails
            data={show.data!}
            close={() => setShow({ state: false, data: null })}
          />
        )}
      </div>
    );
};

const AnnouncementListPage = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> Loading...
      </div>
    }
  >
    <AnnouncementListPageInner />
  </Suspense>
);

const FullDetails = ({
  data,
  close,
}: {
  data: Announcement;
  close: () => void;
}) => {
  return (
    <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-start justify-center overflow-y-scroll py-4">
      <div className="bg-primary-light p-4 rounded-md relative my-auto w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
        <h2 className="text-2xl font-bold mb-4 text-secondary w-full mx-auto">
          {data.title}
        </h2>
        <div className="mb-4 flex gap-1 flex-wrap w-full bg-black rounded-md p-2">
          <p className="font-bold text-secondary-light">ID:</p>
          <p className="text-secondary">{data.id}</p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="mb-4 rounded-md p-2 bg-accent-2">
            <p className="font-semibold text-primary-light">Description:</p>
            <p className="text-black">{data.description}</p>
          </div>
          <div className="mb-4 rounded-md p-2 bg-accent-3">
            <p className="font-semibold text-primary-light">Date:</p>
            <p className="text-black">{new Date(data.date).toDateString()}</p>
            <p className="font-semibold text-primary-light">School ID:</p>
            <p className="text-black">{data.schoolId}</p>
          </div>
        </div>
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => close()}
        >
          <Image src="/close.png" alt="" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementListPage;
