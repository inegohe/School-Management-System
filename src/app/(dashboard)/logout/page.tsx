"use client";

import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/api/auth/logout");
      if (res.status === 200) {
        router.push("/login");
      }
    };
    fetch();
  }, []);
  return (
    <div className="flex justify-center items-center w-full h-full gap-2 font-bold">
      <LoaderCircle className="animate-spin" /> Signing out...
    </div>
  );
};

export default Logout;
