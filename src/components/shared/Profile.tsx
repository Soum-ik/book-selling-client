'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
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
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { UserResponse } from "@/lib/types/interfaces";
import fetchData from "data-fetch-ts";
import { use, useState } from "react";
import { toast } from "sonner";

interface ProfileInfo {
    token: string | undefined,
    userInfo: UserResponse
}


export default function ProfileSetting(ProfileInfo: ProfileInfo) {
    const { token, userInfo } = ProfileInfo
    const [userName, setUserName] = useState('');

    const endpoint = `${process.env.NEXT_PUBLIC_ENDPOINT_BASEPATH}profile-update/${userName}`
    const handleProfileUpdate = async () => {
        const { data, error } = await fetchData({ token, endpoint })

    }




    return (<div>
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
                                        <Input id="name" readOnly defaultValue={userInfo?.email} />
                                    </div>
                                    <div className="space-y-1 flex items-start flex-col">
                                        <label htmlFor="username">Username</label>
                                        <Input id="username" defaultValue={userInfo?.username} onChange={(e) => setUserName(e.target.value)} />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <DialogClose asChild>
                                        <Button type="button" onClick={handleProfileUpdate}>Save changes</Button>
                                    </DialogClose>
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
                                        <Input id="current" type="password" />
                                    </div>
                                    <div className="space-y-1 flex items-start flex-col">
                                        <label htmlFor="new">New password</label>
                                        <Input id="new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <DialogClose asChild>
                                        <Button type="button" onClick={handleProfileUpdate}>Save changes</Button>
                                    </DialogClose>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </DialogHeader>
            </DialogContent>
        </Dialog>}
    </div>);
}


