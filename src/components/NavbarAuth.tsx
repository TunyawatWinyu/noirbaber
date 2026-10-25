import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavbarAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { i18n } = useTranslation();
  const translate = (lang: string) => {
    setIsLoading(true);

    setTimeout(async () => {
      await i18n.changeLanguage(lang.toLowerCase());
      setIsLoading(false);
    }, 200);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-7 bg-main-bg transition-all">
      <div className="flex w-full min-w-0 justify-between font-main items-center px-5 lg:px-15">
        <h1 className="text-2xl lg:text-4xl text-white tracking-widest">
          NOIR BABER
        </h1>
        <div>
          <ul className="flex items-center gap-5 lg:gap-10` font-secondary tracking-widest text-xs text-white">
            {["IT", "EN"].map((lang) => (
              <li key={lang}>
                <button
                  onClick={() => translate(lang)}
                  disabled={isLoading}
                  className={`py-2 px-4 lg:py-4 lg:px-6 cursor-pointer transition-all duration-200
                    hover:bg-white hover:text-black
                    ${
                      i18n.language?.startsWith(lang.toLowerCase())
                        ? "border-b-2 border-effect"
                        : "border-b-2 border-transparent"
                    }`}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAuth;
