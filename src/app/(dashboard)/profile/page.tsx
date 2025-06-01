"use client";

import { useEffect, useState } from "react";
import { useRole } from "@/store";
import apiClient from "@/lib/apiclient";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";

const Profile = () => {
  const router = useRouter();
  const role = useRole(state => state.role);
  const [roleState, setRoleState] = useState(role);
  const [user, setUser] = useState<{
    id: string;
    name: string;
    address: string;
    phoneNo: string;
    image: string;
  }>({
    id: "",
    name: "",
    address: "",
    phoneNo: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await apiClient.get("/profile");
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const res = await apiClient.post("/profile", {
        data: user,
        role,
        roleState,
      });
      if (res.status === 200) {
        toast.success("Profile updated!");
        if(res.data?.roleChange){
          router.push("/logout");
        }
        setUser(res.data);
      } else {
        toast.error(res.data.message || "Update failed");
      }
    } catch (err) {
      toast.error("Update failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (role === "ADMIN") {
    return (
      <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
        <h1 className="text-xl font-bold mb-4">Admin Profile</h1>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Switch Role</label>
          <select
            value={roleState}
            onChange={(e) => setRoleState(e.target.value as typeof role)}
            className="p-2 border border-primary-light outline-none rounded w-full bg-transparent"
          >
            <option value="ADMIN">Admin</option>
            <option value="TEACHER">Staff</option>
          </select>
        </div>
        <button
          className="button bg-primary text-white px-4 py-2 rounded"
          onClick={handleUpdate}
          disabled={loading}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : ""} Update
          Profile
        </button>
      </div>
    );
  }

  // STAFF, STUDENT, PARENT
  return (
    <div className="bg-primary-light p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-xl font-bold mb-4">Profile</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            className="p-2 border-b-2 border-primary outline-none rounded-md w-full bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            name="phoneNo"
            value={user.phoneNo}
            onChange={handleChange}
            className="p-2 border-b-2 border-primary outline-none rounded-md w-full bg-transparent"
            disabled={role === "STUDENT"}
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <input
            name="address"
            value={user.address}
            onChange={handleChange}
            className="p-2 border-b-2 border-primary outline-none rounded-md w-full bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            name="image"
            value={user.image}
            onChange={handleChange}
            className="p-2 border-b-2 border-primary outline-none rounded-md w-full bg-transparent"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Switch Role</label>
          <select
            value={roleState}
            onChange={(e) => setRoleState(e.target.value as typeof role)}
            className="p-2 border-b-2 border-primary outline-none rounded-md w-full bg-transparent"
          >
            <option value="ADMIN">Admin</option>
            <option value="TEACHER">Staff</option>
          </select>
        </div>
        <button
          type="submit"
          className="button bg-primary text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? <LoaderCircle className="animate-spin" /> : ""} Update
          Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
