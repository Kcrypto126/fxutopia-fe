"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import WhyUtopiaCard from "./WhyUtopiaCard";
import {
  TraderIcon,
  EducationIcon,
  HonestIcon,
  GlobalIcon,
  SignalIcon,
} from "../ui/icon";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const WhyFxs = [
  {
    icon: <SignalIcon />,
    title: "Live Signals & Trade Ideas",
    description:
      "Follow real-time signals and ideas from experienced traders inside the community.",
  },
  {
    icon: <TraderIcon />,
    title: "Trader-Focused Marketplace",
    description:
      "Access vetted signals, bots, mentors, and tools designed to help you win.",
  },
  {
    icon: <EducationIcon />,
    title: "Education That Empowers",
    description:
      "Learn Forex and Crypto with expert-led courses, live sessions, and easy-to-follow guides.",
  },
  {
    icon: <HonestIcon />,
    title: "Honest Reviews & Insights",
    description:
      "Get unbiased feedback on brokers, tools, and services — from real traders.",
  },
  {
    icon: <GlobalIcon />,
    title: "Global Trading Community",
    description:
      "Connect with traders worldwide. Share, learn, and grow together.",
  },
];

const TopTraderCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <div className="embla_why">
      <div className="embla__viewport_why" ref={emblaRef}>
        <div className="embla__container_why">
          {WhyFxs.map((item, index) => (
            <div className="embla__slide_why" key={index}>
              <div className="embla__slide__number_why">
                <div className="h-full bg-gradient-to-b rounded-[20px] px-3 md:px-9 py-12 flex flex-col items-start gap-2 border-[1px] border-[#361056] from-[#2B0A47] to-[#09030E]">
                  {item.icon}
                  <h1 className="!text-start !text-[30px] !mt-20">
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTraderCarousel;
