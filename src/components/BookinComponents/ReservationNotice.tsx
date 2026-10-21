import { useTranslation } from "react-i18next";

const ReservationNotice = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-4 items-center lg:items-baseline w-80">
        <p className="font-main text-white tracking-widest text-sm sm:text-base">
          {t("booking.info.label")}
        </p>

        <span className="font-secondary text-center lg:text-start text-secondary-font text-sm sm:text-base leading-relaxed">
          {t("booking.info.description")}
        </span>
      </div>
    </div>
  );
};

export default ReservationNotice;
