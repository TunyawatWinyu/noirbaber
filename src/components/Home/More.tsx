import { Link } from "react-router-dom";
import moreHero from "../../assets/img/gallery-tools.jpg";
import { SquareShare } from "reicon-react";

const More = () => {
  return (
    <section className="flex justify-between items-center bg-main-bg xl:px-45">
      <div className="mx-10 my-30">
        <img className="w-300 h-150 object-cover" src={moreHero} alt="tools" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-end gap-4">
          <p className="font-secondary font-semibold tracking-widest text-xs text-effect">
            02 — OUR PHILOSOPHY
          </p>
          <h1 className="font-main tracking-widest text-white text-8xl">
            MORE THAN A HAIRCUT.
          </h1>
        </div>
        <div className="flex flex-col gap-7 w-100">
          <p className="font-secondary text-secondary-font tracking-wide">
            We listen first, then shape every line with purpose. <br /> The
            result is personal, precise and built to last.
          </p>
          <div className="h-[1px] w-90 xl:w-150 bg-secondary-font/20"></div>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex flex-col mx-5">
            <h3 className="font-main text-effect text-4xl">8+</h3>
            <p className="font-secondary tracking-widest text-xs text-secondary-font">
              YEARS
            </p>
          </div>
          <div className="flex flex-col mx-5">
            <h3 className="font-main text-effect text-4xl">4.9</h3>
            <p className="font-secondary tracking-widest text-xs text-secondary-font">
              RATING
            </p>
          </div>
          <div className="flex flex-col mx-5">
            <h3 className="font-main text-effect text-4xl">2K+</h3>
            <p className="font-secondary tracking-widest text-xs text-secondary-font">
              CLIENTS
            </p>
          </div>
        </div>
        <Link
          to="/our-story"
          className="flex justify-center items-center gap-4 font-main text-white tracking-widest text-md border border-secondary-font w-40 py-3 transition-all duration-200 ease-in-out hover:bg-white hover:text-black "
        >
          OUR STORY
          <SquareShare size={15} />
        </Link>
      </div>
    </section>
  );
};

export default More;
