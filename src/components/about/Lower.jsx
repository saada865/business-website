import React from "react";
import img from "../assets/bg-image.jpg";

const Lower = () => {
  return (
    <div className="flex  justify-center items-center bg-[#F5F5F5] py-20 ">
      <div className="relative rounded-lg overflow-hidden shadow-lg py-5 px-5">
        <img src={img} alt="" className=" object-cover" />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h2 className="text-2xl lg:text-5xl font-bold mb-4">
            Enough talk, let’s get to work
          </h2>
          <button className=" bg-white text-black py-2 px-4 rounded-full shadow-lg">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lower;
