import Craft from "../components/Home/Craft";
import HomeHero from "../components/Home/HomeHero";
import Service from "../components/Home/Service";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <Craft />
        <Service />
      </main>
    </>
  );
};

export default Home;
