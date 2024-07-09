import React from "react";

const ProjectCard = ({ image, title, text, margin }) => {
  return (
    <div className={`mt-${margin}`}>
      <a href="#">
        <img src={image} alt="" className="rounded-2xl " />
      </a>

      <h3 className="font-semibold text-3xl mt-5">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ProjectCard;
