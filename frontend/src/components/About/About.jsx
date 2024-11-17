import React from "react";
import WavyBackground from "./wavy-background";
import AboutCards from "./AboutCards";

const About = () => {
  return (
    <div className="w-full h-full flex justify-center items-center orbitron flex-col">
      <div className="fixed -z-10 w-full h-full top-0 ">
        <WavyBackground />
      </div>
      <div className="orbitron w-full h-full text-white flex justify-center items-center flex-col bg-dot-white/[0.2]">
        <AboutCards/>
      </div>
    </div>
  );
};

export default About;
