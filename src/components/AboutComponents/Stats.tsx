import StatsHero from "../../assets/img/gallery-studio.jpg";

const Stats = () => {
  return (
    <section className="gap-10 px-15">
      {/* IMAGE */}
      <div className="flex justify-center w-full lg:w-full">
        <img
          className="h-[400px] w-300 my-30 object-cover md:h-[500px] lg:h-[600px]"
          src={StatsHero}
          alt="Baber Studio"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col border-t border-t-secondary-font py-6">
          <p className="text-effect font-main text-7xl">8 +</p>
          <span className="font-main text-effect text-sm tracking-widest">
            YEARS OF CRAFT
          </span>
        </div>
        <div className="flex flex-col border-t border-t-secondary-font py-6">
          <p className="text-effect font-main text-7xl">2K +</p>
          <span className="font-main text-effect text-sm tracking-widest">
            CLIENTS SERVED
          </span>
        </div>
        <div className="flex flex-col border-t border-t-secondary-font py-6">
          <p className="text-effect font-main text-7xl">4.9</p>
          <span className="font-main text-effect text-sm tracking-widest">
            AVERAGE RATING
          </span>
        </div>
      </div>
    </section>
  );
};

export default Stats;
