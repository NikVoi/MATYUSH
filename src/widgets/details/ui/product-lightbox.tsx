"use client";

import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

type ProductLightboxProps = {
  images: string[];
  index: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ProductLightbox({
  images,
  index,
  isOpen,
  onClose,
  onIndexChange,
}: ProductLightboxProps) {
  const t = useTranslations("product.gallery");

  const goPrev = useCallback(() => {
    const next = (index - 1 + images.length) % images.length;
    onIndexChange(next);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    const next = (index + 1) % images.length;
    onIndexChange(next);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const currentSrc = images[index];

  if (!currentSrc) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={t("lightbox")}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-[110] rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            onClick={onClose}
            aria-label={t("close")}
          >
            <FaXmark className="size-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 md:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label={t("prev")}
              >
                <FaChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/25 md:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label={t("next")}
              >
                <FaChevronRight className="size-6" />
              </button>
            </>
          )}

          <motion.div
            className="relative h-[min(90vh,900px)] w-full max-w-5xl touch-none"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              key={currentSrc}
              initialScale={1}
              minScale={1}
              maxScale={4}
              centerOnInit
              doubleClick={{ mode: "toggle", step: 0.7 }}
              pinch={{ step: 5 }}
              wheel={{ step: 0.12 }}
            >
              <TransformComponent
                wrapperClass="!h-full !w-full"
                contentClass="!h-full !w-full flex items-center justify-center"
              >
                <div className="relative h-full w-full min-h-[50vh]">
                  <Image
                    src={currentSrc}
                    alt={t("fullSize")}
                    fill
                    className="object-contain select-none"
                    sizes="100vw"
                    quality={95}
                    priority
                    draggable={false}
                  />
                </div>
              </TransformComponent>
            </TransformWrapper>
          </motion.div>

          <p className="absolute bottom-4 left-1/2 z-[110] -translate-x-1/2 text-sm text-white/80">
            {t("counter", { current: index + 1, total: images.length })} ·{" "}
            {t("zoomHint")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
