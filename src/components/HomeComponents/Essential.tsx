import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Service = {
  number: string;
  title: string;
  description: string;
  price: string;
};

const Essential = () => {
  const { t } = useTranslation();

  const services = t("home.essential.cards", {
    returnObjects: true,
  }) as Service[];

  return (
    <section className="flex flex-col gap-8 bg-secondary-font/20 px-10 py-20 xl:px-5 2xl:px-45">
      <div className="mx-10 flex flex-col justify-center gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-col justify-end gap-4">
          <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
            {t("home.essential.label")}
          </p>

          <h2 className="font-main text-5xl font-black tracking-widest lg:text-8xl">
            {t("home.essential.title")}
          </h2>
        </div>

        <p className="w-full font-secondary text-gray-600 lg:w-100">
          {t("home.essential.description")}
        </p>
      </div>

      <div className="mx-5 flex flex-col gap-4 lg:mx-10 lg:flex-row">
        {services.map((service) => (
          <article
            key={service.number}
            className="flex min-h-50 w-full flex-col gap-5 border border-gray-600/25 p-8 lg:w-100"
          >
            <span className="font-main text-5xl text-effect/35">
              {service.number}
            </span>

            <div className="mt-auto flex flex-col gap-4">
              <h3 className="font-main text-4xl text-black">{service.title}</h3>

              <p className="font-secondary text-sm text-gray-600">
                {service.description}
              </p>

              <span className="font-secondary text-xs font-semibold tracking-widest text-black">
                {service.price}
              </span>
            </div>
          </article>
        ))}
      </div>

      <Link
        to="/service"
        className="mx-5 flex w-60 items-center justify-center gap-4 border px-3 py-3 font-main text-xl tracking-widest transition-all duration-200 ease-in-out hover:bg-effect lg:mx-10 xl:border-none"
      >
        {t("home.essential.button")}
        <SquareShare size={15} />
      </Link>
    </section>
  );
};

export default Essential;
