import { Link } from "react-router-dom";
import { ArrowRightUp } from "reicon-react";
import philosophyHero from "../../assets/img/craft-hands.jpg";

const Philosophy = () => {
  return (
    <section className="bg-main-bg px-5 py-20 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mx-auto flex max-w-[1800px] flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            className="h-[400px] w-full object-cover md:h-[500px] lg:h-[600px]"
            src={philosophyHero}
            alt="Barber tools"
          />
        </div>

        {/* CONTENT */}
        <div className="flex w-full flex-col gap-8 lg:w-1/2">
          {/* TITLE */}
          <div className="flex flex-col gap-4">
            <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
              THE PHILOSOPHY
            </p>

            <h1 className="font-main text-5xl tracking-widest text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl">
              MORE THAN A HAIRCUT.
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="flex max-w-xl flex-col gap-10">
            <p className="font-secondary tracking-wide text-secondary-font">
              We created NOIR as an antidote to rushed, impersonal grooming.
              Every appointment begins with a conversation and ends only when
              each line, texture and transition feels right.
            </p>
            <p className="font-secondary tracking-wide text-secondary-font">
              Modern technique matters. So does knowing when to exercise
              restraint. Our work is designed to wear naturally, grow cleanly
              and feel unmistakably yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
