import { NavLink } from "react-router-dom";
import { Mailbox, Phone, Pin } from "reicon-react";
const Footer = () => {
  const menu_navbar = [
    { name: "HOME", path: "/home" },
    { name: "SERVICE", path: "/service" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTATTI", path: "/contatti" },
  ];
  return (
    <footer className="flex justify-between py-20 px-10 bg-main-bg">
      <div className="flex flex-col">
        <a className="font-main text-4xl text-white tracking-widest cursor-pointer my-4">
          NOIRBABER
        </a>
        <span className="font-secondary text-secondary-font text-sm flex flex-col">
          Modern grooming. <br /> Timeless style.
        </span>
      </div>
      <div>
        <h3 className="flex flex-col text-xs font-secondary text-white font-semibold tracking-widest cursor-pointer my-4">
          NAVIGATE
        </h3>
        <div>
          {menu_navbar.map((el) => {
            return (
              <li
                className="font-secondary text-secondary-font font-semibold cursor-pointer list-none my-4 transition duration-200 ease-in-out hover:text-white"
                key={el.name}
              >
                <NavLink to={el.path} className="text-xs">
                  {el.name}
                </NavLink>
              </li>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="flex flex-col text-xs font-main text-white tracking-widest cursor-pointer my-4">
          VISIT
        </h3>
        <div className="flex flex-col">
          <div className="flex">
            <a
              href="https://maps.app.goo.gl/UenA8PFfYnPLQBDu7"
              className="font-secondary text-secondary-font text-xs font-semibold cursor-pointer transition hover:text-primary"
            >
              VIA EXAMPLE 22
            </a>
          </div>
          <div className="mt-4 flex cursor-pointer">
            <a
              href="tel:+390212345678"
              className="font-secondary text-secondary-font text-xs font-semibold transition hover:text-primary"
            >
              +39 02 1234 5678
            </a>
          </div>
          <div className="mt-4 flex">
            <a
              href="mailto:info@osteriamilano.it"
              className="font-secondary text-xs text-secondary-font font-semibold transition hover:text-primary"
            >
              info@osteriamilano.it
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3 className="flex flex-col text-xs font-secondary text-white font-semibold tracking-widest cursor-pointer my-4">
          HOURS
        </h3>
        <div className="flex flex-col">
          <span className="font-secondary text-secondary-font text-xs tracking-wider">
            MON — FRI 09:00 — 19:30
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-secondary text-secondary-font text-xs tracking-wider">
            SAT 09:00 — 18:00
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <span className="font-secondary text-secondary-font text-xs tracking-wider">
            SUN CLOSED
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
