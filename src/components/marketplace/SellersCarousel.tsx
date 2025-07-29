"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Seller from "./Seller";
import { UserProps } from "./Seller";

type PropType = {
  slides: UserProps[];
  options?: EmblaOptionsType;
};

const SellersCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla_seller">
      <div className="embla__viewport_seller" ref={emblaRef}>
        <div className="embla__container_seller">
          {slides.map((item, index) => (
            <div className="embla__slide_seller" key={index}>
              <div className="embla__slide__number_seller">
                <Seller data={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellersCarousel;
