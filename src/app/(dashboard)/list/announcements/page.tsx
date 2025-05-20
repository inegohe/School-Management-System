"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import apiClient from "@/lib/apiclient";
import { useRole } from "@/store";
import { Announcement } from "@prisma/client";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

const AnnouncementListPage = () => {
  const role = useRole((state) => state.role);
  const searchParams = useSearchParams();
  const [announcements, setAnnouncements] = useState([]);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState(searchParams.get("q") || "");

  const fetchAnnouncements = async (page: number, searchQuery = "") => {
    try {
      const res = await apiClient.get(
        `/announcement?page=${page}&limit=10&search=${encodeURIComponent(searchQuery)}`
      );
      if (res.status === 200) {
        setAnnouncements(res.data.announcements);
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
    toast.loading("Fetching Data...");
    fetchAnnouncements(page, search);
    setRefresh(false);
  }, [page, refresh, search]);

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
              <Image src="/sort.png" alt="" width={14} height={14} />
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
    </div>
  );
};

export default AnnouncementListPage;
