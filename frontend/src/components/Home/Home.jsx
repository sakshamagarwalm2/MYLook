import Hero from "./HomeSections/Hero";
import TimeLink from "./HomeSections/TimeLink/TimeLink";


const Home = () => {
  return (
    <div className="bg-slate-900 orbitron text-white">
      <Hero/>
      <TimeLink/>
    </div>
  );
};

export default Home;