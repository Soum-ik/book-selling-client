'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const checkOtp = z.object({
  otp: z.string().min(7, { message: 'Minimun 7 digit' })
})

export default function page() {
  const [otp, setOtp] = useState('');
  const route = useRouter()
  const [loading, setLoading] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const date = new Date()
    try {
      setLoading(true)
      const { error, data } = checkOtp.safeParse({ otp }); // Parsing as an object with 'otp' key
      if (error) {
        setLoading(false)
        return toast(error?.message, { description: date + "", })
      }
      const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}verifi-user/${data.otp}`

      const response = await fetch(endpoint)
      const result = await response.json()
      const current_date = new Date()

      if (result.statusCode === 200) {
        toast(result.message, {
          description: current_date + "",
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        })
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
        setLoading(false)

        route.replace('/sign-in')
        return
      } else
        setLoading(false)

      return toast(result.message, {
        description: current_date + "",

        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },

      })
    } catch (error) {
      setLoading(false)

      toast('Some thing want wrong', {
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      })
    }
  }

  return (
    <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
              Verifiy User
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Activate you're account
            </p>
          </div>
          <div className="m-7">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  name="otp"
                  id="otp"
                  placeholder="enter you're otp"
                  className="w-full px-3 py-2   placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                >
                  {loading ? `Loading....` : `Verifiy User`}

                  Verifiy User
                </button>
              </div>
              <Link className=" text-sm" href={'/sign-up'}>Get Back</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
