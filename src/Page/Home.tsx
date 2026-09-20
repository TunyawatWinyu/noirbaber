import Craft from "../components/Home/Craft";
import HomeHero from "../components/Home/HomeHero";
import Navbar from "../components/Navbar";
import Essential from "../components/Home/Essential";
import More from "../components/Home/More";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <Craft />
        <Essential />
        <More />
      </main>
    </>
  );
};

export default Home;
