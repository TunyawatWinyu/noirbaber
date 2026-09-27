import image1 from "../../assets/img/gallery-beard.jpg";
import image2 from "../../assets/img/craft-hands.jpg";
import image3 from "../../assets/img/gallery-studio.jpg";
import image4 from "../../assets/img/gallery-tools.jpg";
import image5 from "../../assets/img/gallery-fade.jpg";

import { SquareShare } from "reicon-react";
import { Link } from "react-router-dom";

const Details = () => {
  const img_details = [
    {
      src: image1,
      title: "FADE",
      className: "col-span-1 row-span-2",
    },
    {
      src: image2,
      title: "BEARD",
      className: "col-span-1 row-span-1",
    },
    {
      src: image3,
      title: "STUDIO",
      className: "col-span-2 row-span-1",
    },
    {
      src: image4,
      title: "HAIRCUT",
      className: "col-span-1 row-span-1",
    },
    {
      src: image5,
      title: "DETAIL",
      className: "col-span-2 row-span-1",
    },
  ];

  return (
    <section className="w-full bg-third-bg xl:px-5 2xl:px-55 xl:py-50">
      {/* HEADER */}
      <div className="flex w-full items-end justify-between">
        <div className="flex flex-col gap-4">
          <p className="font-secondary text-xs font-semibold tracking-widest text-secondary-font">
            03 — SELECTED WORK
          </p>

          <h1 className="font-main text-8xl tracking-widest text-white">
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
      <div className="mt-20 grid h-[650px] grid-cols-4 grid-rows-2 gap-3">
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
