'use client'
import { SignUp } from "@/lib/types/interfaces";
import Link from "next/link"
import React, { useState } from "react";
import { SingUpSechmaValidation } from '@/lib/util/validation'
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Page() {
  const route = useRouter();
  // state
  const [formData, setFormData] = useState<SignUp>({
    email: "",
    username: "",
    password: "",
    number: "",
    semester: "",

  });
  const [loading, setLoading] = useState<boolean>(false);
  const [eyeOn, setEyeOn] = useState(false);


  // to controlle all input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };



  // submiting funcation 
  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { data, success, error } = SingUpSechmaValidation.safeParse(formData);
    if (!success) {
      error.errors.forEach(err => toast.error(err.message));
      setLoading(false);
      return;
    }

    try {
      const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}sign-up`;

      const response = await fetch(endpoint, {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
      });


      const date = new Date()

      const res = await response.json();
      if (res.statusCode === 200) {
        toast("Account created successfully, Please check your email", {
          description: date + "",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })

        setFormData({
          email: "",
          username: "",
          password: "",
          number: "",
          semester: "",
        })
        route.replace('/verifiy-user')
        return
      }
      toast.error(res.message)
    } catch (error) {
      toast.error("Failed to create user");
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>

      <div className="flex items-center min-h-[60vh] bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign Up
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Create your account
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="user-name"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleChange(e)}
                    id="username"
                    placeholder="soumik sarkar"
                    className="w-full px-3 py-2   placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}

                    placeholder="you@company.com"
                    className="w-full px-3 py-2   placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Password
                    </label>

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
                <div className="mb-3">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="semester"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Semester
                    </label>

                  </div>
                  <input
                    type="text"
                    name="semester"
                    value={formData.semester}
                    onChange={(e) => handleChange(e)}
                    id="semester"
                    placeholder="Your semester"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Number
                    </label>

                  </div>
                  <input
                    type="text"
                    name="number"
                    value={formData.number}
                    onChange={(e) => handleChange(e)}
                    id="password"
                    placeholder="Your number"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                  >
                    {loading ? "loading..." : "Craete User"}
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Already have an account?
                  <Link
                    href="/sign-in"
                    className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 !rounded-xl dark:focus:border-indigo-800"
                  >
                    Sign in
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page