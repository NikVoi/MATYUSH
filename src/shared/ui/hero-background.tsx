"use client";

import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Широкий landscape-hero: на мобиле — шире контейнер, чтобы в кадре остались обе модели.
 */
export function HeroBackground({
  src,
  alt,
  priority = true,
}: HeroBackgroundProps) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden sm:hidden">
        <div className="absolute top-0 left-1/2 h-full w-[175%] max-w-none -translate-x-1/2">
          <Image
            src={src}
            alt={alt}
            priority={priority}
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-[50%_44%]"
          />
        </div>
      </div>

      <div className="absolute inset-0 hidden overflow-hidden sm:block">
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-[50%_42%] lg:object-center"
        />
      </div>
    </>
  );
}
