import React from "react";
import img1 from "../assets/img50.jpg";
import img3 from "../assets/img51.jpg";
import OurMissionCard from "./OurMissionCard";

const OurMission = () => {
  return (
    <div className="px-10 pt-20 bg-black">
      <div className="block lg:flex flex-row ">
        <div className="flex flex-col">
          <h2 className="text-green-300 text-3xl font-semibold">Our mission</h2>
          <h2 className="text-white text-3xl lg:text-5xl font-semibold pt-5 tracking-wider">
            Boost with your <br /> business
          </h2>
          <p className="text-white text-lg pt-5">
            He moonlights difficult and engrossed it, sportsmen. <br />{" "}
            Interested has all Devonshire difficulty assistance joy.
          </p>
          <div className="flex flex-row mt-20 gap-2 pb-4">
            <div className="block lg:flex flex-col space-y-8">
              <OurMissionCard text="Moonlight Newspaper up its enjoyment" />
              <OurMissionCard text="She new course gets Started." />
              <OurMissionCard text="She new course gets living." />
            </div>
            <div className="block lg:flex flex-col space-y-8">
              <OurMissionCard text="Rooms oh fully taken by worse." />
              <OurMissionCard text="Perceived end certainly day." />
              <OurMissionCard text="Preference any astonished unreserved Mrs." />
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="  flex flex-col lg:ml-10">
            <img
              src={img1}
              className="rounded-2xl h-[450px] w-[380px]"
              alt=""
            />
            <div className="flex flex-row mt-10 justify-between text-center">
              <div className="flex flex-col">
                <h2 className="text-5xl text-white">10k</h2>
                <p className="text-white text-sm">
                  Great conversations per month
                </p>
              </div>
              <div className="border-solid border-[1px] h-24 bg-l-neutral-700 mx-5"></div>
              <div className="flex flex-col mt-10">
                <h2 className="text-5xl text-white">95+</h2>
                <p className="text-white text-sm">Project complete</p>
              </div>
            </div>
          </div>
          <div className="">
            <img
              className=" hidden xl:flex h-[350px] w-[250px] rounded-2xl mt-80 ml-10 mb-20"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
