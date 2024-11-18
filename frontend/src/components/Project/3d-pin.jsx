import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Sample data for projects with proper URLs
const PROJECTS = [
  {
    id: 1,
    title: "Project Name 1",
    description: "Description for project 1",
    // imageUrl: "/api/placeholder/400/320",
    href: "https://project1.example.com"
  },
];

/**
 * PinContainer Component
 * Creates a 3D-effect container that responds to hover interactions
 */
export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName
}) => {
  const [transform, setTransform] = useState("rotateX(0deg)");

  const onMouseEnter = () => {
    setTransform("rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("rotateX(0deg) scale(1)");
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("relative group/pin z-50 w-auto h-96 cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)"
        }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform
          }}
          className="p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </a>
  );
};

/**
 * PinPerspective Component
 * Creates the hover effect overlay with animated elements
 */
export const PinPerspective = ({
  title,
  href
}) => {
  return (
    <motion.div className="pointer-events-none w-96 h-60 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full flex-none inset-0">
        <div className="absolute inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 px-4 ring-1 ring-white/10"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40" />
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)"
          }}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%"
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: delay
              }}
              className="absolute left-1/2 top-1/2 h-[11rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};

// Example usage component showing how to display the projects
const ProjectDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {PROJECTS.map((project) => (
        <PinContainer
          key={project.id}
          title={project.title}
          href={project.href}
        >
          <div className="space-y-4">
            <div className="p-2">
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
};

export default ProjectDisplay;