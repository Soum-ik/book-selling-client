import { TypewriterEffectSmoothDemo } from "@/components/shared/PopUp/TypewriterEffectSmoothDemo";
import { MdThumbsUpDown } from "react-icons/md";

import Image from "next/image";
import Link from "next/link"; 
import MyFeed from "@/components/shared/MyFeed";
import Post from "@/components/shared/Post";
 
export default async function Page() {
  const postData = {
    image: '/images/image1.png',
    time: '2 apr',
    message: 'Google Chrome users targeted by Cyber Attack',
};

const times = [1,2,356,64,64,64,6,4]
    return (
    <div className="  !min-h-screen bg-[#0E1217] p-3">
        <div className=" max-w-7xl mx-auto ">
            <div className=" py-5  md:py-10">
              <MyFeed/>
            </div>
            <div className=" grid gap-5 place-content-center last:mb-28 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
               {times.map((item, idx) => <Post key={idx} dataProps={postData}/>)}
            </div>
        </div>
    </div>
  );
}
