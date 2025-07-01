"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full flex items-end overflow-hidden z-0">
      <div className="absolute top-0 left-0 w-full h-full select-none">
        <Image
          src="/assets/home/hero-top.png"
          width={1840}
          height={800}
          alt="hero-top"
          className="w-[300%] absolute top-0 left-[50%] -translate-x-[55%] z-0 min-w-[1640px]"
        />
        <Image
          src="/assets/home/hero-left-top-light.png"
          width={519}
          height={519}
          alt="top-left"
          className="absolute top-0 left-0 z-10 "
        />
        <Image
          src="/assets/home/hero-right-top.png"
          width={502}
          height={580}
          alt="right-left"
          className="absolute top-0 right-0 z-10"
        />
        <Image
          src="/assets/home/hero-left.png"
          width={259}
          height={321}
          alt="left"
          className="absolute top-[15%] -left-[110px] md:left-0 z-20"
        />
        <Image
          src="/assets/home/hero-right.png"
          width={175}
          height={338}
          alt="left"
          className="absolute top-[35%] -right-[80px] md:right-0 z-20"
        />
        <Image
          src="/assets/home/hero-bottom.png"
          width={1600}
          height={560}
          alt="left"
          className="w-[230%] absolute bottom-0 left-[50%] -translate-x-[50%] z-0 min-w-[1600px]"
        />
        <Image
          src="/assets/home/hero-graph.png"
          width={1600}
          height={560}
          alt="left"
          className="absolute bottom-0 md:bottom-[30px] left-[50%] -translate-x-[50%] z-10 min-w-[1600px]"
        />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-3 pt-[140px] lg:pt-[192px] relative z-30 flex flex-col items-center gap-3">
        <h2 className="!text-[20px] md:!text-[24px] lg:!text-[36px]">
          WELCOME TO THE FUTURE OF
        </h2>
        <h5 className="text-[48px] md:text-[64px] lg:text-[120px] font-riosark font-[400] text-center leading-[100%] bg-gradient-to-r from-[#4E4EE41A] via-[#ffffff] to-[#4E4EE41A] bg-clip-text text-transparent">
          FINANCIAL FREEDOM
        </h5>
        <p className="text-center max-w-[1224px]">
          At FX Utopia, we&apos;re building the most dynamic and empowering
          Forex & Crypto community on the planet. Whether you&apos;re just
          getting started or looking to sharpen your edge, our platform delivers
          everything you need to succeed.
        </p>
        <Button variant="common" className="common-button !w-[247px] mt-[16px]">
          Join The Community
        </Button>
        <Image
          src="/assets/home/hero-main.png"
          width={1012}
          height={602}
          alt="left"
          className="mt-[30px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
