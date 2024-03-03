import { EmblaCarouselType } from 'embla-carousel';
import { useCallback, useEffect, useState } from 'react';

export function useDotButton(emblaApi: EmblaCarouselType | undefined) {
  const [seletedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelected = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelected(emblaApi);

    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelected);
    emblaApi.on('select', onSelected);
  }, [emblaApi, onInit, onSelected]);

  return { seletedIndex, scrollSnaps, onDotButtonClick };
}
