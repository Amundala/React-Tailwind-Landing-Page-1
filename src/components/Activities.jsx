import React from "react";

function Activities() {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]">
      <div className="relative p-4">
        <h3 className="absolute z-10 text-2xl text-white  translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] font-semibold">
          Cruises
        </h3>
        <img
          src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
          className="w-full h-full border-4 shadow-lg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 text-2xl text-white translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] font-semibold">
          Resorts
        </h3>
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
          className="w-full h-full border-4 shadow-lg"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 text-2xl text-white  translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] font-semibold">
          Rooms
        </h3>
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="/"
          className="w-full h-full border-4 shadow-lg"
        />
      </div>
    </div>
  );
}

export default Activities;
