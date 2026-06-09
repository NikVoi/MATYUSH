"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

import { Container } from "@/shared/ui/container";
import { fadeIn, slideUpSoft } from "@/shared/lib/motion-variants";

const About = () => {
  const t = useTranslations("about");

  const paragraphs = [t("p1"), t("p2"), t("p3")];

  return (
    <motion.section
      className="mb-16 prose-brand max-sm:mb-20 sm:mb-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeIn}
    >
      <Container className="flex flex-col items-center gap-8 max-sm:gap-10 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          className="flex w-full shrink-0 items-center justify-center lg:w-5/12"
          variants={slideUpSoft(0.1)}
        >
          <div className="relative aspect-square w-[min(72vw,280px)] overflow-hidden rounded-full sm:w-full sm:max-w-[360px] lg:max-w-[400px]">
            <Image
              src="/catalog/about.jpg"
              alt={t("imageAlt")}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 80vw, 400px"
              quality={75}
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full space-y-6 lg:w-7/12"
          variants={slideUpSoft(0.2)}
        >
          <p className="font-archivo text-xl font-normal leading-snug text-black max-sm:text-center sm:text-2xl md:text-3xl">
            {t("lead")}
          </p>

          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <blockquote className="border-l-4 border-main pl-5 text-neutral-600">
            <p className="italic">&ldquo;{t("quote")}&rdquo;</p>
            <cite className="mt-3 block text-sm font-medium not-italic text-neutral-500">
              {t("quoteAuthor")}
            </cite>
          </blockquote>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default About;
