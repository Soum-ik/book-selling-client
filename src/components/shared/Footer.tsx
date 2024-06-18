'use client'
import { useState } from "react";
import { BiHome, BiSolidMedal, BiUser, BiSearch } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";

interface Content {
  id: number;
  name?: string;
  icon: React.ReactNode;
}

const contents: Content[] = [
  { id: 1, name: "Home", icon: <BiHome size={25} /> },
  { id: 2, name: "Search", icon: <BiSearch size={25} /> },
  { id: 3, name: "Plus", icon: <FaPlus size={50} className="bg-[#1A1F26] p-3 !rounded-2xl" /> },
  { id: 4, name: "Profile", icon: <BiUser size={25} /> },
  { id: 5, name: "Semester", icon: <BiSolidMedal size={25} /> },
];

function Footer() {
  const [active, setActive] = useState<number>(1);

  const handleActive = (id: number) => {
    setActive(id);
  };

  return (
    <div className='md:hidden  p-3 transition-all duration-500 rounded-t-2xl mx-1 py-5 fixed bottom-0 left-0 right-0 bg-[#181a1f]'>
      <div className='flex items-center  justify-between'>
        {contents.map((content) => (
          <div
            key={content.id}
            onClick={() => handleActive(content.id)}
            className={`flex cursor-pointer items-center justify-center  flex-col ${content.id === active ? '   ' : ''}`}
          >
            <div className={content.id === active ? 'text-white' : 'text-[#A8B3CF]'}>
              {content.icon}
            </div>
            {content.name !== 'Plus' && (
              <h1 className={content.id === active ? 'text-white' : 'text-[#A8B3CF]'}>
                {content.name}
              </h1>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;