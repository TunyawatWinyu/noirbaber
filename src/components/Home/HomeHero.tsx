import { ForwardRight } from "reicon-react";
import homeHero from "../../assets/img/noir-hero.jpg";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="flex justify-between px-10 py-30 xl:px-55 bg-main-bg border-b border-b-secondary-font">
      <div className="flex flex-col gap-4">
        <span className="font-secondary tracking-widest font-semibold text-xs text-effect">
          MILANO - EST. 2018
        </span>
        <h1 className="text-9xl text-white font-main ">
          PRECISION <br /> IN EVERY <br /> CUT.
        </h1>
        <div className="w-100 text-lg font-secondary text-secondary-font mb-9">
          <p>
            Modern grooming, shaped around the individual. A considered studio
            for precision cuts and quiet confidence.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            className="flex gap-4 font-secondary font-semibold text-sm py-4 px-6 tracking-widest text-black bg-white transition duration-200 ease-in-out hover:bg-effect"
            to="/booking"
          >
            BOOK AN APPOINTMENT <ForwardRight size={20} />
          </Link>
          <Link
            className="flex gap-4 font-secondary font-semibold text-sm py-4 px-6 tracking-widest text-white bg-none border border-white transition duration-200 ease-in-out hover:bg-white hover:text-black"
            to="/service"
          >
            EXPLORE SERVICE <ForwardRight size={20} />
          </Link>
          <div className="h-[1px] w-[90px] bg-secondary-bg"></div>
        </div>
      </div>
      <div className="relative">
        <img
          src={homeHero}
          className="h-160 w-120 object-cover"
          alt="Cucina italiana"
        />

        <p className="absolute bottom-6 left-6 z-20 font-main text-white tracking-widest">
          01 / STUDIO
        </p>
      </div>
    </div>
  );
};

export default HomeHero;
