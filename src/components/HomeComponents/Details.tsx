import { SquareShare } from "reicon-react";
import { Link } from "react-router-dom";
import { img_details } from "../../Data/Data";

const Details = () => {
  return (
    <section className="w-full py-10 bg-third-bg lg:px-10 lg:py-40 xl:px-5 2xl:px-55 xl:py-50">
      {/* HEADER */}
      <div className="flex flex-col items-center w-full gap-4 lg:items-baseline lg:px-10 lg:justify-between">
        <div className="flex flex-col gap-4 items-center lg:items-baseline">
          <p className="font-secondary text-xs font-semibold tracking-widest text-secondary-font">
            03 — SELECTED WORK
          </p>

          <h1 className="font-main text-5xl lg:text-8xl tracking-widest text-white">
            THE DETAILS.
          </h1>
        </div>

        <Link
          to="/gallery"
          className="
            flex
            items-center
            text-sm
            gap-4
            border
            px-6
            py-4
            font-secondary
            font-semibold
            tracking-widest
            text-white
            transition-all
            duration-200
            ease-in-out
            hover:border-white
            hover:bg-white
            hover:text-black
          "
        >
          VIEW GALLERY
          <SquareShare size={20} />
        </Link>
      </div>

      {/* GALLERY */}
      <div className="mt-20 mx-5 flex flex-col lg:grid lg:h-[650px]  lg:grid-cols-4 lg:grid-rows-2 gap-3">
        {img_details.map((image) => (
          <div
            key={image.title}
            className={`group relative overflow-hidden ${image.className} `}
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
            />

            <span className="absolute bottom-5 left-5 font-secondary text-xs font-semibold tracking-widest text-white">
              {image.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Details;
