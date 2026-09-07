import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[200] bg-gradient-to-r from-primary1 to-primary2"
    />
  );
};

export default ScrollProgress;
