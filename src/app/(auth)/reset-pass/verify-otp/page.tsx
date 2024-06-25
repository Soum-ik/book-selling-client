"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import Link from "next/link";



function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const route = useRouter()


  const handleFormSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}verifi-pass/${otp}`;
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
        setOtp('')
        route.replace('/reset-pass/new-pass')
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
                Verifiy OTP
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Verifiying your OTP
              </p>
            </div>
            <div className="m-7">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-6 flex items-center justify-center flex-col">
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400 justify-start"
                  >
                    OTP
                  </label>

                  <InputOTP maxLength={7} value={otp} onChange={(e) => setOtp(e)} className=" flex items-center justify-center">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                      <InputOTPSlot index={6} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-3 max-w-max mx-auto flex  items-center justify-center py-2 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                  >
                    {loading ? `Loading....` : `Verifiy`}


                  </button>
                </div>
                {/* <Link className=" text-sm" href={'/sign-up'}>Get Back</Link> */}
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