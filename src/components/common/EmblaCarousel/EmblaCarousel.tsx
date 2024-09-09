'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { EmblaOptionsType } from 'embla-carousel';
import styles from './EmblaCarousel.module.css';

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: true })]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerDown', () => {
        const autoScroll = emblaApi.plugins().autoScroll;
        if (autoScroll) autoScroll.stop();
      });

      emblaApi.on('pointerUp', () => {
        const autoScroll = emblaApi.plugins().autoScroll;
        if (autoScroll) autoScroll.play();
      });
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;


