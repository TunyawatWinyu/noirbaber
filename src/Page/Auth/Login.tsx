import { useTranslation } from "react-i18next";
import NavbarAuth from "../../components/NavbarAuth";

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <NavbarAuth />

      <div className="bg-main-bg flex justify-center items-center px-4 py-16 sm:py-24 lg:py-30">
        <div className="flex flex-col justify-center gap-4 bg-main-bg w-full max-w-md min-h-128 border border-secondary-font/20 px-6 sm:px-10 py-8">
          <p className="font-secondary text-xs tracking-widest font-semibold text-effect">
            {t("login.adminLabel")}
          </p>

          <h3 className="text-4xl sm:text-5xl font-main text-white tracking-wider">
            {t("login.title")}
          </h3>

          <span className="font-secondary text-secondary-font tracking-wider text-sm">
            {t("login.description")}
          </span>

          <form className="flex flex-col gap-4 text-white">
            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                {t("login.email")}
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-lg font-main text-white tracking-wider">
                {t("login.password")}
              </span>

              <input
                className="bg-transparent border-b border-secondary-font/20 px-2 py-2 outline-none focus:border-effect"
                type="password"
                name="password"
                autoComplete="current-password"
                required
              />
            </label>

            <button
              className="bg-white py-3 mt-2 text-black transition-all duration-200 cursor-pointer hover:bg-effect hover:text-white "
              type="submit"
            >
              <span className="font-secondary tracking-wider text-xs font-semibold">
                {t("login.submit")}
              </span>
            </button>
          </form>

          <a
            href="/register"
            className="font-secondary text-sm tracking-wider text-secondary-font underline cursor-pointer transition-all duration-200 hover:text-white"
          >
            {t("login.registerPrompt")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
