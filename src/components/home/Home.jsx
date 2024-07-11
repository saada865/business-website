import React from "react";
import Services from "./Services";
import Top from "./Top";
import CoreMission from "./CoreMission";
import Process from "./Process";
import RecentProjects from "./RecentProjects";
import CarouselParent from "./CarouselParent";

const Home = () => {
  return (
    <div>
      <Top />
      <Services />
      <CoreMission />
      <Process />
      <RecentProjects />
      <CarouselParent />
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
