"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import TopTrader from "./TopTrader";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const TopTraderCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla_trader">
      <div className="embla__viewport_trader" ref={emblaRef}>
        <div className="embla__container_trader">
          {slides.map((index) => (
            <div className="embla__slide_trader" key={index}>
              <div className="embla__slide__number_trader">
                <TopTrader />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTraderCarousel;
