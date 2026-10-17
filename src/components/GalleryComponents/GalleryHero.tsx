const GalleryHero = () => {
  return (
    <section className="bg-main-bg px-15 py-40 lg:pt-50 xl:pb-30 2xl:py-50 border-b border-b-secondary-font/20">
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            SELECTED WORK
          </span>
          <h1 className="font-main text-white text-5xl lg:text-9xl tracking-widest">
            CUTS. CRAFT. CHARACTER.
          </h1>
        </div>
        <div className="flex items-end-safe w-full">
          <p className="font-secondary text-secondary-font">
            A study in shape, texture and detail—selected work from our Milano
            studio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
