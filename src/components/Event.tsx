"use client";
import Image from "next/image";

const data = [
  {
    title: "Math Class",
    time: "9:00am - 10:00am",
    description: "Algebra and Geometry basics.",
  },
  {
    title: "Science Workshop",
    time: "11:00am - 12:30pm",
    description: "Interactive experiments on physics and chemistry.",
  },
  {
    title: "Lunch Break",
    time: "12:30pm - 1:30pm",
    description: "Time to relax and recharge.",
  },
];

const Event = () => {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="w-full justify-between flex items-center">
        <h1 className="font-bold text-lg">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {data.map((event, index) => (
        <div
          key={index}
          className="w-full p-3 lg:p-5 rounded-md border-2 border-t-4 border-secondary-light h-fit bg-primary gap-2 odd:border-t-sky even:border-t-purple"
        >
          <div className="w-full justify-between flex items-center">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <p className="text-sm text-gray-400">{event.time}</p>
          </div>
          <p className="text-gray-500">{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Event;
