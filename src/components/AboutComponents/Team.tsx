import { useTranslation } from "react-i18next";
import { staff } from "../../Data/Data";

const Team = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col bg-main-bg border-b border-b-secondary-font/20 gap-8 px-5 py-20 lg:px-10 2xl:px-55">
      <div className="flex flex-col items-center lg:items-baseline gap-4 w-full lg:w-100">
        <p className="font-secondary text-xs font-semibold tracking-widest text-effect">
          {t("about.team.label")}
        </p>

        <h1 className="font-main text-4xl lg:text-8xl tracking-widest text-white">
          {t("about.team.title")}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-end gap-6 mx-5 lg:mx-0">
        {staff.map((member) => (
          <div
            key={member.name}
            className="flex flex-col gap-4 border-b border-b-secondary-font pb-5"
          >
            <div className="group overflow-hidden">
              <img
                className="w-120 h-120 lg:h-150 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                src={member.image}
                alt={t("about.team.imageAlt", { name: member.name })}
              />
            </div>

            <p className="font-main text-3xl text-white tracking-widest">
              {member.name}
            </p>

            <div className="flex justify-between">
              <span className="font-secondary text-xs text-effect tracking-widest">
                {t(`about.team.members.${member.id}.role`)}
              </span>

              <span className="font-secondary text-xs text-secondary-font tracking-widest">
                {t(`about.team.members.${member.id}.skill`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
