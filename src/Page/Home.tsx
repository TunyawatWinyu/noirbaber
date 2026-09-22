import Craft from "../components/Home/Craft";
import HomeHero from "../components/Home/HomeHero";
import Navbar from "../components/Navbar";
import Essential from "../components/Home/Essential";
import More from "../components/Home/More";
import Details from "../components/Home/Details";
import Team from "../components/Home/Team";
import CustomerReview from "../components/Home/CustomerReview";

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
        <Team />
        <CustomerReview />
      </main>
    </>
  );
};

export default Home;
