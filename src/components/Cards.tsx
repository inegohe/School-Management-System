"use client";

import { useCounts } from "@/store";
import Image from "next/image";

const Cards = () => {
  const counts = useCounts((state) => state.counts);
  const data = [
    { number: counts.students, title: "students" },
    { number: counts.staffs, title: "staffs" },
    { number: counts.parents, title: "parents" },
    { number: counts.classes, title: "classes" },
  ];
  return (
    <div className="flex gap-4 flex-wrap w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col flex-1 p-3 lg:p-4 odd:bg-accent-1 even:bg-accent-3 rounded-2xl text-start min-w-[130px]"
        >
          <div className="flex justify-between items-center">
            <p className="rounded-full px-2 py-1 bg-primary-light font-bold text-xs">
              {new Date().toLocaleDateString("en-UK", {
                year: "numeric",
                month: "2-digit",
              })}
            </p>
            <Image src="/more.png" width={20} height={20} alt="more" />
          </div>
          <h1 className="text-3xl font-semibold my-4 text-black">
            {item.number}
          </h1>
          <p className="text-sm text-gray-400 capitalize">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
