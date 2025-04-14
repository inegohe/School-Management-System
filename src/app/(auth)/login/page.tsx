"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { z } from "zod";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError(result.error);
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-full justify-start items-start overflow-x-hidden"
      >
        <h1 className="text-3xl font-extrabold mb-4 text-center w-full">Welcome Back</h1>
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full justify-center"
        >
          Login
        </button>
        <p className="font-sm mt-10">New here?<a href="/create" className="text-accent underline">Create new school</a></p>

      </form>
    </div>
  );
};

export default LoginPage;