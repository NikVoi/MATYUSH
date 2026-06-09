"use client";

import { titleLetterVariants } from "@/shared/lib/motion-variants";
import { useReducedMotion } from "@/shared/lib/use-reduced-motion";
import { motion } from "framer-motion";
import { FC } from "react";

import { Container } from "./container";

interface Props {
  title: string;
  id: string;
}

const titleClassName =
  "font-archivo pt-20 pb-12 text-5xl font-normal uppercase leading-none tracking-tight max-sm:px-2 sm:pt-32 sm:pb-20 sm:text-7xl lg:pt-40 lg:pb-24 lg:text-8xl";

const Title: FC<Props> = ({ title, id }) => {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <h2 id={id}>
        <Container className={titleClassName}>{title}</Container>
      </h2>
    );
  }

  return (
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id={id}
    >
      <Container className={titleClassName}>
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={titleLetterVariants}
          >
            {letter}
          </motion.span>
        ))}
      </Container>
    </motion.h2>
  );
};

export default Title;
