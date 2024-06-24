import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" bg-gradient-to-r from-zinc-900 to-gray-950 py-4 px-32 text-white">
      <div className="flex flex-row justify-between items-center">
        <div className=" flex flex-row">
          <img className="px-2 w-1/2 h-8" src={logo} alt="img" />
          <h1 className=" text-2xl font-bold">Canvix</h1>
        </div>
        <ul className="flex flex-row space-x-10 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
        <div className=" font-thin px-3 py-2 text-sm rounded-3xl bg-white text-black">
          <a href="#">Get in touch</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
