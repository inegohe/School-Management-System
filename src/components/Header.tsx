"use client";

import apiClient from "@/lib/apiclient";
import { getUser } from "@/server-actions";
import { useRecents, useRole, useUser, useUserData } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Code: Header component
const Header = () => {
  const { user, setUser } = useUser();
  const { role, setRole } = useRole();
  const { userData, setUserData } = useUserData();
  const recents = useRecents((state) => state.recents);

  const getUserRole = async () => {
    const result = await getUser();
    setRole(result.role);
    setUser(result);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get("/profile");
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (role === "AUTH") {
      getUserRole();
    }
    fetchUser();
  }, []);

  return (
    <main className="flex justify-end w-full p-3 items-center">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/list/announcements"
          className="rounded-full p-2 bg-primary-light cursor-pointer relative"
        >
          <Image
            src="/announcement.png"
            width={20}
            height={20}
            alt="announcement"
            className="text-transparent"
          />
          {recents.announcements > 0 && (
            <div className="flex items-center justify-center rounded-full w-4 h-4 p-1 text-xs text-primary bg-secondary absolute top-0 left-3/4">
              {recents.announcements}
            </div>
          )}
        </Link>
        <Link
          href="/list/events"
          className="rounded-full p-2 bg-primary-light cursor-pointer relative"
        >
          <Image
            src="/calendar.png"
            width={20}
            height={20}
            alt="event"
            className="text-transparent"
          />
          {recents.events > 0 && (
            <div className="flex items-center justify-center rounded-full w-4 h-4 p-1 text-xs text-primary bg-secondary absolute top-0 left-3/4">
              {recents.events}
            </div>
          )}
        </Link>
        <div className="flex flex-col items-end justify-center gap-1 text-sm">
          <h1 className="font-bold">{userData.name || user.name}</h1>
          <p className="text-xs text-gray-400 capitalize">
            {user.role.toLowerCase()}
          </p>
        </div>
        {user.role !== "PARENT" && (
          <Link href="/profile" className="cursor-pointer">
            <Image
              src={userData.image || "/avatar.png"}
              width={50}
              height={50}
              alt="avatar"
              className="rounded-full object-cover w-14 h-14"
            />
          </Link>
        )}
      </div>
    </main>
  );
};

export default Header;
