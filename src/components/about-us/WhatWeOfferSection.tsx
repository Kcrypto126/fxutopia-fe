"use client";

import Image from "next/image";
import Container from "../layouts/Container";

const Offers = [
  {
    img: "/assets/about-us/about-card-1.png",
    title: "Education That Actually Educates",
    description:
      "Our platform offers structured courses for traders of all levels — from complete beginners to seasoned professionals.",
  },
  {
    img: "/assets/about-us/about-card-2.png",
    title: "Essential Tools & Utilities",
    description:
      "We equip you with the tools every trader needs: real-time charts, custom indicators, market scanners, calculators, and economic calendars.",
  },
  {
    img: "/assets/about-us/about-card-3.png",
    title: "Signal Sharing & Leaderboards",
    description:
      "Explore performance-based leaderboards to discover traders in the community. Follow their trades, learn or share your own signals to gain recognition.",
  },
];

const WhatWeOfferSection = () => {
  return (
    <Container className="py-8 md:py-30 bg-[#000]">
      <div className="flex flex-col gap-8 md:gap-20">
        <div>
          <h1>What We Offer</h1>
          <p className="!text-center">
            FX Utopia brings together everything a modern trader needs in one
            place:
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
          {Offers.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-3 bg-[#381E5B] rounded-[20px] mx-auto p-4 md:py-9 md:px-6 max-w-[464px]"
            >
              <Image
                src={item.img}
                width={410}
                height={292}
                alt="about"
                className="w-[410px] h-auto"
              />
              <h1 className="!text-start !text-[20px] md:!text-[25px] max-w-[351px] mt-3">
                {item.title}
              </h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhatWeOfferSection;
