import React from "react";

const OurTeamCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col text-left">
      <div className=" bg-opacity-100 ">
        <img className=" h-96 w-96 rounded-2xl object-cover" src={img} alt="" />
      </div>
      <h2 className="text-2xl py-2 font-semibold">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default OurTeamCard;
