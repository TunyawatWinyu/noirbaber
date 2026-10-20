import { useTranslation } from "react-i18next";
import { staff } from "../../Data/Data";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 bg-secondary-font/35 px-5 py-20 lg:flex-row lg:justify-between lg:px-10 2xl:px-55">
      {/* HEADER */}
      <div className="flex w-full flex-col items-center gap-4 lg:w-100 lg:items-baseline">
        <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
          {t("home.team.label")}
        </p>

        <h1 className="font-main text-4xl tracking-widest text-main-bg lg:text-8xl">
          {t("home.team.title")}
        </h1>
      </div>

      {/* STAFF */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {staff.map((member, index) => {
          const staffKey = `barber${index + 1}`;

          return (
            <div
              key={member.name}
              className="flex flex-col gap-4 border-b border-b-secondary-font pb-5"
            >
              <div className="group overflow-hidden">
                <img
                  className="h-120 w-90 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src={member.image}
                  alt={`Staff - ${member.name}`}
                />
              </div>

              <p className="font-main text-3xl tracking-widest">
                {member.name}
              </p>

              <div className="flex justify-between">
                <span className="font-secondary text-xs tracking-widest text-effect">
                  {t(`home.team.staff.${staffKey}.role`)}
                </span>

                <span className="font-secondary text-xs tracking-widest text-secondary-font">
                  {t(`home.team.staff.${staffKey}.skill`)}
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
