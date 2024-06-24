import React from "react";
import design from "../assets/design.png";
import img1 from "../assets/img1.png";
import arrow from "../assets/arrow.png";
import Vector1 from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import Company from "./Company";

const Top = () => {
  return (
    <div
      className=" pt-28 bg-gradient-to-r from-zinc-950 to-neutral-800
         text-white h-full"
    >
      <div className=" flex flex-row">
        <div className=" mr-20">
          <img className=" w-80" src={design} alt="design" />
        </div>
        <div className=" flex flex-col">
          <h1 className=" text-6xl mb-10">
            Ready to take your
            <p className="{ } text-green-300 { }">Business Growth </p>
            to the next level?
          </h1>
          <p className="text-white text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            nostrum? Explicabo totam earum in, itaque nesciunt eaque optio
            tenetur, provident natus exercitationem cumque ducimus,
            necessitatibus numquam error. Obcaecati, necessitatibus alias!
          </p>

          <div
            className="flex flex-row text-center items-center rounded-3xl w-1/3 p-1
               bg-white text-black font-light text-sm mt-5 mb-32"
          >
            <img className="pr-2  w-2/12" src={arrow} alt="" />
            <a href="">Start your free trial</a>
          </div>
          <div className=" flex flex-col">
            <p className=" text-green-300 text-lg font-semibold mb-5">
              Trusted By Leading Brands
            </p>
            <div className="flex flex-row justify-evenly mb-28">
              <Company img={Vector1} />
              <Company img={Vector4} />
              <Company img={Vector3} />
            </div>
          </div>
        </div>
        <div className=" flex flex-col mx-36">
          <img className="  w-5/6" src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Top;
