'use client'
import { useState } from "react";
import { MdThumbsUpDown } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";

function MyFeed() {
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown visibility
  };

  return (
    <div className="flex items-center gap-2 relative">
      {/* Feed Settings */}
      <h1 className="flex items-center px-3 py-2 gap-2 bg-cardColor1 font-semibold max-w-max rounded-lg text-textColor shadow-lg cursor-pointer hover:text-white transition-all duration-500 hover:bg-cardColor">
        <MdThumbsUpDown />
        Feed Settings
      </h1>

      {/* Arrow Up/Down */}
      <div
        className="px-3 py-2 flex items-center justify-center bg-cardColor1 font-semibold max-w-max rounded-lg text-textColor shadow-lg cursor-pointer hover:text-white transition-all duration-500 hover:bg-cardColor"
        onClick={toggleDropdown} // Toggle dropdown visibility on click
      >
        <LuArrowUpDown size={25} />
      </div>

      
      {showDropdown && (
        <div className="   absolute right-0 -top-5 px-3 py-2 flex items-center justify-center bg-cardColor1 font-semibold max-w-max rounded-lg text-textColor shadow-lg cursor-pointer transition-all duration-700 group-hover">
          <div className="" onClick={() =>setShowDropdown(!showDropdown)}>
            <option className="hover:bg-cardColor backdrop-blur-md  rounded hover:text-white">Sort By Name</option>
            <option className="hover:bg-cardColor backdrop-blur-md  rounded hover:text-white">Sort By Date</option>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyFeed;
