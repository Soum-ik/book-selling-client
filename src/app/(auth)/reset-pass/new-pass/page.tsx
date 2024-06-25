'use client'
import { SignIn } from "@/lib/types/interfaces";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";


function page() {
  const route = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<SignIn>({
    email: '',
    password: '',
  });
  const [eyeOn, setEyeOn] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}new-pass/${formData.email}/${formData.password}`;
    console.log(endpoint);
    
    setLoading(true)
    try {
      const response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json()
      console.log(result, 'result');

      const current_date = new Date()
      console.log(result, 'result');

      if (result.statusCode === 200) {
        toast(result.message, {
          description: current_date + "",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })
        setFormData({
          email: '',
          password: '',
        })
        route.replace('/sign-in')
        setLoading(false)
        return
      } else {
        setLoading(false)
        toast(result.message, {
          description: current_date + "",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })
        return
      }

    } catch (error) {
      setLoading(false)
      toast('Something want wrong', {
        // description: current_date + "",
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      })
    }
  };


  return (
    <div>
      <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                New Password
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Set New Password
              </p>
            </div>
            <div className="m-7">
              <form action="" onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
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
                      New Password
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
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                  >
                    {loading ? 'loading...' : 'Set New Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page