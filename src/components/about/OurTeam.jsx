import React from "react";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <div className=" bg-[#F5F5F5] text-black py-20 px-10">
      <div className="flex flex-col text-center ">
        <h2 className="text-5xl font-semibold">Our team</h2>
        <div className="flex flex-row mt-20 justify-between">
          <OurTeamCard
            img={team1}
            title="Esther Howards"
            text="Founder & CEO"
          />
          <OurTeamCard
            img={team2}
            title="Cameron Williamson"
            text="Marketing head"
          />
          <OurTeamCard
            img={team3}
            title="Liam Cooper"
            text="Director of human resources"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
