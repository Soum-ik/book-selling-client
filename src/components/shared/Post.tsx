"use client";

import Image from "next/image";
import PostPopUp from "@/components/shared/PopUp/PostPopUp";
import { FiMessageSquare, FiBookmark } from "react-icons/fi";
import React, { useState } from "react";
import { TiArrowUpOutline } from "react-icons/ti";
import { relativeDate } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

export interface PostData {
    images: string[];
    createdAt: Date;
    message: string;
    semester: string;
    totalBook: string;
    price: number;
    comment: [];
    userId: string;
    urgent: boolean;
    isAvaiableFullSet: boolean;
}

export interface PostProps {
    dataProps: PostData;
}

const Post: React.FC<PostProps> = ({ dataProps }) => {
    const { createdAt, images, message, semester, userId } = dataProps;
    const [isOpen, setIsOpen] = useState(false);


    const imageUrl = images[0]?.startsWith('/') ? images[0] : `/${images[0]}`;
    return (
        <div className="shadow-lg p-3 rounded-2xl bg-cardColor1 mx-auto max-w-sm">
            <Skeleton className="h-12 w-12 rounded-full bg-textColor/50 mb-2" />

            <h1 className="font-bold line-clamp-3 text-white text-lg">
                {message || `Public APIs — A directory of free and public APIs`}
            </h1>
            <h1 className="font-semibold line-clamp-3 text-textColor text-xs mt-5">
                {relativeDate(createdAt)}
            </h1>
            <div className="py-5 w-full group relative transition-colors duration-500">
                <Image
                    src={`https://i.ibb.co/ZYn2dbR/Colorful-Modern-Infinity-Technology-Free-Logo.png`}
                    width={400}
                    height={400}
                    className="group-hover:blur-[5px] rounded-lg max-h-[200px] object-cover"
                    alt="Post Image"
                />
                <p className="group-hover:text-white cursor-pointer max-w-max mx-auto font-bold text-sm text-center absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 hidden group-hover:block">
                    {semester + ` Semester`}
                </p>
            </div>

            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between my-1.5">
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
            {isOpen && <PostPopUp data={dataProps} isClose={() => setIsOpen(!isOpen)} />}
        </div>
    );
};

export default Post;
