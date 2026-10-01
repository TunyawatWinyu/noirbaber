import AboutHero from "../components/AboutComponents/AboutHero";
import Philosophy from "../components/AboutComponents/Philosophy";
import Stats from "../components/AboutComponents/Stats";
import Team from "../components/AboutComponents/Team";
import Footer from "../components/HomeComponents/Footer";
import Navbar from "../components/Navbar";
import Booking from "../components/ServiceComponents/Booking";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <Philosophy />
        <Stats />
        <Team />
        <Booking />
        <Footer />
      </main>
    </>
  );
};

export default About;
