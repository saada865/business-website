import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";

const Logos = () => {
  return (
    <div className="flex flex-row justify-evenly gap-4 ">
      <div className=" rounded-full bg-white w-12 h-12 ">
        <IoLogoInstagram className=" w-12 h-12 p-2 text-black" />
      </div>
      <div className=" rounded-full bg-white w-12 h-12">
        <CiLinkedin className=" w-12 h-12 p-2 text-black" />
      </div>
      <div className="rounded-full bg-white w-12 h-12">
        <FiFacebook className=" w-12 h-12 p-2 text-black" />
      </div>
    </div>
  );
};

export default Logos;
