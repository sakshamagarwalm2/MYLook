import React from "react";

import { Spotlight } from "./Spotlight";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="h-full w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 orbitron"
        fill="white"
      />
      <div className=" h-full mx-auto relative z-10  w-full orbitron mt-20 flex justify-center items-center flex-col">
        <h1 className="text-4xl md:text-7xl mb-5 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Recks <br /> the new trend_
        </h1>
        <p className="mt-8 font-normal text-sm text-neutral-300 max-w-xl text-center gap-3 ">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className="h-full w-full">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Project;
