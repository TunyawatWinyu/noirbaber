import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { menu_navbar } from "../../Data/Data";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col gap-15 bg-main-bg px-10 py-20 lg:flex-row lg:justify-between lg:gap-0">
      {/* BRAND */}
      <div className="flex flex-col">
        <a className="my-4 cursor-pointer font-main text-4xl tracking-widest text-white">
          NOIRBABER
        </a>

        <span className="flex flex-col whitespace-pre-line font-secondary text-sm text-secondary-font">
          {t("home.footer.description")}
        </span>
      </div>

      {/* NAVIGATION */}
      <div>
        <h3 className="my-4 cursor-pointer font-secondary text-xs font-semibold tracking-widest text-white">
          {t("home.footer.navigate")}
        </h3>

        <div>
          {menu_navbar.map((el) => (
            <li
              className="my-4 list-none cursor-pointer font-secondary font-semibold text-secondary-font transition duration-200 ease-in-out hover:text-white"
              key={el.path}
            >
              <NavLink to={el.path} className="text-xs">
                {t(el.translationKey)}
              </NavLink>
            </li>
          ))}
        </div>
      </div>

      {/* VISIT */}
      <div>
        <h3 className="my-4 cursor-pointer font-main text-xs tracking-widest text-white">
          {t("home.footer.visit")}
        </h3>

        <div className="flex flex-col">
          <a
            href="https://maps.app.goo.gl/UenA8PFfYnPLQBDu7"
            className="cursor-pointer font-secondary text-xs font-semibold text-secondary-font transition hover:text-primary"
          >
            {t("home.footer.address")}
          </a>

          <a
            href="tel:+390212345678"
            className="mt-4 font-secondary text-xs font-semibold text-secondary-font transition hover:text-primary"
          >
            +39 02 1234 5678
          </a>

          <a
            href="mailto:info@osteriamilano.it"
            className="mt-4 font-secondary text-xs font-semibold text-secondary-font transition hover:text-primary"
          >
            info@osteriamilano.it
          </a>
        </div>
      </div>

      {/* HOURS */}
      <div>
        <h3 className="my-4 font-secondary text-xs font-semibold tracking-widest text-white">
          {t("home.visitUs.openingHours.label")}
        </h3>

        <div className="flex flex-col">
          <span className="whitespace-pre-line font-secondary text-xs tracking-wider text-secondary-font">
            {t("home.footer.hours.weekdays")}
          </span>

          <span className="whitespace-pre-line mt-4 font-secondary text-xs tracking-wider text-secondary-font">
            {t("home.footer.hours.saturday")}
          </span>

          <span className="mt-4 font-secondary text-xs tracking-wider text-secondary-font">
            {t("home.footer.hours.sunday")}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
