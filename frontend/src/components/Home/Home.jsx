import ModelViewer from "../canvas/model";

const Hero = () => {
  return (
    <section className='w-full h-screen text-center orbitron-100 bg-gray-900 text-white text-2xl -z-30'>
      Home
      <div className="z-50">
      <ModelViewer/>
      </div>
    </section>
  );
};

export default Hero;