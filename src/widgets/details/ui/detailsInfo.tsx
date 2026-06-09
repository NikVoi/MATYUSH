"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { tapScaleSubtle } from "@/shared/lib/motion-variants";
import { FC } from "react";

import { Button } from "@/shared/ui/button";
import type { ProductDetailsProps } from "../model/types";
import { ProductTabs } from "./product-tabs";

const DetailsInfo: FC<ProductDetailsProps> = ({ product }) => {
  const t = useTranslations("product");

  if (!product) {
    return <p className="text-center text-xl">{t("loading")}</p>;
  }

  return (
    <motion.section
      className="flex w-full flex-col max-sm:gap-0 lg:w-[42%] lg:min-h-[min(75vh,640px)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-1 flex-col">
        <p className="mb-2 text-right text-sm font-medium uppercase tracking-widest text-main max-sm:text-left">
          {t("brand")}
        </p>
        <h1 className="font-archivo text-right text-3xl font-normal leading-[1.05] tracking-tight text-black max-sm:text-left sm:text-5xl lg:text-6xl">
          {product.title}
        </h1>
        <p className="font-body mt-3 text-right text-base font-medium leading-relaxed tracking-wide text-neutral-500 max-sm:text-left md:text-lg">
          {product.tagline}
        </p>
        <ProductTabs product={product} />
      </div>

      <div className="sticky bottom-0 z-10 mt-8 shrink-0 border-t border-neutral-100 bg-white/95 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm max-sm:-mx-4 max-sm:px-4 sm:pt-5 lg:static lg:mx-0 lg:mt-auto lg:bg-white lg:pb-2 lg:pt-6">
        <div className="flex justify-center sm:justify-end lg:px-0">
          <motion.a
            href="https://www.instagram.com/matyush.krama?igsh=OTRvbDE3djZyNTVO"
            target="_blank"
            rel="noopener noreferrer"
            {...tapScaleSubtle}
            className="inline-block w-full max-w-xs sm:w-auto"
          >
            <Button className="bg-main h-12 w-full rounded-xl px-8 text-base font-semibold text-white shadow-sm hover:bg-main/90 sm:min-w-[200px] sm:text-lg sm:h-14">
              {t("order")}
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default DetailsInfo;
