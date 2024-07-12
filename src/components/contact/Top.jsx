import React from "react";
import email from "../assets/email.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import Logos from "../utils/Logos";
import Input from "./Input";
import Link from "./Link";

const Top = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="block lg:flex flex-row mx-10 py-20 justify-between">
        <div className="flex flex-col text-black">
          <h2 className="text-4xl font-semibold">Let's talk</h2>
          <p className="text-lg">
            We collaborate with thousands of creators, entrepreneurs, <br /> and
            complete legends.
          </p>
          <hr className="bg-gray-300 h-px border-0 my-10 " />
          <div className="flex flex-col">
            <Link img={email} title="Email us" text="hello@gmail.com" />
            <Link img={call} title="Email us" text="hello@gmail.com" />
            <Link img={location} title="Email us" text="hello@gmail.com" />
          </div>

          <hr className="bg-gray-300 h-px border-0 my-10 " />
          <Logos />
        </div>
        <div className="flex flex-col bg-neutral-200 rounded-2xl p-10 mt-5">
          <div className="block lg:flex flex-row justify-between">
            <Input text="First name" />
            <Input text="Last name" />
          </div>
          <div className="block lg:flex flex-row justify-between my-14">
            <Input text="Email" />
            <Input text="Phone" />
          </div>
          <Input text="Message" />
          <div className="bg-black rounded-full lg:w-1/5 text-center mt-14 ml-5">
            <h2 className="text-lg font-semibold text-white py-1 px-2">
              Submit
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
