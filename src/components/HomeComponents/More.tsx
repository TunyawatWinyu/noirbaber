import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import moreHero from "../../assets/img/gallery-tools.jpg";
import { SquareShare } from "reicon-react";

const More = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-main-bg px-5 py-20 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            className="h-100 w-full object-cover md:h-125 lg:h-150"
            src={moreHero}
            alt="Barber tools"
          />
        </div>

        {/* CONTENT */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          {/* TITLE */}
          <div className="flex flex-col gap-4">
            <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
              {t("home.more.label")}
            </p>

            <h1 className="font-main text-5xl tracking-widest text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              {t("home.more.title")}
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="flex max-w-xl flex-col gap-7">
            <p className="whitespace-pre-line font-secondary tracking-wide text-secondary-font">
              {t("home.more.description")}
            </p>

            <div className="h-px w-full bg-secondary-font/20" />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">8+</h3>
              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                {t("home.more.stats.years")}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">4.9</h3>
              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                {t("home.more.stats.rating")}
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">2K+</h3>
              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                {t("home.more.stats.clients")}
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            to="/about"
            className="flex w-fit items-center justify-center gap-4 border border-secondary-font px-6 py-3 font-main text-md tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
          >
            {t("home.more.button")}
            <SquareShare size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default More;
