import ModelViewer from "../../canvas/model";
import { BackgroundBeams } from "./Backgroundbeam";
import HeroImg from "../../assets/Hero.jpg";
import Gitwindow from "../../assets/GitWindow.png";
import Sakshamglitch from "../../assets/Saksham_Glitch.png";
import { Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="w-full h-screen text-center orbitron-100 bg-cover bg-center text-white text-2xl -z-30 shadow-inner"
      style={{ backgroundImage: `url(${HeroImg})`, filter: "brightness(0.89)" }}
    >
      <BackgroundBeams />
      <div className="z-50"> 
        <ModelViewer />
      </div>
      <div className="w-full h-screen md:pt-4 overflow-hidden">
        <div className="w-full h-auto  bg-stone-300/10 md:bg-transparent flex justify-center md:justify-end items-center md:pr-10 ">
          <a href="https://gyana-ai.vercel.app/" target="_blank" className="z-[1000] inline-flex h-auto p-4 w-auto uppercase text-lg invisible md:visible animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100">
            <Cpu className="w-5 h-5 mr-5" /> Explore Gyana AI
          </a>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-around p-5 overflow-hidden">
          <div className="w-full md:h-full">
            <img
              src={Sakshamglitch}
              alt="GitWindow"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="md:w-2/3 w-full p-5 flex-row gap-5 bg-stone-300/10 rounded-xl flex">
            <img
              src={Gitwindow}
              alt="GitWindow"
              className="w-full rounded-3xl"
            />
          </div>
          <div className="w-full h-auto flex justify-center items-center md:hidden  ">
            <a href="https://gyana-ai.vercel.app/" target="_blank" className="z-[1000] inline-flex h-auto p-4 w-auto uppercase text-lg md:invisible visible animate-shimmer items-center justify-center rounded-xl border-2 border-slate-400 focus:border-slate-200 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-white transition-colors focus:text-slate-100">
            <Cpu className="w-5 h-5 mr-5" /> Explore Gyana AI
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
