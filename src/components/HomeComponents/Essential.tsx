import { Link } from "react-router-dom";
import { SquareShare } from "reicon-react";
import { Essential_props } from "../../Data/Data";

const Essential = () => {
  return (
    <section className="flex flex-col bg-secondary-font/20 gap-8 py-20 px-10 xl:px-5 2xl:px-45">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between lg:items-end-safe mx-10">
        <div className="flex flex-col justify-end gap-4">
          <p className="font-secondary font-semibold tracking-widest text-xs text-effect">
            01 - SERVICES
          </p>
          <h1 className="font-main tracking-widest font-black text-5xl lg:text-8xl">
            THE ESSENTIALS.
          </h1>
        </div>
        <div className="w-full lg:w-100 ">
          <p className="font-secondary text-gray-600">
            A focused menu. Clear choices, precise timings, no unnecessary
            extras.
          </p>
        </div>
      </div>
      <div className="mx-5 flex flex-col gap-4 lg:mx-10 lg:flex-row">
        {Essential_props.map((el, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 w-full lg:w-100 border border-gray-600/25 p-8 min-h-50 "
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
        className="flex justify-center mx-5 lg:mx-10 items-center gap-4 py-3 px-3 w-60 text-xl tracking-widest font-main border xl:border-none xl:transition-all xl:duration-200 xl:ease-in-out xl:hover:bg-effect"
        to="/service"
      >
        VIEW ALL SERVICES <SquareShare size={15} />
      </Link>
    </section>
  );
};

export default Essential;
