import { ArrowRightUp } from "reicon-react";
import { useTranslation } from "react-i18next";
import { typeCuts } from "../../Data/Data";

const Cuts = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-main-bg px-15">
      {typeCuts.map((type) => (
        <div
          key={type.id}
          className="flex flex-col border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 py-20 lg:flex-row lg:justify-between"
        >
          {/* CATEGORY */}
          <div className="flex flex-col items-center gap-4 lg:items-baseline">
            <span className="font-secondary text-xs font-semibold tracking-widest text-effect">
              0{type.id}
            </span>

            <h2 className="font-main text-4xl text-white">
              {t(type.translationKey)}
            </h2>
          </div>

          {/* SERVICES */}
          <div>
            {type.cuts.map((cut) => (
              <div
                key={`${type.id}-${cut.id}`}
                className="mt-5 grid w-full grid-cols-1 items-center gap-6 border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 py-6 md:grid-cols-[minmax(220px,1fr)_minmax(250px,1.5fr)_100px] md:gap-10 lg:mt-0"
              >
                {/* NAME */}
                <div className="min-w-0">
                  <p className="font-main text-2xl text-white tracking-widest">
                    {t(`service.cuts.services.${type.id}.${cut.id}.name`)}
                  </p>
                </div>

                {/* DESCRIPTION */}
                <div className="min-w-0">
                  <p className="font-secondary text-sm text-secondary-font">
                    {t(
                      `service.cuts.services.${type.id}.${cut.id}.description`,
                    )}
                  </p>
                </div>

                {/* PRICE AND TIME */}
                <div className="flex items-center justify-between gap-6 md:justify-self-end">
                  <div className="flex flex-col">
                    <span className="font-main text-3xl text-white">
                      €{cut.price}
                    </span>

                    <span className="font-secondary text-xs text-secondary-font">
                      {cut.time} {t("service.cuts.minutes")}
                    </span>
                  </div>

                  <ArrowRightUp className="text-white" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cuts;
