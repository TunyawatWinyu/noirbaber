import { Link } from "react-router-dom";
import { ArrowRightUp } from "reicon-react";
import { useTranslation } from "react-i18next";

const Booking = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full w-full border-b border-b-secondary-font/20 bg-main-bg py-30">
      <div className="flex flex-col items-center justify-center gap-8">
        <span className="font-secondary text-xs tracking-wider text-effect">
          {t("service.booking.label")}
        </span>

        <h1 className="font-main text-5xl tracking-widest text-white lg:text-9xl">
          {t("service.booking.title")}
        </h1>

        <Link
          className="flex gap-2 bg-white px-4 py-4 font-secondary text-xs font-semibold tracking-widest text-black transition-all duration-200 ease-in-out hover:bg-effect"
          to="/booking"
        >
          {t("service.booking.button")}
          <ArrowRightUp size={15} />
        </Link>
      </div>
    </section>
  );
};

export default Booking;
