"use client";

import React from "react";
import Image from "next/image";
import TrustedCarousel from "./TrustedCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";
import { ScrollToIcon } from "../ui/icon";

const OPTIONS1: EmblaOptionsType = {
  dragFree: true,
  loop: true,
};
const OPTIONS2: EmblaOptionsType = {
  dragFree: true,
  direction: "rtl",
  loop: true,
};
const SLIDESLEFT = [
  "/assets/home/Icon1.png",
  "/assets/home/Icon2.png",
  "/assets/home/Icon3.png",
  "/assets/home/Icon4.png",
  "/assets/home/Icon5.png",
  "/assets/home/Icon4.png",
  "/assets/home/Icon5.png",
];
const SLIDESRIGHT = [
  "/assets/home/Icon7.png",
  "/assets/home/Icon8.png",
  "/assets/home/Icon9.png",
  "/assets/home/Icon10.png",
  "/assets/home/Icon11.png",
  "/assets/home/Icon8.png",
  "/assets/home/Icon9.png",
];
const FEATURES = [
  {
    icon: "/assets/home/featured1.png",
    title: "Signal Sharing Platform",
    text: "Access high-quality trading signals from verified professionals",
  },
  {
    icon: "/assets/home/featured2.png",
    title: "Marketplace for Traders",
    text: "Buy and sell trading tools, indicators, and strategies",
  },
  {
    icon: "/assets/home/featured3.png",
    title: "Broker Reviews & Tools ",
    text: "Transparent reviews and comparison tools for brokers",
  },
  {
    icon: "/assets/home/featured4.png",
    title: "Education Resources",
    text: "Free courses, webinars, and guides for all levels",
  },
  {
    icon: "/assets/home/featured5.png",
    title: "Market Updates & News",
    text: "Stay informed with real-time market analysis",
  },
];

const TrustedSection = () => {
  return (
    <div className="w-full h-fit relative z-0">
      <Image
        src="/assets/home/trusted-center.png"
        width={900}
        height={900}
        alt="trusted-center"
        className="absolute top-24 left-[50%] -translate-x-[50%] hidden sm:block"
      />
      <Image
        src="/assets/home/trusted-left.png"
        width={629}
        height={371}
        alt="trusted-left"
        className="absolute top-0 left-0 hidden md:block"
      />
      <Image
        src="/assets/home/trusted-right.png"
        width={829}
        height={371}
        alt="trusted-right"
        className="absolute top-0 right-0 hidden md:block"
      />
      <Image
        src="/assets/home/trusted-bottom.png"
        width={1500}
        height={100}
        alt="trusted-bottom"
        className="absolute bottom-0 left-[50%] -translate-x-[50%]"
      />

      <div className="w-full flex flex-col items-center gap-16 sm:gap-28 py-8 sm:py-12">
        <div className="flex items-center gap-3">
          <ScrollToIcon width="23" height="38" />
          {/* <span className="font-[400] text-[13px]">Scroll to Explore</span> */}
        </div>
        <div className="w-full flex flex-col items-center gap-8 sm:gap-14">
          <h2 className="max-w-[696px] px-3 relative z-30">
            Trusted By Thousands of Forex & Crypto Hub Worldwide
          </h2>
          <div className="relative w-full h-[96px] sm:h-[268px] flex items-center justify-between">
            <TrustedCarousel
              slides={SLIDESRIGHT}
              options={OPTIONS2}
              direction="right"
            />
            <TrustedCarousel
              slides={SLIDESLEFT}
              options={OPTIONS1}
              direction="left"
            />
            <Image
              src="/assets/home/Icon6big.png"
              width={268}
              height={268}
              alt="trust-center-icon"
              className="w-[96px] h-[96px] sm:w-[268px] sm:h-[268px] absolute top-0 left-[50%] -translate-x-[50%] rounded-full z-30 shadow-[0_0_65px_#ffffff95]"
            />
          </div>
        </div>
        <div className="relative z-30 flex flex-col items-center px-3 w-full">
          <h5 className="hidden md:block text-[40px] md:text-[64px] lg:text-[170px] select-none uppercase font-riosark font-[400] text-center leading-[100%] bg-gradient-to-b from-[#7851A9] to-[#00000054] bg-clip-text text-transparent">
            Key Features
          </h5>
          <h1 className="max-w-[1018px] -mt-[10px] sm:-mt-[40px]">
            Key Features of FX Utopia Community
          </h1>
          <p className="mt-[24px] text-center">
            Everything a Crypto and Forex Traders Enthusiast Needs
          </p>
          <div className="mt-[32px] lg:mt-[100px] max-w-[1558px] w-full grid grid-cols-1 md:grid-cols-6 xl:grid-cols-5 gap-4">
            {FEATURES.map((item, index) => (
              <div
                key={item.title}
                className={`feature-card overflow-hidden relative z-0 w-full p-0.5 rounded-[12px] ${
                  index == 3 || index == 4
                    ? "md:col-span-3 xl:col-span-1"
                    : "md:col-span-2 xl:col-span-1"
                }`}
              >
                <div className="p-4 relative z-1 flex flex-col w-full h-full gap-4 bg-gradient-to-b from-[#2C0B48] to-[#09030E] border-[1px] border-[#361056] hover:border-[#00F2FF] rounded-[12px] transition-all duration-300">
                  <Image
                    src={item.icon}
                    width={52}
                    height={52}
                    alt="featured"
                  />
                  <h5 className="text-[22px] font-riosark leading-[36px]">
                    {item.title}
                  </h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
