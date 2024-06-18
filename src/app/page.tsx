import { TypewriterEffectSmoothDemo } from "@/components/shared/PopUp/TypewriterEffectSmoothDemo";
import { MdThumbsUpDown } from "react-icons/md";

import Image from "next/image";
import Link from "next/link"; 
import MyFeed from "@/components/shared/MyFeed";
import Post from "@/components/shared/Post";
export default async function Page() {
    return (
    <div className="  !min-h-screen bg-[#0E1217] p-3">
        <div className=" max-w-7xl mx-auto ">
            <div className=" py-5  md:py-10">
              <MyFeed/>
            </div>
            <div className=" grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
              <Post/>
            </div>
        </div>
    </div>
  );
}
