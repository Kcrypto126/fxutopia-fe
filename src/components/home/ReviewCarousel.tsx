"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { EmblaOptionsType } from "embla-carousel";
import Review from "./Review";

type PropType = {
  slides: {
    user: {
      avatar: string;
      full_name: string;
      username: string;
    };
    text: string;
  }[];
  options?: EmblaOptionsType;
  direction?: string;
};

const ReviewCarousel = (props: PropType) => {
  const { slides, options, direction } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 }),
  ]);

  return (
    <div className="embla_review z-0">
      <div
        className={`${
          direction === "left"
            ? "embla__viewport_review_1"
            : "embla__viewport_review_2"
        }`}
        ref={emblaRef}
      >
        <div className="embla__container_review">
          {slides.map((item, index) => (
            <div key={index} className="embla__slide_review">
              <Review user={item.user} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
