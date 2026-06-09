import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

type Options = {
  loop?: boolean;
};

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  options: Options = {},
): UsePrevNextButtonsType => {
  const { loop = false } = options;
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(!loop);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(!loop);

  const onPrevButtonClick = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(
    (api: EmblaCarouselType) => {
      if (loop) {
        setPrevBtnDisabled(false);
        setNextBtnDisabled(false);
        return;
      }
      setPrevBtnDisabled(!api.canScrollPrev());
      setNextBtnDisabled(!api.canScrollNext());
    },
    [loop],
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
