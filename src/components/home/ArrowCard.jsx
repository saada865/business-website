import React from "react";
import arrow from "../assets/arrow.png";

const ArrowCard = ({ text }) => {
  return (
    <div
      className="flex flex-row text-center items-center rounded-3xl w-1/3 p-1
               bg-white text-black font-light text-lg mt-5 mb-32"
    >
      <img className="p-1  w-2/12" src={arrow} alt="" />
      <a href="#" className=" p-1">
        {text}
      </a>
    </div>
  );
};

export default ArrowCard;
