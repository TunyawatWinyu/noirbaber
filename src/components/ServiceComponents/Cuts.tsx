import { ArrowRightUp } from "reicon-react";
import { typeCuts } from "../../Data/Data";

const Cuts = () => {
  return (
    <section className="bg-main-bg px-15">
      {typeCuts.map((type) => {
        return (
          <div className="border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 flex justify-between py-20">
            <div className="flex flex-col gap-4">
              <span className="font-secondary font-semibold tracking-widest text-xs text-effect">
                0{type.id}
              </span>
              <h1 className="text-6xl font-main text-white">{type.type}</h1>
            </div>
            <div>
              {type.cuts.map((cut) => {
                return (
                  <div className="w-full flex justify-between gap-30 items-center border-t border-b border-b-secondary-font/20 border-t-secondary-font/20 py-6">
                    <p className="font-main text-4xl text-white">{cut.name}</p>
                    <p className="font-secondary text-sm text-secondary-font">
                      {cut.description}
                    </p>
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
