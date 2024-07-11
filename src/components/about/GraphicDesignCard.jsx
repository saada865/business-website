import React from "react";

const GraphicDesignCard = ({ number, title, text }) => {
  return (
    <div className="flex flex-col space-y-3">
      <h2 className="text-5xl text-black font-semibold">{number}</h2>
      <h2 className="text-2xl text-black">{title}</h2>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default GraphicDesignCard;
