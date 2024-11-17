import React from "react";

import { PinContainer } from "./3d-pin";

const ProjectCard = () => {
  const dummyProjects = Array.from({ length: 10 }, (_, index) => ({
    title: `Project ${index + 1}`,
    href: `https://example.com/project${index + 1}`,
    name: `Project Name ${index + 1}`,
    description: `Description for project ${index + 1}`
  }));

  return (
    <div className="h-full w-full flex items-center justify-center flex-row flex-wrap mt-10 gap-5 ">
      {dummyProjects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={project.href}
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              {project.name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                {project.description}
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      ))}
    </div>
  );
};

export default ProjectCard;
