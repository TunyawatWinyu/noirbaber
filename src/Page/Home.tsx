import Craft from "../components/HomeComponents/Craft";
import HomeHero from "../components/HomeComponents/HomeHero";
import Navbar from "../components/Navbar";
import Essential from "../components/HomeComponents/Essential";
import More from "../components/HomeComponents/More";
import Details from "../components/HomeComponents/Details";
import Team from "../components/HomeComponents/Team";
import CustomerReview from "../components/HomeComponents/CustomerReview";
import VisitUs from "../components/HomeComponents/VisitUs";
import Footer from "../components/HomeComponents/Footer";

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
        <VisitUs />
        <Footer />
      </main>
    </>
  );
};

export default Home;
