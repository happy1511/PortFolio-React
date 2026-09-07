import { useReducedMotion } from "framer-motion";
import React, { Suspense, lazy } from "react";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

const HeroBackground = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-0 opacity-25 dark:opacity-50"
    >
      <Suspense fallback={null}>
        <HeroCanvas reducedMotion={!!reducedMotion} />
      </Suspense>
    </div>
  );
};

export default HeroBackground;
