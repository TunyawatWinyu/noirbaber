import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactComponents/ContactHero";
import ContactInfo from "../components/ContactComponents/ContectInfo";
import ContactForm from "../components/ContactComponents/ContactForm";
import Footer from "../components/HomeComponents/Footer";
import VisitUs from "../components/HomeComponents/VisitUs";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <ContactInfo />
          <ContactForm />
        </div>
        <VisitUs />
        <Footer />
      </main>
    </>
  );
};

export default Contact;
