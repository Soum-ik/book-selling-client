import Link from "next/link"

function page() {
  return (
    <div><>
    
    <div className="flex items-center min-h-[60vh] vhbg-white dark:bg-gray-900">
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
            <form action="">
              <div className="mb-6">
                <label
                  htmlFor="user-name"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                 User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="soumik sarkar"
                  className="w-full px-3 py-2   placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
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
                
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Number
                  </label>
                
                </div>
                <input
                  type="number"
                  name="number"
                  id="password"
                  placeholder="Your number"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 !rounded-xl focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-indigo-500 !rounded-xl focus:bg-indigo-600 focus:outline-none"
                >
                  Sign in
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
     
  </>
  
    </div>
  )
}

export default page