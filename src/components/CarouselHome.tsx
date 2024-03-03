import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarrousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { useDotButton } from '../hooks/useDotButtonCarousel';
import { DotButtonCarousel } from './ui/DotButtonCarousel';

export function CarouselHome() {
  const [emblaRef, emblaApi] = useEmblaCarrousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const { onDotButtonClick, scrollSnaps, seletedIndex } =
    useDotButton(emblaApi);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden lg:rounded-lg">
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
      <button onClick={scrollPrev} type="button">
        Prev
      </button>
      <button onClick={scrollNext} type="button">
        Next
      </button>
      <div>
        {scrollSnaps.map((_, index) => (
          <DotButtonCarousel
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx('w-4 h-4 bg-gray-600 rounded-full', {
              'bg-pumpkin-600': index === seletedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
}
