import { useState } from "react";
import { Star } from "reicon-react";
import { useTranslation } from "react-i18next";
import { reviews } from "../../Data/Data";

const CustomerReview = () => {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = reviews[currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="h-full w-full border-b border-b-secondary-font/20 bg-main-bg py-30">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="font-secondary text-xs tracking-wider text-effect">
          {t("home.customerReview.label")}
        </span>

        {/* REVIEW */}
        <div className="flex flex-col items-center">
          <div className="mt-4 flex w-full flex-col gap-4 px-10 text-center lg:w-200 lg:px-0">
            <h3 className="font-main text-3xl tracking-widest text-white lg:text-6xl">
              {`"${t(`home.customerReview.reviews.${currentReview.id}`)}"`}
            </h3>

            {/* STARS */}
            <div className="mt-4 flex items-center justify-center gap-1">
              {Array.from({ length: currentReview.rating }).map((_, index) => (
                <Star
                  weight="Filled"
                  key={index}
                  className="text-primary text-effect"
                  size={16}
                />
              ))}
            </div>

            {/* RATING TEXT */}
            <p className="font-secondary tracking-widest text-effect">
              {currentReview.rating === 5
                ? t("home.customerReview.rating.excellent")
                : t("home.customerReview.rating.veryGood")}
            </p>

            {/* CUSTOMER NAME */}
            <p className="font-secondary tracking-widest text-secondary-font">
              {currentReview.name}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="border border-secondary-font px-6 py-3 text-white transition-colors hover:border-effect hover:text-effect"
            >
              ←
            </button>

            <button
              onClick={next}
              aria-label="Next review"
              className="border border-secondary-font px-6 py-3 text-white transition-colors hover:border-effect hover:text-effect"
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
