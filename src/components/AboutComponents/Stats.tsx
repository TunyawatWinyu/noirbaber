import { useTranslation } from "react-i18next";
import StatsHero from "../../assets/img/gallery-studio.jpg";

const Stats = () => {
  const { t } = useTranslation();

  return (
    <section className="gap-10 px-15 pb-10 lg:pb-0">
      {/* IMAGE */}
      <div className="flex justify-center w-full lg:w-full">
        <img
          className="h-[400px] w-300 my-30 object-cover md:h-[500px] lg:h-[600px]"
          src={StatsHero}
          alt={t("about.stats.imageAlt")}
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col lg:border-t lg:border-t-secondary-font py-6">
          <p className="text-effect font-main text-5xl lg:text-7xl">8 +</p>
          <span className="font-main text-effect text-sm tracking-widest">
            {t("about.stats.years")}
          </span>
        </div>

        <div className="flex flex-col lg:border-t lg:border-t-secondary-font py-6">
          <p className="text-effect font-main text-5xl lg:text-7xl">2K +</p>
          <span className="font-main text-effect text-sm tracking-widest">
            {t("about.stats.clients")}
          </span>
        </div>

        <div className="flex flex-col lg:border-t lg:border-t-secondary-font py-6">
          <p className="text-effect font-main text-5xl lg:text-7xl">4.9</p>
          <span className="font-main text-effect text-sm tracking-widest">
            {t("about.stats.rating")}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
