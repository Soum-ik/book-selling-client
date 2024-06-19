import { PostProps } from '../Post'
import { AiOutlineLike,  AiOutlineDislike  } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

function PostPopUp({ }) {
    const images = [1, 3, 3, 4]
    return <div className=" mx-auto bg-shadowColor/10 z-50 fixed inset-0 flex items-center justify-center min-h-screen ">
        <div className=" border border-textColor/50 bg-bgColor max-w-sm  md:max-w-5xl !rounded-xl md:min-h-[100px] p-4 pb-20 text-white">
            <div className=' flex items-center justify-between '>
                <div className=''>
                    <h1 className=' space-y-5 text-lg sm:text-3xl font-bold text-white/90 max-w-sm md:max-w-xl font-sans'>Circular revamps the world’s thinnest smart ring as the wearables market heats up</h1>
                    <p className=' pt-5 text-white/50'>5 min ago</p>
                    <Swiper pagination={true} modules={[Pagination]} className=" mt-5 shadow-lg max-w-sm flex items-start justify-start">
                        {images.map((item) => <SwiperSlide>
                            <Image alt='image silder' className='flex justify-start mx-0 max-h-52 object-cover max-w-sm rounded-lg' src={'/images/image1.png'} width={400} height={200} />
                        </SwiperSlide>)}
                    </Swiper>
                    <div className=' mt-5 flex flex-1 gap-5 border py-4 px-2 rounded-lg border-textColor/50'>
                        <div className=' flex items-center gap-1'>
                                <AiOutlineLike/>
                                <AiOutlineDislike/>
                        </div>
                        <div className=' flex items-center gap-1'>
                                <FaRegComments/>
                                <p>Message</p>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    </div>;
}

export default PostPopUp;
