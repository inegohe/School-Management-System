"use client";

import { useSchool } from "@/store";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import Image from "next/image";

export default function NewSchool() {
  const [showConfetti, setShowConfetti] = useState(false);
  const school = useSchool((state) => state.school) as SchoolDataType;

  useEffect(() => {
    toast(`Welcome to ${school.name}`);
    const timer = setTimeout(() => setShowConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex w-full h-full justify-start items-start overflow-x-hidden">
      <div>
        <Image src={"logo.png"} width={100} height={100} alt="logo" />
        <div>
          <h1>School Name</h1>
          <p>Address of the school will be long</p>
          <p>ID: uif8ehfke0nsfmegnkosd</p>
        </div>
      </div>
      <div>
        <div>
          <h1>Mission Statement</h1>
          <p>This is the mission statement as shown</p>
        </div>
        <div>
          <h1>Vision Statement</h1>
          <p>This is the vision statement as shown</p>
        </div>
      </div>
      <p>
        Principal: <span>Mr.Bankole</span>
      </p>
      <p>
        Vice Principal: <span>Mr.Shola</span>
      </p>
      <p>
        Slogan: <span>Unity we stand</span>
      </p>
      <p>
        Type:{" "}
        <span>{`${
          school.type === "PRIMARY"
            ? school.type
            : `${school.type.toLowerCase()} Secondary`
        } School`}</span>
      </p>
      {school.admins.map((admin, i) => (
        <p key={i}>{admin}</p>
      ))}

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          numberOfPieces={200}
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <button className="button w-full md:w-1/2">Log In</button>
    </div>
  );
}
