
'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoSearchSharp } from "react-icons/io5";
import { TiUser } from "react-icons/ti";
import PostForm from "./PostForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import fetchData from "data-fetch-ts";
import { toast } from "sonner";
import { UserResponse } from "@/lib/types/interfaces";
export default function NavBar() {
  const [isClickPost, setIsClickPost] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const token = Cookies.get('authToken')
  const [userInfo, setUserInfo] = useState<UserResponse>({});
  useEffect(() => {
    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}verified-user`

    async function GetData() {
      const { data, error } = await fetchData({ endpoint, token });
      if (error) toast(error, { description: new Date() + '' });
      setUserInfo(data)
    }
    GetData()
  }, []);

  console.log(userInfo, 'user data');

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
          {token && <h1 onClick={() => setIsClickPost(!isClickPost)} className=" bg-white text-neutral-900 cursor-pointer select-none text-sm px-4 py-2 font-medium rounded-md">New Post</h1>}
          <div onClick={() => setIsOpen(!isOpen)} className=" transition-all duration-500 text-white border-textColor border p-1 rounded-full">
            <TiUser size={23} />
          </div>
        </div>

        {isOpen && <div className=" transition-all duration-500 top-16 right-8 absolute cursor-pointer bg-white shadow-lg space-y-2 rounded-xl p-3 flex flex-col   ">
          <h1 className=" border-b-2 border-spacing-10 border-black ">My Account</h1>
          <div className=" opacity-70 text-sm">
            {token && <Dialog>
              <DialogTrigger><h1 className=" px-1 hover:rounded-md hover:bg-slate-50">Setting</h1></DialogTrigger>
              <DialogContent className=" mx-2 xs:mx-0 max-w-[370px] sm:max-w-[450px] bg-white">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                  <Tabs defaultValue="account" className="max-w-[340px] sm:max-w-[430px]">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                      <Card>
                        <CardHeader>
                          <CardTitle>Account</CardTitle>
                          <CardDescription>
                            Make changes to your account here. Click save when you're done.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1 flex items-start flex-col">
                            <label htmlFor="name">Name</label>
                            {/* <Input id="name" defaultValue={userInfo?.email} /> */}
                          </div>
                          <div className="space-y-1 flex items-start flex-col">
                            <label htmlFor="username">Username</label>
                            {/* <Input id="username" defaultValue={userInfo?.username} /> */}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Save changes</Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                    <TabsContent value="password">
                      <Card>
                        <CardHeader>
                          <CardTitle>Password</CardTitle>
                          <CardDescription>
                            Change your password here. After saving, you'll be logged out.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="space-y-1 flex items-start flex-col">
                            <label htmlFor="current">Current password</label>
                            <Input id="current" type="password" defaultValue={userInfo.password} />
                          </div>
                          <div className="space-y-1 flex items-start flex-col">
                            <label htmlFor="new">New password</label>
                            <Input id="new" type="password" />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button>Save password</Button>
                        </CardFooter>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </DialogHeader>
              </DialogContent>
            </Dialog>}
            <h1 className=" px-1 hover:rounded-md hover:bg-slate-50">{token ? <a>Log Out</a> : <Link href={'/sign-in'}>Log In</Link>}</h1>
          </div>
        </div>}

        {isClickPost && <PostForm isClose={() => setIsClickPost(!isClickPost)} />}
      </div>
    </div>
  );
}
