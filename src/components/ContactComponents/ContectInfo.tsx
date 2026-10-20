import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col md:flex-row md:justify-between lg:flex-col lg:items-baseline gap-15 px-10 py-10 lg:py-30 lg:w-120 bg-main-bg">
      {/* ADDRESS */}
      <div className="flex flex-col">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          {t("contact.info.address")}
        </p>

        <span className="font-secondary text-sm text-secondary-font">
          Via Example 24, Milano, Italy
        </span>
      </div>

      {/* CONTACT */}
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          {t("contact.info.contact")}
        </p>

        <span className="font-secondary text-sm text-secondary-font">
          +39 02 0000 0000
        </span>

        <span className="font-secondary text-sm text-secondary-font">
          studio@noirbarber.it
        </span>
      </div>

      {/* OPENING HOURS */}
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          {t("contact.info.hours")}
        </p>

        <span className="font-secondary text-sm text-secondary-font">
          {t("contact.info.weekdays")} <br />
          09:00 — 19:30
        </span>

        <span className="font-secondary text-sm text-secondary-font">
          {t("contact.info.saturday")} <br />
          09:00 — 18:00
        </span>

        <span className="font-secondary text-sm text-secondary-font">
          {t("contact.info.sunday")}
        </span>
      </div>
    </section>
  );
};

export default ContactInfo;
