import React from "react";

const ProcessCard = ({ image, title, text }) => {
  return (
    <div className="flex flex-col text-black mx-5">
      <div className="flex flex-row mb-10 items-center">
        <div className="  rounded-full p-4 bg-black ">
          <img src={image} className="h-10 w-10  " alt="img20" />
        </div>

        <h2 className=" ml-5 text-3xl font-semibold">{title}</h2>
      </div>
      <p className="text-md text-left">{text}</p>
    </div>
  );
};

export default ProcessCard;
