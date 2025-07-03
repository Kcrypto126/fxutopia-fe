"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  IconCalendarWeek,
  IconBuildingBank,
  IconAntennaBars5,
  IconBrowserPlus,
  IconStarFilled,
} from "@tabler/icons-react";

import TopTrader from "./TopTrader";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

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
