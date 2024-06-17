"use client"

 

   
 

function page() {
  return (
    <div><>

 

    <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10">
          <div className="text-center">
            <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            OTP
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Verify your otp.  
            </p>
          </div>
          <div className="m-7">
            <form action="">
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Verify otp 
                  </label>
                  
                </div>
                <input
                  type="number"
                  name="Verify"
                  id="Verify"
                  placeholder="Enter your Verify OTP"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                >
                 Verify Your OTP
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