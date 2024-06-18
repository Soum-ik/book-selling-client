import { PlusIcon } from "@radix-ui/react-icons";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="static inset-0 mx-auto flex rounded-md flex-grow items-center justify-between bg-white px-3 py-2 shadow-sm backdrop-blur-md">
      <div>
        <h2 className="text-3xl font-semibold   bg-clip-text text-transparent select-none cursor-context-menu"> {`Book<Sell/>`}</h2>
      </div>

      <div>
        <div className="flex items-center justify-center gap-3 rounded-lg border px-3 py-1">
          <SearchIcon size={20} />
          <input
            type="text"
            className="max-w-xs outline-none sm:max-w-sm md:max-w-md lg:min-w-[400px]"
            name=""
            id=""
          />
        </div>
      </div>

      <div>
        <div className="flex gap-2 !rounded-xl text-3xl dark:bg-white">
          <h1 className="!rounded-xl bg-black p-1.5">
            <PlusIcon className="size-7 text-white" />
          </h1>
          {/* <h1 className='p-1  .5 !rounded-xl bg-black'><PlusIcon className='text-white size-7  '/></h1> */}
        </div>
      </div>
    </div>
  );
}
