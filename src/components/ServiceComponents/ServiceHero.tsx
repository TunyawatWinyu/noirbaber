import { useTranslation } from "react-i18next";

const ServiceHero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col bg-main-bg px-15">
      <div className="flex flex-col gap-10 pt-40 pb-30 lg:flex-row lg:justify-between lg:items-end">
        <div className="flex flex-col gap-8">
          <span className="font-secondary text-xs text-effect tracking-wider">
            {t("service.serviceHero.label")}
          </span>

          <h1 className="whitespace-pre-line font-main text-5xl text-white tracking-wider lg:text-8xl">
            {t("service.serviceHero.title")}
          </h1>
        </div>

        <div className="flex w-full lg:w-100">
          <p className="font-secondary text-md text-secondary-font">
            {t("service.serviceHero.description")}
          </p>
        </div>
      </div>

      <div className="hidden h-20 border-t border-t-secondary-font/20 md:block"></div>
    </section>
  );
};

export default ServiceHero;
