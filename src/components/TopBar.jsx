import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { BsChatSquareDots } from "react-icons/bs";

function TopBar() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-2">
        <div className="flex items-center">
          <BsChatSquareDots
            size={30}
            className="text-[var(--primary-dark)] mr-2"
          />
          <h1 className="text-xl font-bold text-gray-700">Landing 1</h1>
        </div>
        <div className="flex">
          <div className="hidden md:flex items-center px-6">
            <AiOutlineClockCircle
              size={20}
              className="text-[var(--primary-dark)] mr-2"
            />
            <p className="text-sm text-gray-700">9AM - 5PM</p>
          </div>
          <div className="hidden md:flex items-center px-6">
            <AiFillPhone
              size={20}
              className="text-[var(--primary-dark)] mr-2"
            />
            <p className="text-sm text-gray-700">+250 788 966 866</p>
          </div>
          <button>Get a Free Qoute</button>
        </div>
      </div>
    </>
  );
}

export default TopBar;
