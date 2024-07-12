import React from "react";
import img20 from "../assets/img20.svg";
import img21 from "../assets/img21.svg";
import img22 from "../assets/img22.svg";
import img23 from "../assets/img23.svg";

import ProcessCard from "./ProcessCard";

const Process = () => {
  return (
    <div className="pt-10 bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="">
          <p className="text-green-500 font-semibold text-3xl my-8">Process</p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black">
            The process that moves things forward
          </h2>
        </div>
        <div className="block lg:flex flex-row mx-5 my-20">
          <ProcessCard
            image={img20}
            title="Ideate"
            text="The ideation process is a crucial phase in the design process where creative thinking and brainstorming"
          />
          <ProcessCard
            image={img21}
            title="Research"
            text="Research is a critical component of the design process, helping designers understand the problem"
          />
          <ProcessCard
            image={img22}
            title="Create"
            text="Designing a process involves several key steps to ensure clarity, efficiency, successful implementation"
          />
          <ProcessCard
            image={img23}
            title="Testing"
            text="Testing is a crucial phase in the design process to ensure that the product or system meets the specified requirements"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
