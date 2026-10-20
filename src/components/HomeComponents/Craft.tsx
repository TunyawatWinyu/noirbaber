import craftHero from "../../assets/img/craft-hands.jpg";
import { useTranslation } from "react-i18next";
const Craft = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col lg:justify-between lg:flex-row lg:items-center gap-7 bg-main-bg py-9 px-9 lg:px-10 xl:px-5 2xl:px-55">
      <p className="font-secondary text-effect text-xs tracking-widest font-semibold">
        {t("home.craft.label")}
      </p>
      <h3 className="font-main text-white text-5xl">{t("home.craft.title")}</h3>
      <div className="relative">
        <img
          src={craftHero}
          className="h-45 w-100 object-cover"
          alt="Cucina italiana"
        />
      </div>
    </div>
  );
};

export default Craft;
