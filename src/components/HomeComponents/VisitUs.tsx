import { Link } from "react-router-dom";
import { ArrowRight5 } from "reicon-react";
import { useTranslation } from "react-i18next";

const VisitUs = () => {
  const { t } = useTranslation();

  return (
    <section className="h-full w-full border-b border-b-secondary-font/20 bg-main-bg px-10 py-30">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="flex flex-col">
          {/* HEADER */}
          <div className="flex flex-col gap-4">
            <span className="font-secondary text-xs tracking-wider text-effect">
              {t("home.visitUs.label")}
            </span>

            <h1 className="font-main text-5xl tracking-wider text-white lg:text-8xl">
              {t("home.visitUs.title")}
            </h1>
          </div>

          {/* DIVIDER */}
          <div className="my-10 h-px w-full max-w-[600px] bg-secondary-bg lg:my-15" />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-15 lg:flex-row lg:justify-between lg:gap-0">
              {/* ADDRESS */}
              <div className="flex flex-col gap-4">
                <p className="font-secondary text-sm font-semibold tracking-widest text-white">
                  {t("home.visitUs.address.label")}
                </p>

                <span className="font-secondary text-sm tracking-wider text-secondary-font">
                  {t("home.visitUs.address.street")}
                </span>

                <span className="font-secondary text-sm tracking-wider text-secondary-font">
                  {t("home.visitUs.address.city")}
                </span>
              </div>

              {/* OPENING HOURS */}
              <div className="flex flex-col gap-4">
                <p className="font-secondary text-sm font-semibold tracking-widest text-white">
                  {t("home.visitUs.openingHours.label")}
                </p>

                <span className="font-secondary text-sm tracking-wider text-secondary-font">
                  {t("home.visitUs.openingHours.weekdays")}
                </span>

                <span className="font-secondary text-sm tracking-wider text-secondary-font">
                  {t("home.visitUs.openingHours.saturday")}
                </span>

                <span className="font-secondary text-sm tracking-wider text-secondary-font">
                  {t("home.visitUs.openingHours.sunday")}
                </span>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <Link
                className="flex w-50 items-center gap-4 border bg-white px-5 py-3 font-secondary text-sm tracking-widest text-black transition-all duration-200 ease-in-out hover:bg-effect hover:text-black"
                to="/get"
              >
                {t("home.visitUs.buttons.directions")}
                <ArrowRight5 size={20} />
              </Link>

              <Link
                className="flex w-50 items-center gap-4 border px-5 py-3 font-secondary text-sm tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
                to="/contatti"
              >
                {t("home.visitUs.buttons.contact")}
                <ArrowRight5 size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="h-[450px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11841.79981430501!2d9.2298137927498!3d45.5295000218314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1790377887119!5m2!1sit!2sit"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps - Barber shop location"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
