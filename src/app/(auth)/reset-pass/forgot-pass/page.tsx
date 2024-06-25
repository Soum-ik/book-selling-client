'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function page() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const rotue = useRouter()

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}forgot-pass/${email}`;
    setLoading(true)
    try {
      const response = await fetch(endpoint);
      const result = await response.json()
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
        setEmail('')
        rotue.replace('/reset-pass/verify-otp')
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
    <div><>
      <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-md mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Forgot Password
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Recover your account, Following this steps
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Email
                    </label>

                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  />
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                  >
                    {loading ? 'loading...' : 'Send Email'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>

    </div>
  )
}

export default page