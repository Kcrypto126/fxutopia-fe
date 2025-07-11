"use client";

import Image from "next/image";
import React from "react";
import ReactDOM from "react-dom/client";
import WhyFxUtopiaCarousel from "./WhyFxUtopiaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "./css/embla.css";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const WhyFxUtopiaSection = () => {
  return (
    <div className="relative w-full py-8 md:py-30 flex flex-col gap-8 lg:gap-36 px-3">
      <Image
        src="/assets/about-us/whyutopia.png"
        width={1600}
        height={1600}
        alt="snipet"
        className="absolute top-[50%] -translate-y-[60%] left-[50%] -translate-x-[50%] -z-10"
      />
      <div className="relative w-full flex flex-col gap-8 lg:gap-20">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-2">
          <h1 className="!text-center lg:!text-start">Why FX Utopia?</h1>
          <p className="max-w-full lg:max-w-[560px] !text-center lg:!text-start">
            Unlock your trading potential with a platform designed for learning,
            growth, and real results. Whether you're just starting out or
            scaling up, FX Utopia gives you the tools, knowledge, and support to
            succeed.
          </p>
        </div>
        <WhyFxUtopiaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="relative z-0 max-w-[1440px] w-full mx-auto">
        <Image
          src="/assets/about-us/snipet-1.png"
          width={208}
          height={80}
          alt="snipet"
          className="absolute left-0 bottom-0 z-10 hidden lg:block"
        />
        <Image
          src="/assets/about-us/snipet-2.png"
          width={208}
          height={80}
          alt="snipet"
          className="absolute top-[30%] right-0 z-10 hidden lg:block"
        />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/assets/about-us/whyfxutopia.png"
            width={1102}
            height={188}
            alt="about-us"
            className="lg:-mb-15"
          />
          <h1 className="max-w-[751px] !text-center">
            Designed with Real Traders in Mind
          </h1>
          <p className="max-w-[826px] !text-center mt-3 md:mt-6">
            At FX Utopia, our team is made up of experienced Forex and Crypto
            traders, educators, developers, and market analysts. We've lived the
            journey — from beginner confusion to breakthrough moments.
            <br />
            <br /> That's why our platform is built with real-world experience,
            not theory. Every tool, course, and community feature is created to
            solve problems we've faced ourselves. We don't just talk about
            trading — we've been in the markets, and we know what truly helps.
          </p>
          <Image
            src="/assets/about-us/snipet-1.png"
            width={208}
            height={80}
            alt="snipet"
            className="block lg:hidden mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyFxUtopiaSection;
