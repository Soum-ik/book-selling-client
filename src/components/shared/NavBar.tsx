
'use client'
import { PlusIcon } from "@radix-ui/react-icons";
import { IoSearchSharp } from "react-icons/io5";


import PostForm from "./PostForm";
import { useState } from "react";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  let image;
  return (
    <div className="fixed z-50 bg-[#0E1217] border-b border-gray-100  max-h-max  top-0 left-0 right-0 bottom-0 mx-auto  px-4 py-2 shadow-2xl backdrop-blur-xl">
     <div className=" flex  rounded-md flex-grow items-center justify-between">
        <div>
          <h2 className="sm:text-3xl text-2xl font-semibold text-white  bg-clip-text   select-none  custom-font">Book Sell </h2>
        </div>
  
        <div className=" md:block hidden">
          <div className="flex    focus:ring-1 ring-[#A8B3CF]  bg-[#1C1F26] items-center shadow-lg   justify-center gap-3 rounded-lg   px-3 py-2">
            <IoSearchSharp size={25} className="text-[#A8B3CF]" />
            <input
              type="text"
              className="max-w-xs  bg-[#1C1F26] text-[#A3AEC9]  outline-none sm:max-w-sm md:max-w-md lg:min-w-[400px]"
              name=""
              id=""
            />
          </div>
        </div>
  
        <div className=" flex gap-2">
           <h1 onClick={() =>setIsOpen(!isOpen)} className=" bg-white text-neutral-900 cursor-pointer select-none text-sm px-4 py-2 font-medium rounded-md">New Post</h1>
           <div>
           <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                {/* <img  className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"> */}
              </button>
            </div>
            </div>   
      
        </div>

        {isOpen && <PostForm isClose={() =>setIsOpen(!isOpen)}/>}
     </div>
    </div>
  );
}
