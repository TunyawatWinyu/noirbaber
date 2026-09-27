import { Link } from "react-router-dom";
import moreHero from "../../assets/img/gallery-tools.jpg";
import { SquareShare } from "reicon-react";

const More = () => {
  return (
    <section className="bg-main-bg px-5 py-20 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
            src={moreHero}
            alt="Barber tools"
          />
        </div>

        {/* CONTENT */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          {/* TITLE */}
          <div className="flex flex-col gap-4">
            <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
              02 — OUR PHILOSOPHY
            </p>

            <h1 className="font-main text-5xl tracking-widest text-white sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              MORE THAN A HAIRCUT.
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="flex max-w-xl flex-col gap-7">
            <p className="font-secondary tracking-wide text-secondary-font">
              We listen first, then shape every line with purpose.
              <br />
              The result is personal, precise and built to last.
            </p>

            <div className="h-px w-full bg-secondary-font/20" />
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">8+</h3>

              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                YEARS
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">4.9</h3>

              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                RATING
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-main text-4xl text-effect">2K+</h3>

              <p className="font-secondary text-xs tracking-widest text-secondary-font">
                CLIENTS
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <Link
            to="/our-story"
            className="flex w-fit items-center justify-center gap-4 border border-secondary-font px-6 py-3 font-main text-md tracking-widest text-white transition-all duration-200 ease-in-out hover:bg-white hover:text-black"
          >
            OUR STORY
            <SquareShare size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default More;
