const ServiceHero = () => {
  return (
    <section className="bg-main-bg px-15 flex flex-col">
      <div className="flex justify-between items-end gap-10 pt-40 pb-30">
        <div className="flex flex-col gap-8">
          <span className="font-secondary text-xs text-effect tracking-wider">
            THE MENU
          </span>
          <h1 className="text-8xl font-main text-white tracking-wider">
            SERVICES & <br /> RITUALS.
          </h1>
        </div>
        <div className="flex w-100">
          <p className="text-secondary-font font-secondary text-md">
            {" "}
            focused edit of services, each tailored to your features, routine
            and individual style.
          </p>
        </div>
      </div>
      <div className=" border-t border-t-secondary-font border-b border-b-secondary-font h-20"></div>
    </section>
  );
};

export default ServiceHero;
