"use client";

import { motion } from "framer-motion";
import { FC } from "react";

import type { ProductGalleryProps } from "../model/types";
import { ProductGallery } from "./product-gallery";

const DetailsPicture: FC<ProductGalleryProps> = (props) => {
  return (
    <motion.section
      className="flex w-full flex-col gap-4 lg:w-[58%]"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ProductGallery {...props} />
    </motion.section>
  );
};

export default DetailsPicture;
