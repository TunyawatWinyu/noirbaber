import alex from "../../assets/img/team-alex.jpg";
import david from "../../assets/img/team-david.jpg";

const staff = [
  {
    name: "ALEX MORETTI",
    role: "MASTER BABER",
    skill: "Fade & Modern Cut",
    image: alex,
  },
  {
    name: "DAVID ROMANO",
    role: "BABER",
    skill: "Clssic Cuts & Beard",
    image: david,
  },
];

const Team = () => {
  return (
    <section className="flex justify-between bg-secondary-font/35 gap-8 px-5 py-20 xl:px-5 2xl:px-55">
      <div className="flex flex-col gap-4 w-100">
        <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
          04 — THE TEAM
        </p>

        <h1 className="font-main text-8xl tracking-widest text-main-bg">
          MEET THE BARBERS.
        </h1>
      </div>
      <div className="flex gap-6">
        {staff.map((staff) => {
          return (
            <div className="flex flex-col gap-4 border-b border-b-secondary-font pb-5 ">
              <div className="group overflow-hidden">
                <img
                  className="w-90 h-120 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={staff.image}
                  alt={`Staff - ${staff.name}`}
                />
              </div>

              <p className="font-main text-3xl tracking-widest">{staff.name}</p>
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
