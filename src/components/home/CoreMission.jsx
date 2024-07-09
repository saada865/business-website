import React from "react";
import img from "../assets/core-image.png";
import ArrowCard from "./ArrowCard";

const CoreMission = () => {
  return (
    <div className=" bg-black px-10 py-20">
      <div className="flex flex-row">
        <img className="pr-10" src={img} alt="img" />
        <div className=" flex flex-col ml-10">
          <p className=" text-green-300 text-3xl font-semibold mt-14 mb-8">
            About us
          </p>
          <h2 className="text-white text-5xl font-semibold mb-10">
            The core mission
            <p className="text-white">behind all our</p>
            work
          </h2>
          <p className="text-white text-lg mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            doloribus id ipsam architecto
          </p>
          <div className="flex flex-row justify-between ">
            <div className="flex flex-col">
              <h2 className=" text-4xl font-semibold text-green-300">330+</h2>{" "}
              <p className="text-white mt-2">Comapanies helped</p>
            </div>
            <div className="flex flex-col">
              <h2 className=" text-4xl font-semibold text-green-300">230+</h2>
              <p className="text-white mt-2">Revenue generated</p>
            </div>
          </div>
          <ArrowCard text="More about us" />
        </div>
      </div>
    </div>
  );
};

export default CoreMission;
