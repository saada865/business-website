import React from "react";
import check from "../assets/check-icon.svg";

const OurMissionCard = ({ text }) => {
  return (
    <div className="flex flex-row text-left items-baseline">
      <img src={check} alt="" className=" " />
      <p className="ml-2 text-white text-lg">{text}</p>
    </div>
  );
};

export default OurMissionCard;
