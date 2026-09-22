import { ForwardRight } from "reicon-react";
import homeHero from "../../assets/img/noir-hero.jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-16 px-10 py-30 xl:px-16 2xl:px-24 bg-main-bg border-b border-b-secondary-font">
      {/* LEFT */}
      <div className="flex flex-col gap-4 min-w-0">
        <span className="font-secondary tracking-widest font-semibold text-xs text-effect">
          MILANO - EST. 2018
        </span>

        <h1 className="text-7xl xl:text-8xl 2xl:text-9xl text-white font-main">
          PRECISION <br />
          IN EVERY <br />
          CUT.
        </h1>

        <div className="max-w-xl text-lg font-secondary text-secondary-font mb-9">
          <p>
            Modern grooming, shaped around the individual. A considered studio
            for precision cuts and quiet confidence.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <Link
            className="flex gap-4 font-secondary font-semibold text-sm py-4 px-6 tracking-widest text-black bg-white transition duration-200 ease-in-out hover:bg-effect"
            to="/booking"
          >
            BOOK AN APPOINTMENT
            <ForwardRight size={20} />
          </Link>

          <Link
            className="flex gap-4 font-secondary font-semibold text-sm py-4 px-6 tracking-widest text-white border border-white transition duration-200 ease-in-out hover:bg-white hover:text-black"
            to="/service"
          >
            EXPLORE SERVICE
            <ForwardRight size={20} />
          </Link>

          <div className="h-[1px] w-[90px] bg-secondary-bg" />
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative shrink-0">
        <img
          src={homeHero}
          className="h-120 w-full max-w-120 lg:h-140 2xl:h-160 object-cover"
          alt="Barber studio"
        />

        <p className="absolute bottom-6 left-6 z-20 font-main text-white tracking-widest">
          01 / STUDIO
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
