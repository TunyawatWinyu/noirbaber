import { ArrowRightUp } from "reicon-react";
import { typeCuts } from "../../Data/Data";

const Cuts = () => {
  return (
    <section className="bg-main-bg px-15">
      {typeCuts.map((type) => {
        return (
          <div className="border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 flex flex-col lg:flex-row lg:justify-between py-20">
            <div className="flex flex-col items-center lg:items-baseline gap-4">
              <span className="font-secondary font-semibold tracking-widest text-xs text-effect">
                0{type.id}
              </span>
              <h1 className="text-6xl font-main text-white">{type.type}</h1>
            </div>
            <div>
              {type.cuts.map((cut) => {
                return (
                  <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-30 items-center border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 mt-5 lg:mt-0 py-6">
                    <div className="flex flex-col lg:flex-row lg:justify-center items-center">
                      <p className="font-main text-4xl text-white">
                        {cut.name}
                      </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                      <p className="font-secondary lg:w-full text-sm text-secondary-font">
                        {cut.description}
                      </p>
                    </div>
                    <div className="flex gap-6 items-center justify-center">
                      <div className="flex flex-col">
                        <span className="font-main text-white text-3xl">
                          €{cut.price}
                        </span>
                        <span className="flex font-secondary text-xs text-secondary-font">
                          {cut.time} min
                        </span>
                      </div>
                      <ArrowRightUp className="text-white" size={20} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cuts;
