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

interface Props {
    data: PostData;
    isClose: () => void; // Close function
}

function PostPopUp({ data, isClose }: Props) {
    console.log(isClose, 'data checking');
    const [like, setlike] = useState(null);
    const [disLike, setdisLike] = useState(null);


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
                        <div className=' cursor-pointer flex items-center gap-1'>
                            <FaRegComments size={30} className='color-setUp border p-1 rounded-md' />
                            <p className=' text-lg select-none'>Message</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}

export default PostPopUp;
