import React from "react";

const Input = ({ text }) => {
  return (
    <div className="flex flex-col mx-5">
      <p className="text-lg font-semibold">{text}</p>
      <input
        type="text"
        className="bg-transparent border-b-[1px] border-black"
      />
    </div>
  );
};

export default Input;
