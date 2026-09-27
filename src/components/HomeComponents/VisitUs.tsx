import { Link } from "react-router-dom";
import { ArrowRight5 } from "reicon-react";

const VisitUs = () => {
  return (
    <section className="bg-main-bg h-full w-full py-30 px-10 border-b border-b-secondary-font/20">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <span className="font-secondary text-xs text-effect tracking-wider">
              MILANO, ITALY
            </span>
            <h1 className="text-8xl font-main text-white tracking-wider">
              COME VISIT US.
            </h1>
          </div>

          {/* divider */}
          <div className="h-[1px] w-150 bg-secondary-bg my-15"></div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              {/* Address */}
              <div className="flex flex-col gap-4">
                <p className="font-secondary text-white text-sm font-semibold tracking-widest">
                  ADDRESS
                </p>
                <span className="font-secondary text-sm text-secondary-font tracking-wider">
                  VIA EXAPLE 21
                </span>
                <span className="font-secondary text-secondary-font text-sm tracking-wider">
                  Milano, Italy
                </span>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col gap-4">
                <p className="font-secondary text-sm text-white font-semibold tracking-widest">
                  OPENING HOURS
                </p>
                <span className="font-secondary text-secondary-font text-sm tracking-wider">
                  MON — FRI 09:00 — 19:30
                </span>
                <span className="font-secondary text-secondary-font text-sm tracking-wider">
                  SAT 09:00 — 18:00
                </span>
                <span className="font-secondary text-secondary-font text-sm tracking-wider">
                  SUN CLOSED
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <Link
                className="flex items-center gap-4 font-secondary text-black text-sm tracking-widest bg-white py-3 px-5 border transition-all duration-200 ease-in-out hover:bg-effect hover:text-black hover:border"
                to="/get"
              >
                GET DIRECTION <ArrowRight5 size={20} />
              </Link>
              <Link
                className="flex items-center gap-4 font-secondary text-white text-sm tracking-widest  py-3 px-5 border transition-all duration-200 ease-in-out hover:bg-white hover:text-black hover:border"
                to="/get"
              >
                CONTACT US <ArrowRight5 size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11841.79981430501!2d9.2298137927498!3d45.5295000218314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1790377887119!5m2!1sit!2sit"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
