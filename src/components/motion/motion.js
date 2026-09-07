import { motion } from "framer-motion";
import React from "react";

export const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

export const Reveal = ({
  children,
  variants = fadeUp,
  className,
  as = "div",
  amount = 0.25,
  once = true,
  ...rest
}) => {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export const StaggerItem = ({
  children,
  variants = fadeUp,
  className,
  as = "div",
  ...rest
}) => {
  const Component = motion[as] || motion.div;
  return (
    <Component className={className} variants={variants} {...rest}>
      {children}
    </Component>
  );
};

export const StaggerGroup = ({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.2,
  once = true,
  ...rest
}) => (
  <motion.div
    className={className}
    variants={staggerContainer(stagger, delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount }}
    {...rest}
  >
    {children}
  </motion.div>
);
