import Navbar from "../components/Navbar";
import GalleryHero from "../components/GalleryComponents/GalleryHero";
import GalleryImage from "../components/GalleryComponents/GalleryImage";
import Booking from "../components/ServiceComponents/Booking";
import Footer from "../components/HomeComponents/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <main>
        <GalleryHero />
        <GalleryImage />
        <Booking />
        <Footer />
      </main>
    </>
  );
};

export default Gallery;
