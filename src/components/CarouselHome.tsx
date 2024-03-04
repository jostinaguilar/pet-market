import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarrousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { useDotButton } from '../hooks/useDotButtonCarousel';
import { DotButtonCarousel } from './ui/DotButtonCarousel';
import { ChevronLeftIcon, ChevronRightIcon } from './ui/Icons';

export function CarouselHome() {
  const [emblaRef, emblaApi] = useEmblaCarrousel({ loop: true }, [Autoplay()]);

  const { onDotButtonClick, scrollSnaps, seletedIndex } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      emblaApi.plugins().autoplay.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      emblaApi.plugins().autoplay.reset();
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div ref={emblaRef} className="relative overflow-hidden lg:rounded-lg">
        <div className="flex">
          <div className="h-auto min-w-0 text-center bg-gray-300 flex-0">
            <picture>
              <source
                srcSet="/src/assets/carousel/bg-desktop-1.png"
                media="(min-width: 768px)"
              />
              <img src="/src/assets/carousel/bg-mobile-1.png" alt="Imagen 1" />
            </picture>
          </div>
          <div className="h-auto min-w-0 text-center bg-gray-300 flex-0">
            <picture>
              <source
                srcSet="/src/assets/carousel/bg-desktop-2.png"
                media="(min-width: 768px)"
              />
              <img src="/src/assets/carousel/bg-mobile-2.png" alt="Imagen 1" />
            </picture>
          </div>
        </div>
      </div>
      <button
        onClick={scrollPrev}
        type="button"
        className="absolute p-1 text-white transition duration-300 -translate-y-1/2 bg-transparent rounded-full left-3 hover:bg-black/10 top-1/2"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={scrollNext}
        type="button"
        className="absolute p-1 text-white transition duration-300 -translate-y-1/2 bg-transparent rounded-full hover:bg-black/10 right-3 top-1/2"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-3 left-1/2">
        {scrollSnaps.map((_, index) => (
          <DotButtonCarousel
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'w-2.5 h-2.5 bg-transparent ring-1 ring-white transition duration-300 rounded-full',
              {
                'bg-white': index === seletedIndex,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
