import React from "react";

const Link = ({ img, title, text }) => {
  return (
    <div className="flex flex-row text-left items-center ">
      <div className="h-12 w-12 bg-black rounded-full p-2 m-2">
        <img className="  h-8 w-8 " src={img} alt="" />
      </div>

      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Link;
