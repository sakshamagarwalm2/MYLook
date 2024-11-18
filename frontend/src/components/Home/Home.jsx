import Hero from "./HomeSections/Hero";
import HomeSkill from "./HomeSections/HomeSkill";
import ProjectHome from "./HomeSections/ProjectHome";
import TimeLink from "./HomeSections/TimeLink/TimeLink";


const Home = () => {
  return (
    <div className="orbitron text-white bg-theme">
      {/* <Hero/> */}
      <TimeLink/>
      {/* <HomeSkill/> */}
      {/* <ProjectHome/> */}
    </div>
  );
};

export default Home;