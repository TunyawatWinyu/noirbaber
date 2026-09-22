import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const menu_navbar = [
    { name: "HOME", path: "/home" },
    { name: "SERVICE", path: "/service" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTATTI", path: "/contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-7 bg-main-bg transition-all ${scrolled ? "backdrop-blur-xs bg-main-bg/80 border-b border-b-secondary-font/20" : ""}`}
    >
      <div className="flex justify-around font-main items-center">
        <h1 className="text-4xl text-white tracking-widest">NOIR BABER</h1>
        <div className="">
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
        <Link
          className=" font-secondary font-semibold text-xs tracking-widest text-white border border-main-font py-2 px-4 transition duration-200 ease-in-out hover:bg-effect hover:border-effect"
          to="/booking"
        >
          BOOK NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
