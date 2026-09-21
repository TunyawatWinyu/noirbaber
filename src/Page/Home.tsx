import Craft from "../components/Home/Craft";
import HomeHero from "../components/Home/HomeHero";
import Navbar from "../components/Navbar";
import Essential from "../components/Home/Essential";
import More from "../components/Home/More";
import Details from "../components/Home/Details";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <Craft />
        <Essential />
        <More />
        <Details />
      </main>
    </>
  );
};

export default Home;
