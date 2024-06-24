import React from "react";

const Company = ({ img }) => {
  return (
    <div className=" flex flex-row items-center">
      <img className=" w-4 h-4" src={img} alt="" />
      <p className=" mx-1 text-sm font-mono">Greenish</p>
    </div>
  );
};

export default Company;
