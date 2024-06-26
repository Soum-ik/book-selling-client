"use client"

import { SignIn } from "@/lib/types/interfaces";
import Link from "next/link"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";

function page() {
  const route = useRouter()
  const [formData, setFormData] = useState<SignIn>({
    email: '',
    password: '',
  });
  const [eyeOn, setEyeOn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}sign-in`;
      const response = await fetch(endpoint, {
        body: JSON.stringify(formData),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json(); // Parse response body as JSON
      console.log(data, 'checking');

      const date = new Date();

      if (data.statusCode === 200) {
        // toast.success("Account created successfully");
        toast(data.message, {
          description: date.toString(),
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        });
        const token = data.data['token'];
        document.cookie = `authToken=${token}; max-age=3600; path=/;`;
        setFormData({
          email: "",
          password: "",
        });
        route.replace('/');
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, 100);
        });
        window.location.reload()
        setLoading(false);
        return;
      }
      toast.error(data.message);
    } catch (error) {
      console.log(error);

      toast('Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Sign in
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  name="email"
                  id="email"
                  placeholder="you@company.com"
                  className="w-full px-3 py-2   placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Password
                  </label>
                  <a
                    href="/reset-pass/forgot-pass"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className=" relative">
                  <input
                    type={eyeOn ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleChange(e)}

                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                  {eyeOn ? (
                    <IoEyeOutline
                      className="  absolute  top-1.5 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                      onClick={() => setEyeOn(false)}
                    />
                  ) : (
                    <IoEyeOffOutline
                      className="  absolute  top-1.5 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                      onClick={() => setEyeOn(true)}
                    />
                  )}
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                >
                  {loading ? `Loading....` : `Sign In`}
                </button>
              </div>
              <p className="text-sm text-center text-gray-400">
                {` Don't have an account yet?`}{" "}
                <Link
                  href="/sign-up"
                  className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 !rounded-xl dark:focus:border-indigo-800"
                >
                  Sign up
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page