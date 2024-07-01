"use client"
import { PostData } from '../Post'
import Image from 'next/image';
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CgClose } from 'react-icons/cg';

// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import { relativeDate } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';
import Message from './message';

interface Props {
    data: PostData;
    isClose: () => void; // Close function
}

function PostPopUp({ data, isClose }: Props) {
    const messageData = [
        {
            id: 1,
            name: 'soumik',
            message: "you're project is extrenmly good"
        },
        {
            id: 2,
            name: 'ratul',
            message: "you're project is extrenmly good"
        },
    ]

    const [like, setlike] = useState(null);
    const [disLike, setdisLike] = useState(null);

    const [isMessageOn, SetIsMessageOn] = useState(false);

    return <div className=" mx-auto bg-shadowColor/50 z-50 fixed inset-0 flex items-center justify-center min-h-screen ">
        <div className=" relative border border-textColor/50 bg-bgColor max-w-[300px] xs:max-w-[350px] mx-3 sm:max-w-5xl !rounded-xl md:min-h-[100px] p-4 pb-5 text-white">
            <Skeleton className="h-12 w-12 rounded-full bg-textColor/50 mb-2" />

            <button onClick={isClose} className=' absolute top-4 right-1 sm:right-5 bg-cardColor text-textColor hover:text-white transition-all duration-500 p-2 rounded-xl'><CgClose size={20} /></button>
            <div className=' flex items-center justify-center  overflow-hidden'>
                <div className=''>
                    <h1 className=' space-y-5 text-lg sm:text-3xl font-bold text-white/90 max-w-sm md:max-w-xl font-sans text-wrap'>{data.message || `Public APIs — A directory of free and public APIs`}</h1>
                    <p className=' pt-5 text-white/50'>{relativeDate(data.createdAt)}</p>
                    <Swiper pagination={true} modules={[Pagination]} className=" mt-5 shadow-lg w-[250px] xs:w-[300px] sm:w-full sm:max-w-sm flex items-start justify-start">
                        {data.images.map((item, index) => <SwiperSlide key={index}>
                            <Image alt='image silder' className='flex justify-start mx-0 max-h-52 object-cover   sm:max-w-sm overflow-hidden rounded-lg' src={item} width={400} height={200} />
                        </SwiperSlide>)}
                    </Swiper>
                    <div className='  mt-5 flex sm:flex-1 gap-10 border  ring-textColor  py-2 w-full sm:py-4 px-2 rounded-lg border-textColor/50'>
                        <div className=' flex items-center gap-2 cursor-pointer'>
                            <AiOutlineLike className='color-setUp border p-1 rounded-md' size={30} />
                            <AiOutlineDislike size={30} className='color-setUp border p-1 rounded-md' />
                        </div>
                        <div onClick={() => SetIsMessageOn(!isMessageOn)} className=' cursor-pointer flex items-center gap-1 duration-300 ease-in-out transition-all'>
                            <FaRegComments size={30} className='color-setUp border p-1 rounded-md' />
                            <p className=' text-lg select-none'>Message</p>
                        </div>
                    </div>
                    <div>
                        {isMessageOn && <Message />}
                        <div className=' max-h-[200px]  overflow-y-scroll '>
                            {messageData?.filter((_, idx) => idx <= 5)?.map((mess, idx) => (
                                <div className='flex items-center mt-3' key={idx}>
                                    <Skeleton className="h-10 w-10 rounded-full bg-textColor/50 mb-2" />
                                    <div className='flex flex-col ml-2'>
                                        <p className=' capitalize'>{mess.name}</p>
                                        <p>{mess.message}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}

export default PostPopUp;
