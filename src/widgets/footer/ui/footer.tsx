"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { MATYUSH } from "@/shared/config/constant";
import { fadeInUp, staggerContainer } from "@/shared/lib/motion-variants";
import { Container } from "@/shared/ui/container";

import { contactInfo, socialLinks } from "../model/constants";
import { FooterIconView } from "./footer-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const footerColumns = [
    {
      title: t("company"),
      links: [
        { label: tNav("work"), href: "/#work" as const },
        { label: tNav("reviews"), href: "/#review" as const },
        { label: tNav("about"), href: "/#about" as const },
      ],
    },
  ];

  return (
    <motion.footer
      className="w-full bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer}
    >
      <Container className="py-12 md:py-16">
        <motion.div
          className="flex flex-col items-center gap-8 text-center"
          variants={fadeInUp}
        >
          <h2 className="font-archivo text-4xl font-normal leading-none tracking-tight max-sm:text-5xl sm:text-7xl md:text-8xl">
            {MATYUSH}
          </h2>

          <nav aria-label={t("social")}>
            <ul className="flex items-center justify-center gap-6 text-3xl">
              {socialLinks.map(({ href, icon, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-block transition-transform duration-200 hover:scale-110 hover:opacity-90"
                  >
                    <FooterIconView name={icon} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </Container>

      <hr className="border-white/15" />

      <div className="w-full px-4 py-10 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          className="mx-auto flex w-full max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between"
          variants={staggerContainer}
        >
          {footerColumns.map(({ title, links }) => (
            <motion.div
              key={title}
              className="text-center lg:text-left"
              variants={fadeInUp}
            >
              <h3 className="mb-4 text-lg font-bold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            className="text-center lg:ml-auto lg:text-right"
            variants={fadeInUp}
          >
            <h3 className="mb-4 text-lg font-bold">{t("contact")}</h3>
            <ul className="space-y-3">
              {contactInfo.map(({ text, icon }) => (
                <li
                  key={text}
                  className="flex items-center justify-center gap-3 lg:justify-end"
                >
                  <span className="text-neutral-200">{text}</span>
                  <span className="text-xl">
                    <FooterIconView name={icon} />
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-white/10 bg-neutral-950/80">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-neutral-400 sm:flex-row sm:text-left sm:text-sm">
          <p>{t("copyright", { year: currentYear })}</p>
          <p className="max-w-md">{t("legal")}</p>
        </Container>
      </div>
    </motion.footer>
  );
};

export default Footer;
