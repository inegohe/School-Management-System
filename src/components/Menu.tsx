"use client";

import React from "react";
import { useRole, useSchool } from "@/store";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const role = useRole((state) => state.role);
  const school = useSchool((state) => state.school) as SchoolDataType;
  const menu = [
    {
      title: "MENU",
      items: [
        {
          title: "Dashboard",
          icon: "/home.png",
          link: `/${role.toLowerCase()}`,
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Staffs",
          icon: "/teacher.png",
          link: "/list/staffs",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Students",
          icon: "/student.png",
          link: "/list/students",
          visible: ["admin", "teacher"],
        },
        {
          title: "Parents",
          icon: "/parent.png",
          link: "/list/parents",
          visible: ["admin", "teacher"],
        },
        {
          title: "Subjects",
          icon: "/subject.png",
          link: "/list/subjects",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Classes",
          icon: "/class.png",
          link: "/list/classes",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Attendance",
          icon: "/attendance.png",
          link: "/list/attendance",
          visible: ["teacher"],
        },
        {
          title: "Events",
          icon: "/calendar.png",
          link: "/list/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Announcements",
          icon: "/announcement.png",
          link: "/list/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHERS",
      items: [
        {
          title: "Profile",
          icon: "/profile.png",
          link: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          title: "Settings",
          icon: "/setting.png",
          link: "/settings",
          visible: ["admin"],
        },
        {
          title: "Logout",
          icon: "/logout.png",
          link: "/api/auth/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col h-full bg-primary-light group-hover:w-[70vw] group-hover:sm:w-[30vw] group-hover:absolute group-hover:top-0 group-hover:left-0 group-hover:z-10 group-hover:md:static group-hover:md:w-[unset] p-2 overflow-scroll mb-4">
      <div className="flex items-center justify-center md:justify-start group-hover:justify-start gap-2 mt-2">
        <Image
          src="/logo.png"
          width={32}
          height={32}
          alt="logo"
          className="text-transparent"
        />
        <h1 className="font-bold hidden md:block group-hover:block w-40 truncate">
          {school.name || ""}
        </h1>
      </div>
      {menu.map((x, i) => {
        return (
          <div key={i} className="mt-4 text-sm">
            <div className="flex flex-col gap-2">
              <h1 className="capitalize text-gray-400 hidden md:block group-hover:block">
                {x.title}
              </h1>
              {x.items.map(
                (y, index) =>
                  y.visible.includes(role.toLowerCase()) && (
                    <Link
                      key={index}
                      href={y.link}
                      className="flex items-center justify-center group-hover:justify-start md:justify-start text-gray-500 gap-2 p-2 rounded-md hover:bg-primary"
                    >
                      <Image
                        src={y.icon}
                        alt={y.title}
                        width={20}
                        height={20}
                        className="text-transparent w-[20px] h-[20px] max-w-[20px] bg-transparent"
                      />
                      <span className="hidden md:block group-hover:block">
                        {y.title}
                      </span>
                    </Link>
                  )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
