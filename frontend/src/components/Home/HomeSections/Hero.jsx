import ModelViewer from "../../canvas/model";
import { BackgroundBeams } from "./Backgroundbeam";
import HeroImg from "../../assets/Hero.jpg";
import Gitwindow from "../../assets/GitWindow.png";
import { Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen text-center orbitron-100 bg-cover bg-center text-white text-2xl -z-30"
      style={{ backgroundImage: `url(${HeroImg})`, filter: "brightness(0.89)" }}
    >
      <BackgroundBeams />
      <div className="z-50">
        <ModelViewer />
      </div>
      <div className="w-full h-screen pt-4">
        <div className="w-full h-auto flex justify-center md:justify-end items-center md:pr-10">
          <button className="inline-flex h-auto p-4 w-auto uppercase text-lg animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100">
            <Cpu className="w-5 h-5 mr-5" /> Explore Gyana AI
          </button>
        </div>
        <div className="w-full flex flex-row items-center justify-end gap-20 p-5 xl:justify-evenly">
          <div className="xl:w-2/3 mt-10 flex-row gap-5 bg-stone-300/10 rounded-xl hidden xl:flex">
            <img
              src={Gitwindow}
              alt="GitWindow"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="w-auto mt-10 p-4 flex flex-row  gap-5 bg-stone-300/10 rounded-xl lg:w-1/3">
            <div className="mt-5 text-end">
              <h1 className="text-white font-bold text-2xl xl:text-5xl">
                Hi, I'm <span className="text-[#915EFF]">Saksham Agarwal_</span>
              </h1>
              <p className="mt-7 text-stone-300 text-sm">
                I develop 3D visuals, user <br className="sm:block hidden" />
                interfaces and web applications
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 hidden md:block rounded-full bg-[#7034f1]" />
              <div className="w-1 sm:h-80 h-40 bg-[#7034f1] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
