import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-gradient-to-r from-zinc-900 to-gray-950 py-4 lg:px-32 text-white">
      <div className="flex flex-row justify-between items-center">
        <div className=" flex flex-row">
          <img className="px-2 w-1/2 h-8" src={logo} alt="img" />
          <h1 className=" text-2xl font-bold">Canvix</h1>
        </div>
        <ul className="flex flex-row lg:space-x-10 justify-evenly px-2 space-x-2 text-sm">
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="lg:flex hidden font-thin px-3 py-2 text-sm rounded-3xl bg-white text-black">
          <a href="#">Get in touch</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
