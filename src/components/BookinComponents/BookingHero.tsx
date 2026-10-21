import { useTranslation } from "react-i18next";

const BookingHero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-main-bg px-4 sm:px-6 lg:px-10 py-30 sm:py-24 lg:py-32 border-b border-b-secondary-font/20">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-end">
        {/* Titolo */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            {t("booking.hero.label")}
          </span>

          <h1 className="font-main text-white text-4xl sm:text-6xl lg:text-8xl tracking-widest leading-tight">
            {t("booking.hero.titleLine1")}
            <br />
            {t("booking.hero.titleLine2")}
          </h1>
        </div>

        {/* Descrizione */}
        <div className="flex justify-center lg:justify-end w-full lg:max-w-sm">
          <p className="font-secondary text-secondary-font text-sm sm:text-base leading-relaxed text-center lg:text-left">
            {t("booking.hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingHero;
