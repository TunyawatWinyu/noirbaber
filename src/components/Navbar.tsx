import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { menu_navbar } from "../Data/Data";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const navbarText = isHomePage && !scrolled ? "text-white" : "text-black";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Chiudi il menu quando cambi pagina
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-7 bg-main-bg transition-all ${scrolled ? "backdrop-blur-xs bg-main-bg/80 border-b border-b-secondary-font/20" : ""}`}
    >
      <div className="flex w-full min-w-0 justify-between font-main items-center px-5 lg:px-15">
        <h1 className="text-4xl text-white tracking-widest">NOIR BABER</h1>
        <div className="hidden md:flex">
          {/* Desktop navbar */}
          <ul className="flex justify-between gap-8 font-secondary font-semibold text-xs text-secondary-font tracking-widest ">
            {menu_navbar.map((el) => {
              return (
                <li>
                  <NavLink
                    to={el.path}
                    className={({ isActive }) =>
                      `transition-all duration-200 ease-in-out hover:text-white ${isActive ? "text-white" : "text-secondary-font"}`
                    }
                  >
                    {el.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* BOOKING DESKTOP */}
        <Link
          className=" hidden md:block font-secondary font-semibold text-xs tracking-widest text-white border border-main-font py-2 px-4 transition duration-200 ease-in-out hover:bg-effect hover:border-effect"
          to="/booking"
        >
          BOOK NOW
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${navbarText}`}
          aria-label="Apri menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className={`px-6 pb-6 pt-4 text-white`}>
          <ul className="flex flex-col gap-5">
            {menu_navbar.map((el) => (
              <li key={el.name}>
                <NavLink
                  to={el.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `tracking-widest text-sm font-semibold ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {el.name}
                </NavLink>
              </li>
            ))}

            {/* PRENOTAZIONE MOBILE */}
            <li className="pt-2">
              <Link
                to="/prenotazione"
                onClick={() => setIsOpen(false)}
                className={`inline-block tracking-widest text-sm px-6 py-3 font-semibold bg-effect`}
              >
                PRENOTA UN TAVOLO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
