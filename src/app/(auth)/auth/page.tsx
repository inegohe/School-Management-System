"use client";

import apiClient from "@/lib/apiclient";
import { useRole, useUser } from "@/store";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getRoleLabel } from "@/lib/helpers";

const Auth = () => {
  const router = useRouter();
  const [output, setOutput] = useState("Getting user authentication...");
  const setRole = useRole((state) => state.setRole);
  const setUser = useUser((state) => state.setUser);

  const getUser = async () => {
    try {
      const result = await apiClient.get("/user");

      if (result.status === 200) {
        setOutput(
          `Authentication successful, redirecting to ${getRoleLabel(result.data.role).toUpperCase()} page`
        );
        setUser(result.data);
        setRole(result.data.role);
        router.push(`/${getRoleLabel(result.data.role)}`);
      }
    } catch (error) {
      console.log(error);
      setOutput("Authentication error, redirecting to login page");
      router.push("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="font-sm font-bold text-secondary flex w-full h-full justify-center items-center text-center gap-2">
      <LoaderCircle className="animate-spin" />
      {output}
    </div>
  );
};

export default Auth;
