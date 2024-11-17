import React from "react";
import { ContainerScroll } from "./Project/container-scroll-animation";
import Scrolimg from "../../assets/ScrolPicTab.png";

const ProjectHome = () => {
  return (
    <div className="bg-light w-full h-full bg-grid-small-black/[0.2] rounded-3xl text-black border-8 border-stone-300 mt-0 lg:mt-28 flex justify-center items-center flex-col">
      <div className="text-3xl font-bold pt-5">
        Check My projects
      </div>
      <div className="w-full h-full pt-3 md:pt-0">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-3xl font-normal text-black">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={Scrolimg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-center h-full"
          draggable={false}
        />
      </ContainerScroll>
      </div>
      
      <div className="flex justify-center items-center pb-5">
        <a href="/project" className="inline-flex h-auto p-4 w-[20rem] uppercase text-xl flex-wrap animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100">
          Projects Of Creation
        </a>
      </div>
    </div>
  );
};

export default ProjectHome;
