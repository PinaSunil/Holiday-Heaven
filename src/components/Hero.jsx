import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1602217401731-1b9d5c2384f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt=""
      />
      <div className="absolute w-full h-screen top-0 left-0 bg-black/30" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="drop-shadow-2xl"> All inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
            Private Beaches and Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Experience complete relaxation and luxury at our All-Inclusive
            Private Beaches and Getaways. Unwind in paradise with us, where
            every moment is pure serenity and indulgence.
          </p>
          <button className="bg-white text-black hover:shadow-2x hover:transition duration-500 hover:scale-105">
            Reserve now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
