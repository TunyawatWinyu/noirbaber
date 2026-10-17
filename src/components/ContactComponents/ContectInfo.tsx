const ContactInfo = () => {
  return (
    <section className="w-full flex flex-col md:flex-row md:justify-between lg:flex-col lg:items-baseline gap-15  px-10 py-10 lg:py-30 lg:w-120 bg-main-bg">
      <div className="flex flex-col">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          ADDRESS
        </p>
        <span className="font-secondary text-sm text-secondary-font">
          Via Example 24, Milano, Italy
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          CONTACT
        </p>
        <span className="font-secondary text-sm text-secondary-font">
          +39 02 0000 0000
        </span>
        <span className="font-secondary text-sm text-secondary-font">
          studio@noirbarber.it
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-secondary text-secondary-font text-sm font-semibold tracking-widest">
          OPENING HOURS
        </p>
        <span className="font-secondary text-sm text-secondary-font">
          MON — FRI 09:00 — 19:30
        </span>
        <span className="font-secondary text-sm text-secondary-font">
          SAT 09:00 — 18:00
        </span>
        <span className="font-secondary text-sm text-secondary-font">
          SUN CLOSED
        </span>
      </div>
    </section>
  );
};

export default ContactInfo;
