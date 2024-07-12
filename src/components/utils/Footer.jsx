import React from "react";
import logo from "../assets/logo.png";
import Logos from "./Logos";

const Footer = () => {
  return (
    <div className="bg-black text-white py-20 px-5">
      <div className="flex flex-col">
        <div className="block lg:flex flex-row justify-between">
          <div className="flex flex-col w-72">
            <div className="flex flex-row mb-5 text-left items-center items-left">
              <img src={logo} alt="img" />
              <h1 className="text-3xl font-bold px-2">Canvix</h1>
            </div>
            <p className=" text-md">
              We’re a team of strategic creators and digital innovators, united
              focus in our pursuit of mastery and joy.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Pages</h2>
            <p className="text-sm">Home</p>
            <p className="text-sm">About</p>
            <p className="text-sm">Contact Us</p>
            <p className="text-sm">Project</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Utility Pages</h2>
            <p className="text-sm">Style guide</p>
            <p className="text-sm">Instruction</p>
            <p className="text-sm">Licences</p>
            <p className="text-sm">Changelog</p>
            <p className="text-sm">Error 404</p>
            <p className="text-sm">Password Protector</p>
          </div>
          <div className="overflow-hidden flex flex-col font-semibold sm:w-1/2 w-auto lg:w-1/3 xl:w-1/4">
            <h2 className="text-xl">Subscribe</h2>
            <div className="flex flex-row rounded-full bg-white p-1 mt-5">
              <input
                className="text-gray-400 p-2 items-center justify-center rounded-full"
                placeholder="Enter your email here"
              />
              <button className="bg-black rounded-full text-white p-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className=" mt-24 h-px my-8 bg-white border-0 dark:bg-gray-700" />

        <div className="block lg:flex flex-row justify-between">
          <div className="flex flex-col text-white">
            <h2 className="text-white font-semibold text-xl">Copyright By</h2>
            <p className="">
              Designed by <span className=" text-green-300">Webestica</span>,
              Powered by <span className="text-green-300">Webflow</span>
            </p>
          </div>
          <div className="flex font-semibold flex-col text-white">
            <h2 className=" text-xl">Contact Us</h2>
            <p>+0 12 457 4578</p>
          </div>
          <div className="flex font-semibold flex-col text-white">
            <h2 className="text-xl">Address</h2>
            <p>119 Tanglewood Lane Gulfport, MS 39503</p>
          </div>
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Footer;
