"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { useReducedMotion } from "@/shared/lib/use-reduced-motion";

type ScrollProgressProps = {
  className?: string;
};

export function ScrollProgress({ className }: ScrollProgressProps) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reducedMotion) return null;

  return <motion.div className={className} style={{ scaleX }} aria-hidden />;
}
