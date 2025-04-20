import { useRole } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Settings = () => {
  const router = useRouter();
  const role = useRole((state) => state.role);

  useEffect(() => {
    if (role !== "ADMIN") {
      router.push(`/${role.toLowerCase()}`);
    }
  }, []);
  if (role !== "ADMIN") {
    return (
      <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
        <LoaderCircle className="animate-spin" /> You are not an ADMIN,
        redirecting to {role} page
      </div>
    );
  } else return <div>Settings</div>;
};

export default Settings;
