import craftHero from "../../assets/img/craft-hands.jpg";

const Craft = () => {
  return (
    <div className="flex justify-between items-center gap-7 bg-main-bg py-9 px-9">
      <p className="font-secondary text-effect text-xs tracking-widest font-semibold">
        THE CRAFT
      </p>
      <h3 className="font-main text-white text-5xl">CRAFTED WITH PRECISION.</h3>
      <div className="relative">
        <img
          src={craftHero}
          className="h-45 w-100 object-cover"
          alt="Cucina italiana"
        />
      </div>
    </div>
  );
};

export default Craft;
