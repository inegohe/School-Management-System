"use client";

import React from "react";
import { useRole } from "@/store";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const role = useRole((state) => state.role);
  const menu = [
    {
      title: "MENU",
      items: [
        {
          title: "Dashboard",
          icon: "/home.png",
          link: `/${role}`,
        },
        {
          title: "Teachers",
          icon: "/teacher.png",
          link: "/teacher",
        },
        {
          title: "Students",
          icon: "/student.png",
          link: "/student",
        },
        {
          title: "Parents",
          icon: "/parent.png",
          link: "/parent",
        },
        {
          title: "Subjects",
          icon: "/subject.png",
          link: "/subject",
        },
        {
          title: "Classes",
          icon: "/class.png",
          link: "/classes",
        },
        {
          title: "Attendance",
          icon: "/attendance.png",
          link: "/attendance",
        },
        {
          title: "Events",
          icon: "/calendar.png",
          link: "/events",
        },
        {
          title: "Messages",
          icon: "/message.png",
          link: "/messages",
        },
        {
          title: "Announcements",
          icon: "/announcement.png",
          link: "/announcements",
        },
      ],
    },
    { title: "OTHERS", items: [
      {
          title: "Profile",
          icon: "/profile.png",
          link: "/profile",
        },
      {
          title: "Settings",
          icon: "/setting.png",
          link: "/settings",
        },
      {
          title: "Logout",
          icon: "/logout.png",
          link: "/logout",
        },
    ] },
  ];
  return (
    <div className="flex flex-col h-full bg-white group-hover:w-[60vw] group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:z-10 group-hover:md:static group-hover:md:w-[unset] p-2 overflow-scroll mb-4">
      <div className="flex items-center justify-center md:justify-start group-hover:justify-start gap-2 mt-2">
        <Image src="/logo.png" width={32} height={32} alt="logo" className="text-transparent" />
        <h1 className="font-bold hidden md:block group-hover:block">
          School Name
        </h1>
      </div>
      {menu.map((x, i) => {
        return (
          <div key={i} className="mt-4 text-sm">
            <div className="flex flex-col gap-2">
              <h1 className="capitalize text-gray-400 hidden md:block group-hover:block">
              {x.title}
            </h1>
              {x.items.map((y, index) => (
                <Link
                  key={index}
                  href={y.link}
                  className="flex items-center justify-center group-hover:justify-start md:justify-start text-gray-500 gap-2 p-2 rounded-md hover:bg-sky-light"
                >
                  <Image
                    src={y.icon}
                    alt={y.title}
                    width={20}
                    height={20}
                    className="text-transparent w-[20px] h-[20px] max-w-[20px]"
                  />
                  <span className="hidden md:block group-hover:block">{y.title}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
