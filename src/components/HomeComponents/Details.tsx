import { SquareShare } from "reicon-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { img_details } from "../../Data/Data";

const Details = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-third-bg py-10 lg:px-10 lg:py-40 xl:px-5 2xl:px-55 xl:py-50">
      {/* HEADER */}
      <div className="flex w-full flex-col items-center gap-4 lg:items-baseline lg:justify-between lg:px-10">
        <div className="flex flex-col items-center gap-4 lg:items-baseline">
          <p className="font-secondary text-xs font-semibold tracking-widest text-secondary-font">
            {t("home.details.label")}
          </p>

          <h1 className="font-main text-5xl tracking-widest text-white lg:text-8xl">
            {t("home.details.title")}
          </h1>
        </div>

        <Link
          to="/gallery"
          className="flex items-center gap-4 border px-6 py-4 font-secondary text-sm font-semibold tracking-widest text-white transition-all duration-200 ease-in-out hover:border-white hover:bg-white hover:text-black"
        >
          {t("home.details.button")}
          <SquareShare size={20} />
        </Link>
      </div>

      {/* GALLERY */}
      <div className="mx-5 mt-20 flex flex-col gap-3 lg:grid lg:h-[650px] lg:grid-cols-4 lg:grid-rows-2">
        {img_details.map((image) => (
          <div
            key={image.title}
            className={`group relative overflow-hidden ${image.className}`}
          >
            <img
              src={image.src}
              alt={t(`gallery.gallery.images.${image.id}.alt`)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <span className="absolute bottom-5 left-5 font-secondary text-xs font-semibold tracking-widest text-white">
              {t(`gallery.gallery.images.${image.id}.title`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
