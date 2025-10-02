"use client";

import { useSchool } from "@/store";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

export default function NewSchool() {
  const [dimension, setDimension] = useState<Record<string, number>>({
    width: 0,
    height: 0,
  });
  const school = useSchool((state) => state.school) as SchoolDataType;

  const updateDimension = (e: any) => {
    console.log(e);
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    toast(`Welcome to ${school.name}`);
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 p-6 w-full h-full justify-start items-center overflow-x-hidden">
        <div className="w-full flex justify-center text-center items-center gap-2 flex-col">
          <Image
            src={school.logo}
            width={100}
            height={100}
            alt="logo"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl capitalize">{school.name}</h1>
            <p className="font-semibold text-sm text-gray-400">
              {school.address}
            </p>
            <p className="text-sm">ID: {school.id}</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center md:flex-row gap-2 md:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold underline">Mission Statement</h1>
            <p className="font-semibold text-sm text-gray-400">
              {school.missionStatement}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold underline">Vision Statement</h1>
            <p className="font-semibold text-sm text-gray-400">
              {school.visionStatement}
            </p>
          </div>
        </div>
        <p className="font-bold capitalize">
          Principal: <span className="font-normal">{school.principal}</span>
        </p>
        <p className="font-bold capitalize">
          Vice Principal:{" "}
          <span className="font-normal">{school.vicePrincipal}</span>
        </p>
        <p className="font-bold capitalize">
          Slogan: <span className="font-normal">{school.slogan}</span>
        </p>
        <p className="font-bold capitalize">
          Type:{" "}
          <span className="font-normal">{`${
            school.type === "PRIMARY"
              ? school.type
              : `${school.type?.toLowerCase()} Secondary`
          } School`}</span>
        </p>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <p className="font-bold text-lg underline">Admins:</p>
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            {school.admins?.map((admin, i) => (
              <p
                key={i}
                className="font-bold rounded-md flex justify-center items-center w-fit p-2 border border-primary capitalize"
              >
                {admin}
              </p>
            ))}
          </div>
        </div>
        <Link
          href="/login"
          className="button w-full md:w-1/2 mx-auto justify-center"
        >
          Log In
        </Link>
      </div>

      {/* Confetti */}
      <div className="fixed top-0 left-0">
        <Confetti
          width={dimension.width}
          height={dimension.height}
          numberOfPieces={200}
          recycle={true}
        />
      </div>
    </>
  );
}
