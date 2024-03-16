import React from "react";

function Hero() {
  return (
    <div className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1542516891-fb10fde85edf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="/"
        className="w-full h-full object-cover"
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute w-full top-[40%] md:[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl">Find Your Special Trip</h1>
          <h2 className="text-4xl py-4 italic">with weekaway</h2>
          <p>
            Book a space to stay for your away week, to help you relax catch
            some vibes with your loved ones, friends or that lady or man you
            have been targeting to spend time with. With a few clicks away you
            will be able to set up everything.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
