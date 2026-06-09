"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Button } from "@/shared/ui/button";
import type { ProductGalleryProps } from "../model/types";
import { ProductLightbox } from "./product-lightbox";

const PREVIEW_QUALITY = 75;

export function ProductGallery({ images, title }: ProductGalleryProps) {
  const t = useTranslations("product.gallery");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    watchDrag: !isLightboxOpen,
  });

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const showPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const showNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi]);

  const openLightbox = useCallback(() => {
    setLightboxIndex(selectedIndex);
    setIsLightboxOpen(true);
  }, [selectedIndex]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    setSelectedIndex(lightboxIndex);
    scrollTo(lightboxIndex);
  }, [lightboxIndex, scrollTo]);

  if (!images.length) return null;

  return (
    <>
      <div className="relative">
        <div
          className={`overflow-hidden rounded-xl ${isLightboxOpen ? "pointer-events-none opacity-60" : ""}`}
          ref={emblaRef}
        >
          <div className="flex">
            {images.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                <button
                  type="button"
                  className="relative block h-[min(78vw,420px)] w-full sm:h-[min(70vh,520px)] md:h-[min(75vh,640px)]"
                  onClick={openLightbox}
                  aria-label={t("openPhoto", { n: index + 1 })}
                  disabled={isLightboxOpen}
                >
                  <Image
                    src={src}
                    alt={`${title} — ${t("openPhoto", { n: index + 1 })}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    quality={PREVIEW_QUALITY}
                    priority={index === 0}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {images.length > 1 && !isLightboxOpen && (
          <>
            <Button
              type="button"
              aria-label={t("prev")}
              onClick={showPrev}
              className="absolute left-3 top-1/2 z-10 size-10 -translate-y-1/2 rounded-full bg-white/90 p-0 text-black shadow-md hover:bg-white"
            >
              <FaChevronLeft />
            </Button>
            <Button
              type="button"
              aria-label={t("next")}
              onClick={showNext}
              className="absolute right-3 top-1/2 z-10 size-10 -translate-y-1/2 rounded-full bg-white/90 p-0 text-black shadow-md hover:bg-white"
            >
              <FaChevronRight />
            </Button>
            <p className="absolute bottom-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
              {t("counter", {
                current: selectedIndex + 1,
                total: images.length,
              })}
            </p>
          </>
        )}
      </div>

      <div
        className={`mt-4 flex gap-2 overflow-x-auto pb-1 ${isLightboxOpen ? "pointer-events-none opacity-50" : ""}`}
      >
        {images.map((src, index) => (
          <button
            key={`thumb-${src}-${index}`}
            type="button"
            onClick={() => scrollTo(index)}
            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              selectedIndex === index
                ? "border-main"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={t("thumb", { n: index + 1 })}
            aria-current={selectedIndex === index}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="80px"
              quality={PREVIEW_QUALITY}
            />
          </button>
        ))}
      </div>

      <ProductLightbox
        images={images}
        index={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
