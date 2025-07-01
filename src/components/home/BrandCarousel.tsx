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

const brands = [
  {
    icon: <IconCalendarWeek width="40" height="40" color="#fff" />,
    text: "Calendar",
  },
  {
    icon: <IconBuildingBank width="40" height="40" color="#fff" />,
    text: "Marketplace",
  },
  {
    icon: <IconAntennaBars5 width="40" height="40" color="#fff" />,
    text: "Signal Sharing",
  },
  {
    icon: <IconBrowserPlus width="40" height="40" color="#fff" />,
    text: "Blogs",
  },
  {
    icon: <IconStarFilled width="40" height="40" color="#fff" />,
    text: "Broker Reviews",
  },
];

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const BrandCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {brands.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <div className="flex flex-col items-center justify-center gap-4">
                  {item.icon}
                  <h5 className="font-[700] text-[18px]">{item.text}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default BrandCarousel;
