import Navbar from "../components/Navbar";
import Cuts from "../components/ServiceComponents/Cuts";
import ServiceHero from "../components/ServiceComponents/ServiceHero";

const Service = () => {
  return (
    <>
      <Navbar />
      <main>
        <ServiceHero />
        <Cuts />
      </main>
    </>
  );
};

export default Service;
