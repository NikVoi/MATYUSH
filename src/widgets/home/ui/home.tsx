"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { MATYUSH } from "@/shared/config/constant";
import { useReducedMotion } from "@/shared/lib/use-reduced-motion";
import { HeroBackground } from "@/shared/ui/hero-background";

const Home = () => {
  const t = useTranslations("home");
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden sm:min-h-[100dvh]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <HeroBackground src="/catalog/main.jpg" alt={t("heroAlt")} />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 sm:from-black/30 sm:to-black/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent sm:from-white/25"
          aria-hidden
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-archivo relative z-10 px-4 text-center text-[clamp(2.75rem,15vw,11rem)] font-normal leading-none tracking-tight text-main drop-shadow-[0_2px_24px_rgba(199,67,117,0.35)]"
      >
        {MATYUSH.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={
              reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { delay: index * 0.1, duration: 0.5, ease: "easeOut" }
            }
            className="inline-block select-none"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </section>
  );
};

export default Home;
