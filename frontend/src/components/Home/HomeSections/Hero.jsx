import ModelViewer from "../../canvas/model";
import { BackgroundBeams } from "./Backgroundbeam";
import HeroImg from "../../assets/Hero.jpg";

const Hero = () => {
  return (
    <section className='w-full h-screen text-center orbitron-100 bg-cover bg-center text-white text-2xl -z-30' style={{ backgroundImage: `url(${HeroImg})`, filter: 'brightness(0.89)' }}>
      <BackgroundBeams/>
      <div className="z-50">
      <ModelViewer/>
      </div>
    </section>
  );
};

export default Hero;