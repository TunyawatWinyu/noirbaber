import { useState } from "react";
import { Star } from "reicon-react";

const reviews = [
  {
    id: 1,
    name: "Luca Bianchi",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Esperienza fantastica. Ambiente elegante e personale molto professionale.",
  },
  {
    id: 2,
    name: "Marco Rossi",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Finalmente ho trovato il mio barbiere di fiducia. Grande attenzione ai dettagli.",
  },
  {
    id: 3,
    name: "Andrea Moretti",
    rating: 4,
    ratingText: "Very Good",
    review:
      "Locale davvero curato e atmosfera piacevole. Il taglio è stato fatto con grande precisione.",
  },
  {
    id: 4,
    name: "Davide Romano",
    rating: 5,
    ratingText: "Excellent",
    review: "Servizio eccellente dall'inizio alla fine. Tornerò sicuramente.",
  },
  {
    id: 5,
    name: "Matteo Ferri",
    rating: 5,
    ratingText: "Excellent",
    review:
      "Qualità, professionalità e attenzione ai dettagli. Consigliatissimo.",
  },
];
const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-main-bg h-full w-full py-30">
      <div className="flex flex-col gap-8 justify-center items-center">
        <span className="font-secondary text-xs text-effect tracking-wider">
          CLIENT NOTES
        </span>
        <div className="flex flex-col items-center">
          {/* CARD */}

          <div className="flex flex-col gap-4 mt-4 text-center w-200">
            <h3 className="text-6xl text-white font-main tracking-widest">{`"${reviews[currentIndex].review}"`}</h3>

            <div className="flex justify-center items-center gap-1 mt-4">
              {Array.from({ length: reviews[currentIndex].rating }).map(
                (_, index) => (
                  <Star
                    weight="Filled"
                    key={index}
                    className="text-primary text-effect"
                    size={16}
                  />
                ),
              )}
            </div>

            <p className="text-secondary-font font-secondary tracking-widest">
              {reviews[currentIndex].name}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              className="border border-secondary-font px-6 py-3 text-white transition-colors hover:text-effect hover:border-effect"
            >
              ←
            </button>

            <button
              onClick={next}
              className="border border-secondary-font px-6 py-3 text-white transition-colors hover:text-effect hover:border-effect"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
