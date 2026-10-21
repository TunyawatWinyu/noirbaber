import Navbar from "../components/Navbar";
import BookingHero from "../components/BookinComponents/BookingHero";
import ReservationNotice from "../components/BookinComponents/ReservationNotice";
import ReservationForm from "../components/BookinComponents/ReservationForm";
import Footer from "../components/HomeComponents/Footer";

const Booking = () => {
  return (
    <section>
      <Navbar />
      <main>
        <BookingHero />
        <div className="border-b border-secondary-font/20 flex flex-col lg:flex-row lg:justify-around bg-main-bg py-20">
          <ReservationNotice />
          <ReservationForm />
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Booking;
