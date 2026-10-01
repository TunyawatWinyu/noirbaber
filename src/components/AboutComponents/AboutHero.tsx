const AboutHero = () => {
  return (
    <section className="bg-main-bg px-15 py-50 border-b border-b-secondary-font/20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            OUR STORY
          </span>
          <h1 className="font-main text-white text-9xl tracking-widest">
            BUILT ON <br /> DETAIL.
          </h1>
        </div>
        <div className="flex items-end-safe w-100">
          <p className="font-secondary text-secondary-font">
            NOIR was founded on a simple belief: personal style deserves time,
            precision and honest craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
