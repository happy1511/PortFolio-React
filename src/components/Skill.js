import React from "react";

export const SkillSection = ({ title, skills }) => {
  return (
    <div className="border border-borderTheme-dark rounded-lg p-6 bg-[#00000005] dark:bg-[#ffffff14] shadow-lg">
      <h2 className="text-themeText-light dark:text-themeText-dark text-lg font-semibold mb-4">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const Skill = ({ icon, name, officialLink }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={officialLink}
      className="text-themeText-light dark:text-themeText-dark font-semibold flex flex-col items-center justify-center p-2 border border-transparent  rounded hover:shadow-inner"
    >
      <div className="h-[35px] w-[30px]">
        <img src={icon} className="w-full h-full object-contain" />
      </div>

      <div className="text-[15px] font-normal opacity-90 mt-1">{name}</div>
    </a>
  );
};

export default Skill;
