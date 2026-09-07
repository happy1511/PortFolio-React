import { motion } from "framer-motion";
import React from "react";
import { EASE } from "./motion/motion";

const Header = ({ title }) => {
  return (
    <motion.div
      className="my-9 mt-0 w-fit"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.h1
        className="text-themeText-light dark:text-themeText-dark text-[25px] font-bold"
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
        }}
      >
        {title}
      </motion.h1>
      <motion.span
        className="block h-[3px] rounded-full bg-gradient-to-r from-primary1 to-primary2 origin-left"
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: { duration: 0.6, ease: EASE, delay: 0.15 },
          },
        }}
      />
    </motion.div>
  );
};

export default Header;
