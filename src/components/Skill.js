import { motion } from "framer-motion";
import React from "react";
import { StaggerGroup, StaggerItem, scaleIn } from "./motion/motion";

export const SkillSection = ({ title, skills }) => {
  return (
    <motion.div
      className="border border-borderTheme-dark rounded-lg p-6 bg-[#00000005] dark:bg-[#ffffff14] shadow-lg"
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, boxShadow: "0 18px 40px -20px #0ea5ea" }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
    >
      <h2 className="text-themeText-light dark:text-themeText-dark text-lg font-semibold mb-4">
        {title}
      </h2>
      <StaggerGroup
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        stagger={0.05}
      >
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </StaggerGroup>
    </motion.div>
  );
};

const Skill = ({ icon, name, officialLink }) => {
  return (
    <StaggerItem
      as="a"
      target="_blank"
      rel="noreferrer"
      href={officialLink}
      variants={scaleIn}
      whileHover={{ scale: 1.12, rotate: -2 }}
      whileTap={{ scale: 0.96 }}
      className="text-themeText-light dark:text-themeText-dark font-semibold flex flex-col items-center justify-center p-2 border border-transparent rounded"
    >
      <div className="h-[35px] w-[30px]">
        <img src={icon} className="w-full h-full object-contain" alt={name} />
      </div>

      <div className="text-[15px] font-normal opacity-90 mt-1">{name}</div>
    </StaggerItem>
  );
};

export default Skill;
