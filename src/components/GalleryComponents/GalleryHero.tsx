const GalleryHero = () => {
  return (
    <section className="bg-main-bg px-15 py-50 border-b border-b-secondary-font/20">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            SELECTED WORK
          </span>
          <h1 className="font-main text-white text-9xl tracking-widest">
            CUTS. CRAFT. CHARACTER.
          </h1>
        </div>
        <div className="flex items-end-safe w-150">
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
