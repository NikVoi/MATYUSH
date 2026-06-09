"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

import { getProductCatalog, getProductGridClasses } from "@/entities/product";
import { Link } from "@/i18n/navigation";
import { fadeIn, slideUp } from "@/shared/lib/motion-variants";
import { Container } from "@/shared/ui/container";
import { cn } from "@/shared/lib/utils";

const cardTitleClass =
  "font-archivo text-balance text-[1.625rem] font-normal leading-[1.15] tracking-tight sm:text-[1.75rem] lg:text-[2rem]";

const Categories = () => {
  const locale = useLocale();
  const t = useTranslations("categories");
  const catalog = getProductCatalog(locale);

  return (
    <motion.section
      className="my-12 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <Container className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(250px,auto)]">
        {catalog.map((product, index) => {
          const { rowSpanClass, colStartClass } = getProductGridClasses(
            product.gridLayout,
          );

          return (
            <motion.div
              key={product.id}
              className={cn(
                "group relative flex h-[300px] flex-col items-center justify-end overflow-hidden rounded-2xl pb-8 text-center text-white max-sm:h-[min(88vw,340px)] max-sm:pb-6 sm:h-[280px] sm:justify-center sm:pb-0",
                rowSpanClass,
                colStartClass,
              )}
              variants={slideUp(index * 0.1)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Link
                href={`/category/${product.slug}`}
                prefetch
                className="absolute inset-0 z-20"
                aria-label={`${product.title} — ${t("view")}`}
              />
              <Image
                src={product.previewImage}
                loading="lazy"
                quality={75}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale transition duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:from-black/50" />
              <div className="pointer-events-none relative z-10 flex max-w-[90%] flex-col items-center gap-3 px-3">
                <h3 className={cardTitleClass}>{product.title}</h3>
                <p className="line-clamp-2 text-sm font-normal leading-snug text-white/85">
                  {product.tagline}
                </p>
                <span className="mt-1 inline-flex rounded-full bg-main px-6 py-2 text-sm font-semibold text-white opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                  {t("view")}
                </span>
              </div>
            </motion.div>
          );
        })}
      </Container>
    </motion.section>
  );
};

export default Categories;
