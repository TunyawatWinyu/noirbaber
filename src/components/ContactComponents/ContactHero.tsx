import { useTranslation } from "react-i18next";

const ContactHero = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-main-bg px-15 py-50 border-b border-b-secondary-font/20">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center lg:items-baseline gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            {t("contact.hero.label")}
          </span>

          <h1 className="font-main text-white text-6xl lg:text-9xl tracking-widest">
            {t("contact.hero.titleLine1")}
            <br />
            {t("contact.hero.titleLine2")}
          </h1>
        </div>

        <div className="flex justify-center items-center lg:items-end-safe w-full lg:w-100">
          <p className="font-secondary text-secondary-font">
            {t("contact.hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
