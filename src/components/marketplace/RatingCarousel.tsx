"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  RatingFeedbackIcon,
  RatingSupportIcon,
  RatingUserIcon,
  RatingVerifyIcon,
} from "../ui/icon";

type PropType = {
  slides: Number[];
  options?: EmblaOptionsType;
};

const Ratings = [
  {
    icon: <RatingVerifyIcon />,
    title: "Verified buyer reviews",
  },
  {
    icon: <RatingUserIcon />,
    title: "Top rated Star ratings",
  },
  {
    icon: <RatingFeedbackIcon />,
    title: "Performance feedback",
  },
  {
    icon: <RatingSupportIcon />,
    title: "Support quality ratings",
  },
];

const RatingCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla_rating">
      <div className="embla__viewport_rating" ref={emblaRef}>
        <div className="embla__container_rating">
          {Ratings.map((item, index) => (
            <div className="embla__slide_rating" key={index}>
              <div className="embla__slide__number_rating py-14 px-7 bg-gradient-to-b from-[#2B0A47] to-[#09030E] transition-all duration-300 hover:bg-none hover:bg-[#512F7C]">
                {item.icon}
                <h1 className="!text-start !text-[30px] !font-[400]">
                  {item.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingCarousel;
