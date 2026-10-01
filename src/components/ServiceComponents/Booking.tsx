import { Link } from "react-router-dom";
import { ArrowRightUp } from "reicon-react";

const Booking = () => {
  return (
    <section className="bg-main-bg h-full w-full py-30 border-b border-b-secondary-font/20">
      <div className="flex flex-col gap-8 justify-center items-center">
        <span className="font-secondary text-xs text-effect tracking-wider">
          YOUR NEXT CUT
        </span>
        <h1 className="font-main text-9xl text-white tracking-widest">
          MAKE IT YOURS.
        </h1>
        <Link
          className="flex gap-2 font-secondary text-black bg-white px-4 py-4 text-xs font-semibold tracking-widest transition-all duration-200 ease-in-out hover:bg-effect"
          to="/booking"
        >
          BOOKING NOW <ArrowRightUp size={15} />
        </Link>
      </div>
    </section>
  );
};

export default Booking;
