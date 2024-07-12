import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import Card from "./Card";

const Services = () => {
  return (
    <div className=" pt-10 bg-[#F5F5F5]">
      <div className=" flex flex-col items-center text-center">
        <div>
          <p className=" text-3xl font-semibold text-green-500 my-8">
            Our Services
          </p>
          <h2 className=" text-3xl lg:text-5xl font-semibold">
            High-impact services
            <p>for your business</p>
          </h2>
        </div>
        <div className="block lg:grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32 px-2 lg:mx-32 my-20">
          <Card img={img2} />
          <Card img={img3} />
          <Card img={img4} />
          <Card img={img5} />
          <Card img={img6} />
          <Card img={img5} />
        </div>
      </div>
    </div>
  );
};

export default Services;
