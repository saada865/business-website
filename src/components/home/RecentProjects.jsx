import React from "react";
import img30 from "../assets/img30.jpg";
import img31 from "../assets/img31.jpg";
import img32 from "../assets/img32.jpg";
import img33 from "../assets/img33.jpg";
import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
  return (
    <div className="pt-10 bg-[#F5F5F5] text-center">
      <h2 className="text-black text-5xl font-semibold">Recent Projects</h2>
      <div className="flex flex-col mt-10 mx-10">
        <div className="flex flex-row text-left justify-between">
          <ProjectCard
            image={img30}
            title="Motion Design"
            text="Animated typography"
          />
          <ProjectCard
            margin="28"
            image={img31}
            title="Product Design"
            text="Process Design"
          />
        </div>
        <div className="flex flex-row text-left justify-between ">
          <ProjectCard
            image={img32}
            title="Graphic Design"
            text="Brand identity design"
          />
          <ProjectCard
            margin="28"
            image={img33}
            title="To design a digital strategy"
            text="Business"
          />
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
