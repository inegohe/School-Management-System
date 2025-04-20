"use client";

import Image from "next/image";

const Cards = () => {
  const data = [
    { number: 1345, title: "students" },
    { number: 1332, title: "teachers" },
    { number: 1948, title: "parents" },
    { number: 1475, title: "subjects" },
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
              2025/05
            </p>
            <Image src="/more.png" width={20} height={20} alt="more" />
          </div>
          <h1 className="text-3xl font-semibold my-4 text-black">{item.number}</h1>
          <p className="text-sm text-gray-400 capitalize">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
