"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BANDS_TITLE =
  " MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ MATYUSH ⭘ ";

const Bands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="relative w-full overflow-hidden py-12 max-sm:py-8 sm:py-20 select-none"
      ref={ref}
    >
      <motion.div
        className="relative -rotate-[1deg] max-sm:-rotate-[2deg] flex items-center w-full h-11 whitespace-nowrap bg-main top-8 max-sm:top-2 sm:h-[60px] sm:top-12 font-archivo"
        initial={{ opacity: 0, filter: "blur(20px)", y: -50, rotate: -4 }}
        animate={
          isInView ? { opacity: 1, filter: "blur(0px)", y: 0, rotate: -4 } : {}
        }
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className={`flex whitespace-nowrap animate-marquee `}>
          <p className="text-white text-sm uppercase whitespace-nowrap max-sm:text-xs sm:text-4xl">
            {BANDS_TITLE}
          </p>
          <p className="text-white text-sm uppercase whitespace-nowrap max-sm:text-xs sm:text-4xl">
            {BANDS_TITLE}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full flex items-center h-11 bg-main overflow-hidden rotate-[2deg] -top-4 max-sm:-top-3 sm:h-[60px] sm:-top-6 font-archivo"
        initial={{ opacity: 0, filter: "blur(20px)", y: 50, rotate: 4 }}
        animate={
          isInView ? { opacity: 1, filter: "blur(0px)", y: 0, rotate: 4 } : {}
        }
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <div
          className={`flex whitespace-nowrap animate-marquee animate-marquee-reverse`}
        >
          <p className="text-white text-sm uppercase whitespace-nowrap max-sm:text-xs sm:text-4xl">
            {BANDS_TITLE}
          </p>
          <p className="text-white text-sm uppercase whitespace-nowrap max-sm:text-xs sm:text-4xl">
            {BANDS_TITLE}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Bands;
