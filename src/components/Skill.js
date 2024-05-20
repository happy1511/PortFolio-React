import React from "react";

export const SkillSection = ({ title, skills }) => {
  return (
    <div className="flex flex-col gap-4 border border-borderTheme-dark rounded-md p-4 w-[100%] md:w-[30%] bg-[#00000005] dark:bg-[#ffffff14] shadow-lg">
      <h2 className="text-themeText-light dark:text-themeText-dark text-[18px] my-2">
        {title}
      </h2>
      <div className="flex gap-1 flex-wrap">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

const Skill = ({ icon, skill, link }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-themeText-light dark:text-themeText-dark font-semibold flex flex-col items-center justify-center p-2 border border-transparent  rounded hover:shadow-inner"
    >
      <div className="h-[35px] w-[30px]">
        {icon(skill === "Github" ? 20 : null)}
      </div>

      <div className="text-[15px] font-normal opacity-90">{skill}</div>
    </a>
  );
};

export default Skill;
