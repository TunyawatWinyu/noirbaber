import { Link } from "react-router-dom";
import { SquareShare } from "reicon-react";

const Essential = () => {
  const Essential_props = [
    {
      number: "01",
      h3: "PRECISION HAIRCUT",
      p: "Consultation, wash, cut and considered styling.",
      span: "45 min / €25",
    },
    {
      number: "02",
      h3: "SIGNATURE FADE",
      p: "Seamless skin fade with a tailored finish.",
      span: "50 min / €28",
    },
    {
      number: "03",
      h3: "SCISSOR CUT",
      p: "Shape and movement built entirely by hand.",
      span: "50 min / €30",
    },
  ];
  return (
    <section className="flex flex-col bg-secondary-font/40 gap-8 py-20 px-10 xl:px-45">
      <div className="flex justify-between items-end-safe mx-10">
        <div className="flex flex-col justify-end gap-4">
          <p className="font-secondary font-semibold tracking-widest text-xs text-effect">
            01 - SERVICES
          </p>
          <h1 className="font-main tracking-widest font-black text-8xl">
            THE ESSENTIALS.
          </h1>
        </div>
        <div className=" w-100">
          <p className="font-secondary text-gray-600">
            A focused menu. Clear choices, precise timings, no unnecessary
            extras.
          </p>
        </div>
      </div>
      <div className="mx-10 grid grid-cols-3 border border-gray-600/25">
        {Essential_props.map((el, index) => (
          <div
            key={index}
            className="flex min-h-[300px] flex-col border-r border-gray-600/25 p-8 last:border-r-0"
          >
            <h1 className="text-5xl font-main text-effect/35">{el.number}</h1>

            <div className="mt-auto flex flex-col gap-4">
              <h3 className="text-4xl font-main text-black">{el.h3}</h3>

              <p className="font-secondary text-sm text-gray-600">{el.p}</p>

              <span className="font-secondary text-sm font-semibold tracking-widest text-black">
                {el.span}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Link
        className="flex justify-center mx-10 items-center gap-4 py-3 px-3 w-60 text-xl tracking-widest font-main transition-all duration-200 ease-in-out hover:bg-effect"
        to="/service"
      >
        VIEW ALL SERVICES <SquareShare size={15} />
      </Link>
    </section>
  );
};

export default Essential;
