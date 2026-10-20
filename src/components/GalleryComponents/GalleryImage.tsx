import { useTranslation } from "react-i18next";
import { img_details } from "../../Data/Data";

const GalleryImage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-10 py-40 flex flex-col h-full xl:h-[650px] xl:grid xl:grid-cols-4 xl:grid-rows-2 gap-3 bg-main-bg border border-b-secondary-font/20">
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
  );
};

export default GalleryImage;
