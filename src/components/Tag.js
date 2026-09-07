import { motion } from "framer-motion";
import React from "react";

const Tag = ({ label, link, icon }) => {
  return (
    <motion.button
      onClick={() => link && window.open(link)}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="relative border border-borderTheme-dark dark:border-borderTheme-light rounded-full py-1 px-2 w-fit text-themebg-dark dark:text-themebg-light flex items-center gap-1 text-[15px] cursor-pointer opacity-80 hover:opacity-100 overflow-hidden group hover:shadow-md"
    >
      <span className="absolute -inset-x-[4rem] -inset-y-[4rem] bg-gradient-to-tr from-primary1 to-primary2 transform -translate-x-full rotate-45 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
      <span className="z-10">{icon()}</span>
      <span className="z-10">{label}</span>
    </motion.button>
  );
};

export default Tag;
