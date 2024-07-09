import React from "react";
import design from "../assets/design.png";
import img1 from "../assets/img1.png";
import Vector1 from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import Company from "./Company";
import ArrowCard from "./ArrowCard";

const Top = () => {
  return (
    <div
      className=" pt-28 bg-gradient-to-r from-zinc-950 to-neutral-800
         text-white h-full"
    >
      <div className=" flex flex-row">
        <div className=" mr-10">
          <img className=" w-80" src={design} alt="design" />
        </div>
        <div className=" flex flex-col">
          <h1 className=" text-7xl mb-10">
            Ready to take your
            <p className="{ } text-green-300 { }">Business Growth </p>
            to the next level?
          </h1>
          <p className="text-white text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            nostrum? Explicabo totam earum in, itaque nesciunt eaque optio
            tenetur, provident natus exercitationem cumque ducimus,
            necessitatibus numquam error. Obcaecati, necessitatibus alias!
          </p>

          <ArrowCard text="View our work" />
          <div className=" flex flex-col">
            <p className=" text-green-300 text-2xl font-semibold mb-5">
              Trusted By Leading Brands
            </p>
            <div className="flex flex-row justify-evenly mb-28">
              <Company img={Vector1} name="Greenish" />
              <Company img={Vector4} name="Topley" />
              <Company img={Vector3} name="Marky" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col mx-36">
          <img className="" src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Top;
