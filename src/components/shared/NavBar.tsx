
'use client'

import { IoSearchSharp } from "react-icons/io5";
import { TiUser } from "react-icons/ti";
import PostForm from "./PostForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import fetchData from "data-fetch-ts";
import { toast } from "sonner";
import { UserResponse } from "@/lib/types/interfaces";
import ProfileSetting from "./Profile";



export default function NavBar() {
  const [isClickPost, setIsClickPost] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const token = Cookies.get('authToken')
  const [userInfo, setUserInfo] = useState<UserResponse>({});
  useEffect(() => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}verified-user`

    async function GetData() {
      const { data, error } = await fetchData({ endpoint, token });
      if (error) toast(error, {
        description: new Date() + '', action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      });
      setUserInfo(data)
    }
    GetData()
  }, []);

  return (
    <div className="fixed z-50 bg-[#0E1217] border-b border-gray-100  max-h-max  top-0 left-0 right-0 bottom-0 mx-auto  px-4 py-2 shadow-2xl backdrop-blur-xl">
      <div className=" flex  rounded-md flex-grow items-center justify-between">
        <Link href={'/'}>
          <h2 className="sm:text-3xl text-2xl font-semibold text-white  bg-clip-text   select-none  custom-font">Book Sell </h2>
        </Link>

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

        <div className=" flex gap-2 items-center">
          {token && <h1 onClick={() => setIsClickPost(!isClickPost)} className=" bg-white text-neutral-900 cursor-pointer select-none md:block hidden text-sm px-4 py-2 font-medium rounded-md">New Post</h1>}
          <div onClick={() => setIsOpen(!isOpen)} className=" transition-all duration-500 text-white border-textColor border p-1 rounded-full">
            <TiUser size={23} />
          </div>
        </div>

        {isOpen && <div className=" transition-all duration-500 top-16 right-8 absolute cursor-pointer bg-white shadow-lg space-y-2 rounded-xl p-3 flex flex-col   ">
          <h1 className=" border-b-2 border-spacing-10 border-black ">My Account</h1>
          <div className=" opacity-70 text-sm">
            <ProfileSetting token={token} userInfo={userInfo} />
            <h1 className=" px-1 hover:rounded-md hover:bg-slate-50">{token ? <a>Log Out</a> : <Link href={'/sign-in'}>Log In</Link>}</h1>
          </div>
        </div>}

        {isClickPost && <PostForm isClose={() => setIsClickPost(!isClickPost)} />}
      </div>
    </div>
  );
}
