"use client"
import Image from "next/image";
import PostPopUp from "@/components/shared/PopUp/PostPopUp"
import { FiMessageSquare } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";
import React from 'react';
import { TiArrowUpOutline } from "react-icons/ti";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

interface PostData {
    image: string;
    time: string;
    message: string;
}



export interface PostProps {
    dataProps: PostData;
}

const Post :React.FC<PostProps>  = ({ dataProps }) => {
    const { time, image, message } = dataProps;
    return (
        <div className='shadow-lg p-3 rounded-2xl bg-cardColor1 max-w-sm'>
            <h1 className='font-bold line-clamp-3 text-white text-lg'>{message || `Public APIs — A directory of free and public apis`}</h1>
            <h1 className='font-semibold line-clamp-3 text-textColor text-xs mt-5'>{time || '2 apr'}</h1>
            <div className="py-5 w-full group relative transition-colors duration-500">
                <Image
                    src={image || '/images/image1.png'}
                    width={400}
                    height={400}
                    className="group-hover:blur-[5px] rounded-lg max-h-[200px] object-cover"
                    alt="Post Image"
                />
                <p className="group-hover:text-white cursor-pointer max-w-max mx-auto font-bold text-sm text-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 hidden group-hover:block">
                    1st Semester
                </p>
            </div>

            {/* <div className="flex justify-between my-1.5">
                <AlertDialog>
                    <AlertDialogTrigger> <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#39E58C] hover:bg-[#39E58C]/30 rounded-lg"><TiArrowUpOutline className=" size-5" /></div></AlertDialogTrigger>
                </AlertDialog>
                    <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#974166] hover:bg-[#461f30]/30 rounded-lg"><FiMessageSquare className=" size-5" /></div>
                    <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#1b3e2c] hover:bg-[#39E58C]/30 rounded-lg"><FiBookmark className=" size-5" /></div>

        

            </div> */}
            <div className="flex justify-between my-1.5">
          
 
                        <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#39E58C] hover:bg-[#39E58C]/30 rounded-lg">
                            <TiArrowUpOutline className="size-5" />
                        </div>
             
             
                <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#974166] hover:bg-[#461f30]/30 rounded-lg">
                    <FiMessageSquare className="size-5" />
                </div>
                <div className="text-textColor text-[25px] bg-fixed p-2 hover:text-[#1b3e2c] hover:bg-[#39E58C]/30 rounded-lg">
                    <FiBookmark className="size-5" />
                </div>
            </div>
            <PostPopUp/>    
        </div>
    );
}

export default Post;
