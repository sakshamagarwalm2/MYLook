import React from "react";
import WavyBackground from "./wavy-background";

const About = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center orbitron bg-black flex-col">
      <div className="absolute w-full h-auto">
        <WavyBackground />
      </div>
      <div className="orbitron relative text-3xl w-full h-screen text-white font-bold flex justify-center items-center flex-col">
        About
      </div>
    </div>
  );
};

export default About;
