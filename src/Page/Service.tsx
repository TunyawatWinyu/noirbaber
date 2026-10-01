import Footer from "../components/HomeComponents/Footer";
import Navbar from "../components/Navbar";
import Booking from "../components/ServiceComponents/Booking";
import Cuts from "../components/ServiceComponents/Cuts";
import ServiceHero from "../components/ServiceComponents/ServiceHero";

const Service = () => {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <Cuts />
        <Booking />
        <Footer />
      </main>
    </>
  );
};

export default Service;
