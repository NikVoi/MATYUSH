"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { Button } from "@/shared/ui/button";
import { reviews } from "../model/reviews.data";
import { usePrevNextButtons } from "./usePrevNextButtons";

const Review: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    dragFree: false,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(
    emblaApi,
    { loop: true },
  );

  const isPausedRef = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = window.setInterval(() => {
      if (!isPausedRef.current) emblaApi.scrollNext();
    }, 5000);

    return () => window.clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      className="w-full py-4 max-sm:pb-2"
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-0 flex-[0_0_90%] pl-3 max-sm:pl-4 sm:flex-[0_0_72%] md:flex-[0_0_52%] lg:flex-[0_0_48%]"
            >
              <article className="flex h-full min-h-[300px] flex-col justify-between rounded-2xl border border-neutral-800 bg-black px-5 py-8 text-white max-sm:min-h-[280px] sm:px-8 sm:py-10 md:min-h-[360px] md:px-12">
                <div>
                  <span className="font-archivo text-5xl font-normal leading-none text-main md:text-6xl">
                    &ldquo;
                  </span>
                  <p className="font-body mt-4 text-base leading-[1.75] tracking-wide text-neutral-200 md:text-lg">
                    {review.text}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="size-14 shrink-0 overflow-hidden rounded-full md:size-16">
                    <Image
                      src={review.image}
                      loading="lazy"
                      alt={review.author}
                      width={64}
                      height={64}
                      quality={75}
                      className="size-full object-cover"
                    />
                  </div>
                  <p className="text-base font-medium md:text-lg">
                    {review.author}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center gap-8">
        <Button
          type="button"
          aria-label="Папярэдні водгук"
          onClick={onPrevButtonClick}
          className="bg-white p-2 text-black shadow-none hover:bg-neutral-100"
        >
          <FaArrowLeftLong className="size-5" />
        </Button>
        <Button
          type="button"
          aria-label="Наступны водгук"
          onClick={onNextButtonClick}
          className="bg-white p-2 text-black shadow-none hover:bg-neutral-100"
        >
          <FaArrowRightLong className="size-5" />
        </Button>
      </div>
    </section>
  );
};

export default Review;
