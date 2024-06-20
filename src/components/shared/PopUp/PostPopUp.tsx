import { PostProps } from '../Post'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';

interface Props {
    images: string[];  // Updated to string array
    time: string;      // Updated to string
    message?: string;  // Updated to optional string
    like?: number;  // Updated to optional string
    isClose: () => void; // Close function
}

function PostPopUp({ images, time, message, isClose }: Props) {
 
    console.log("is close", isClose);


    return <div className=" mx-auto bg-shadowColor/10 z-50 fixed inset-0 flex items-center justify-center min-h-screen ">
        <div className=" relative border border-textColor/50 bg-bgColor max-w-[300px] xs:max-w-[350px] mx-3 sm:max-w-5xl !rounded-xl md:min-h-[100px] p-4 pb-5 text-white">
            <button onClick={isClose} className=' absolute right-1 sm:right-5 bg-cardColor text-textColor hover:text-white transition-all duration-500 p-2 rounded-xl'><CgClose size={20} /></button>
            <div className=' flex items-center justify-center  overflow-hidden'>
                <div className=''>
                    <h1 className=' space-y-5 text-lg sm:text-3xl font-bold text-white/90 max-w-sm md:max-w-xl font-sans text-wrap'>Circular revamps the world’s thinnest smart ring as the wearables market heats up</h1>
                    <p className=' pt-5 text-white/50'>5 min ago</p>
                    <Swiper pagination={true} modules={[Pagination]} className=" mt-5 shadow-lg w-[250px] xs:w-[300px] sm:w-full sm:max-w-sm flex items-start justify-start">
                        {images.map((item,  index) => <SwiperSlide key={index}>
                            <Image alt='image silder' className='flex justify-start mx-0 max-h-52 object-cover   sm:max-w-sm overflow-hidden rounded-lg' src={item} width={400} height={200} />
                        </SwiperSlide>)}
                    </Swiper>
                    <div className='  mt-5 flex sm:flex-1 gap-10 border  ring-textColor  py-2 w-full sm:py-4 px-2 rounded-lg border-textColor/50'>
                        <div className=' flex items-center gap-2'>
                            <AiOutlineLike className='color-setUp border p-1 rounded-md' size={30} />
                            <AiOutlineDislike size={30}  className='color-setUp border p-1 rounded-md'/>
                        </div>
                        <div className=' flex items-center gap-1'>
                            <FaRegComments size={30}   className='color-setUp border p-1 rounded-md'/>
                            <p className=' text-lg'>Message</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}

export default PostPopUp;
