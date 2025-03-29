"use client";
import Link from "next/link";

const data = [
  {
    title: "Lorem Ipsum",
    time: "9:00am - 10:00am",
    description: "This is a placeholder description for the announcement.",
  },
  {
    title: "Dolor Sit",
    time: "11:00am - 12:30pm",
    description:
      "Interactive placeholder text for physics and chemistry experiments.",
  },
  {
    title: "Amet Consectetur",
    time: "12:30pm - 1:30pm",
    description:
      "Placeholder text for relaxing and recharging during the break.",
  },
];

const Announcement = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white w-full rounded-md">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Announcements</h1>
        <Link className="text-sm text-gray-400" href="/list/announcements">
          View all
        </Link>
      </div>
      {data.map((announcement, index) => (
        <div
          key={index}
          className="w-full p-5 rounded-md h-fit bg-white gap-2 odd:bg-sky-light even:bg-purple-light"
        >
          <div className="w-full justify-between flex items-center">
            <h3 className="font-semibold text-lg">{announcement.title}</h3>
            <p className="text-sm text-gray-400">{announcement.time}</p>
          </div>
          <p className="text-gray-500">{announcement.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Announcement;
