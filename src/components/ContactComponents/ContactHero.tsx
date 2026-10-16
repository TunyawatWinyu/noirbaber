const ContactHero = () => {
  return (
    <section className="w-full bg-main-bg px-15 py-50 border-b border-b-secondary-font/20">
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center lg:items-baseline gap-4">
          <span className="font-secondary text-xs text-effect font-semibold tracking-widest">
            GET IN TOUCH
          </span>
          <h1 className="font-main text-white text-6xl lg:text-9xl tracking-widest">
            LET'S <br /> TALK.
          </h1>
        </div>
        <div className="flex justify-center items-center lg:items-end-safe w-full lg:w-100">
          <p className="font-secondary text-secondary-font">
            Questions, special requests or appointment enquiries—our studio team
            is here to help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
