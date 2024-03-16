import React from "react";
import { BsChatSquareDots } from "react-icons/bs";
function Footer() {
  return (
    <div className="max-w-[1140px] w-full py-8 m-auto border-t-4">
      <div className="flex items-center m-auto justify-center">
        <BsChatSquareDots
          size={20}
          className="mr-2 text-[var(--primary-dark)]"
        />
        <h1 className="text-xl font-bold text-gray-700">Landing1</h1>
      </div>
    </div>
  );
}

export default Footer;
