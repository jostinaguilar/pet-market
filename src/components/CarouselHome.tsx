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
          <div className="min-w-0 text-center bg-gray-300 flex-0 h-60">
            Slide 1
          </div>
          <div className="min-w-0 text-center bg-gray-300 flex-0 h-60">
            Slide 2
          </div>
          <div className="min-w-0 text-center bg-gray-300 flex-0 h-60">
            Slide 3
          </div>
        </div>
      </div>
      <button
        onClick={scrollPrev}
        type="button"
        className="absolute p-1 transition duration-300 -translate-y-1/2 bg-transparent rounded-full left-3 hover:bg-black/10 text-pumpkin-600 top-1/2"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={scrollNext}
        type="button"
        className="absolute p-1 transition duration-300 -translate-y-1/2 bg-transparent rounded-full hover:bg-black/10 text-pumpkin-600 right-3 top-1/2"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-2 left-1/2">
        {scrollSnaps.map((_, index) => (
          <DotButtonCarousel
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx('w-3 h-3 bg-gray-600 rounded-full', {
              'bg-pumpkin-600': index === seletedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
}
