"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";
 

export function TypewriterEffectSmoothDemo({}) {
  const words = [
    {
      text: "Buy",
    },
    {
      text: "Books",
    },
    {
      text: "With 100% Satisfaction",
    },

  ];
  const [open, setopen] = useState(false)

  const handleClick = () =>{
    setopen(!open)
  }

  return (
    <div className={`flex flex-col items-center justify-center h-[20rem] border-2 px-3 max-w-max mx-auto rounded-xl relative ${open ? 'hidden' : '' }`}>

     <button onClick={handleClick} className=" absolute top-5 bg-black text-white p-1 font-semibold  right-5"><Cross1Icon className="text-xl rounded-md" /></button>

      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Stay Safe 
      </p>
      <TypewriterEffectSmooth className=" max-w-max" words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="md:w-40 w-20 md:h-10 h-8 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="md:w-40 w-20 md:h-10 h-8 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
