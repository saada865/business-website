import React from "react";

const Card = ({ img }) => {
  return (
    <div className=" bg-neutral-200 rounded-2xl flex flex-col text-black px-8 pb-10 text-left my-2">
      <img className=" h-20 w-20 my-10 " src={img} alt="img" />
      <h2 className=" text-xl mb-2">Content Marketing</h2>
      <p className="text-sm">
        Our team creates engaging and shareable content that resonates with your
        audience, drives organic traffic
      </p>
    </div>
  );
};

export default Card;
