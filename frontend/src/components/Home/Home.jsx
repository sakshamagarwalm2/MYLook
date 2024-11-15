import Hero from "./HomeSections/Hero";
import HomeSkill from "./HomeSections/HomeSkill";
import TimeLink from "./HomeSections/TimeLink/TimeLink";


const Home = () => {
  return (
    <div className="orbitron text-white bg-theme">
      <Hero/>
      <TimeLink/>
      <HomeSkill/>
    </div>
  );
};

export default Home;