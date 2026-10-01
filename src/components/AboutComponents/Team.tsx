import { staff } from "../../Data/Data";

const Team = () => {
  return (
    <section className="flex flex-col bg-main-bg border-b border-b-secondary-font/20 gap-8 px-5 py-20 xl:px-15 2xl:px-55">
      <div className="flex flex-col gap-4 w-100">
        <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
          THE PEOPLE
        </p>

        <h1 className="font-main text-8xl tracking-widest text-white">
          MEET THE BARBERS.
        </h1>
      </div>
      <div className="flex justify-end gap-6">
        {staff.map((staff) => {
          return (
            <div className="flex flex-col gap-4 border-b border-b-secondary-font pb-5 ">
              <div className="group overflow-hidden">
                <img
                  className="w-120 h-150 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={staff.image}
                  alt={`Staff - ${staff.name}`}
                />
              </div>

              <p className="font-main text-3xl text-white tracking-widest">
                {staff.name}
              </p>
              <div className="flex justify-between">
                <span className="font-secondary text-xs text-effect tracking-widest">
                  {staff.role}
                </span>
                <span className="font-secondary text-xs text-secondary-font tracking-widests">
                  {staff.skill}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
