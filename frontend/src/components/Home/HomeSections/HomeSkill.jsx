import React from "react";
import { AuroraBackground } from "./AuroBackground";
import { IconCloudDemo } from "./Skills/IconSlug";
import SkillsCard from "./Skills/SkillsCard";

const HomeSkill = () => {
  return (
    <div className="w-full h-full bg-zinc-900 ">
      <div className="w-full h-full absolute">
        <AuroraBackground />
      </div>
      <div className="w-full h-full relative flex flex-col justify-around  items-center text-white">
        <div className="w-full orditron text-4xl relative pt-5 text-center mb-10">
          Skills.
        </div>
        <div className="w-full flex justify-evenly items-center lg:flex-row flex-col p-2">
          <div className="mt-5 mb-5 flex justify-center items-center flex-col">
            <SkillsCard />
          </div>
          <div className="flex justify-center items-center">
            <IconCloudDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkill;
