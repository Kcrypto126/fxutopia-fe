"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  direction?: string;
};

const TrustedCarousel: React.FC<PropType> = (props) => {
  const { slides, options, direction } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 }),
  ]);

  return (
    <div className="embla_trust">
      <div
        className={`${
          direction == "left"
            ? "embla__viewport_trust_1"
            : "embla__viewport_trust_2"
        }`}
        ref={emblaRef}
      >
        <div className="embla__container_trust">
          {slides.map((item, index) => (
            <div className="embla__slide_trust" key={index}>
              <div className="embla__slide__number_trust">
                <Image
                  src={item}
                  width={108}
                  height={108}
                  alt="coin"
                  className="w-[48px] h-[48px] sm:w-[108px] sm:h-[108px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCarousel;
