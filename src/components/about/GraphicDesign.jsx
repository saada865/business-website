import React from "react";
import GraphicDesignCard from "./GraphicDesignCard";

const GraphicDesign = () => {
  return (
    <div className=" bg-[#F5F5F5] ">
      <div className="block lg:flex flex-row py-20 px-10 text-center justify-between gap-8">
        <GraphicDesignCard
          number="200+"
          title="Were a family"
          text="Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced."
        />
        <GraphicDesignCard
          number="99%"
          title="Graphic design"
          text="Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        />
        <GraphicDesignCard
          number="1.5M+"
          title="Digital marketing"
          text="Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh."
        />
      </div>
    </div>
  );
};

export default GraphicDesign;
