import Image from "next/image";
import React from "react";

const SchoolCard = ({ school }: { school: SchoolDataType }) => {
  return (
    <div className="flex flex-col p-2 lg:p-4 bg-primary-light rounded-md w-full gap-2">
      <Image
        src={school.logo || "/logo.png"}
        width={100}
        height={100}
        alt="School Logo"
        className="object-cover rounded-md w-full h-40 mb-1"
      />
      <div className="bg-accent-1 rounded-md p-2 w-full flex flex-col gap-1">
        <label className="text-xs text-primary-light font-bold">Name</label>
        <p className="ml-2 text-primary">{school.name}</p>
      </div>
      <div className="bg-accent-2 rounded-md p-2 w-full flex flex-col gap-1">
        <label className="text-xs text-primary-light font-bold">
          Mission Statement
        </label>
        <p className="ml-2 text-primary">
          {school.missionStatement.slice(0, 100)}
        </p>
      </div>
      <div className="bg-accent-3 rounded-md p-2 w-full flex flex-col gap-1">
        <label className="text-xs text-primary-light font-bold">
          Vision Statement
        </label>
        <p className="ml-2 text-primary">
          {school.visionStatement.slice(0, 100)}
        </p>
      </div>
    </div>
  );
};

export default SchoolCard;
