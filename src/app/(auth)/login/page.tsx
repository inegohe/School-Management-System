"use client";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { BACKGROUND_IMAGES, useRole, useUser } from "@/store";
import apiClient from "@/lib/apiclient";
import axios from "axios";
import { getRoleLabel } from "@/lib/helpers";

const schema = z.object({
  email: z.string().email("Input a valid email").trim(),
  password: z
    .string()
    .min(6, "Password is too short")
    .max(30, "Password is too long")
    .trim(),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });
  const setRole = useRole((state) => state.setRole);
  const setUser = useUser((state) => state.setUser);
  const [error, setError] = useState("");
  const [pnsNote, setPNSNote] = useState("");
  const [pns, setPNS] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");

    if (!pns) {
      try {
        const { status, data: result } = await axios.post("/api/auth/login", {
          email: data.email,
          password: data.password,
        });

        if (status === 200) {
          setUser(result);
          setRole(result.role);
          toast.loading("Redirecting");
          router.push(`/${getRoleLabel(result.role)}`);
        }
      } catch (err: any) {
        console.log(err);
        toast.dismiss();
        if (err.response?.data?.error === "PNS" || err.message === "PNS") {
          setValue("password", "");
          setPNSNote(
            "Password not set. Type your desired password and click 'Set Password'."
          );
          setPNS(true);
        } else
          setError(
            err.response?.data?.error || err.message || "An error occurred"
          );
      }
    } else {
      try {
        const res = await axios.post("/api/auth/email", {
          email: data.email,
          password: data.password,
        });

        if (res.status === 200) {
          toast("Check your email inbox to confirm your password setup.");
          setPNS(false);
          setPNSNote("");
        } else toast.error("Error sending confirmation email");
      } catch (err: any) {
        console.log(err.response);
        toast.dismiss();
        setError(
          err.response?.data?.error || err.message || "An error occurred"
        );
      }
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="rounded-lg h-full w-full hidden md:flex overflow-hidden">
        <Image
          width={740}
          height={100}
          alt="background"
          className="w-full h-full object-cover"
          src={
            BACKGROUND_IMAGES[
              Math.ceil(Math.random() * BACKGROUND_IMAGES.length - 1)
            ]
          }
        />
      </div>
      <div className="flex items-center justify-center p-6 md:w-[40%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 w-full justify-start items-start overflow-x-hidden"
        >
          <h1 className="text-3xl font-extrabold mb-4 text-center w-full">
            Welcome Back
          </h1>
          {Object.keys(schema.shape).map((key, i) => {
            return (
              <div className="mb-4 w-full" key={i}>
                <label className="block text-sm font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  {...(key === "password" && { type: key })}
                  {...register(key as keyof FormData)}
                  className="input w-full p-2 border rounded-lg outline-none"
                />
                {errors[key as keyof FormData] && (
                  <p className="text-red-500 text-xs">
                    {errors[key as keyof FormData]?.message}
                  </p>
                )}
              </div>
            );
          })}
          {error && <p className="text-red-500 text-xs">{error}</p>}
          {pns && pnsNote && (
            <p className="text-green-600 font-semibold text-xs">{pnsNote}</p>
          )}
          <div className="font-sm mt-10 flex gap-1">
            Forgot password?
            <p
              onClick={() => { setPNSNote("Set new password and confirm with email"); setPNS(true); }}
              className="ml-2 text-accent underline font-semibold"
            >
              Set new password
            </p>
          </div>
          <button type="submit" className="button w-full justify-center">
            {loading && <LoaderCircle className="animate-spin" />}
            {pns ? "Set Password" : "Login"}
          </button>
          <p className="font-sm mt-10">
            New here?
            <a
              href="/create"
              className="ml-2 text-accent underline font-semibold"
            >
              Create new school
            </a>
          </p>
        </form>
      </div>
      <Toaster
        toastOptions={{
          className: "!bg-primary !text-secondary",
        }}
      />
    </div>
  );
};

export default LoginPage;
