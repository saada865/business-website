import React from "react";
import Services from "./Services";
import Top from "./Top";
import CoreMission from "./CoreMission";
import Process from "./Process";
import RecentProjects from "./RecentProjects";

const Home = () => {
  return (
    <div>
      <Top />
      <Services />
      <CoreMission />
      <Process />
      <RecentProjects />
    </div>
  );
};

export default Home;
