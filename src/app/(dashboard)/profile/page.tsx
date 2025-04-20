"use client";

import { useRole } from "@/store";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  const role = useRole((state) => state.role);
  return <div>Profile</div>;
};

export default Profile;
