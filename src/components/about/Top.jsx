import React from "react";
import img from "../assets/core-image.png";
import img2 from "../assets/face-image.jpg";
import stars from "../assets/stars.svg";

const Top = () => {
  return (
    <div className=" bg-[#F5F5F5] p-10 ">
      <div className=" bg-black p-5 rounded-2xl">
        <div className="flex flex-row justify-between pt-10 pl-10">
          <div className="flex flex-col pr-10">
            <p className="text-md text-white mb-5">
              Pleasure and so read the was hope.
            </p>
            <h2 className="text-white text-7xl tracking-wide">
              Ready to take <br />
              <span className=" text-green-300 "> your business </span> <br />
              to the next <br />
              level?
            </h2>
            <p className="text-white text-lg font-semibold mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
              pariatur, corporis necessitatibus doloribus vero expedita ipsum
              pariatur, corporis necessitatibus doloribus vero expedita ipsum
            </p>
            <div className="flex flex-row items-center text-center">
              <img src={img2} className="rounded-full h-20 w-20 mt-10" alt="" />
              <div className="flex flex-col px-5 pt-8">
                <p className="text-white text-lg font-semibold">
                  Rated 4.9/5 stars
                </p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className=" ">
            <img className=" h-[700px] w-[1500px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
