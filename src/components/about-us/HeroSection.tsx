"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden px-3">
      <Image
        src="/assets/home/hero-left.png"
        width={259}
        height={321}
        alt="left"
        className="absolute top-[15%] -left-[110px] md:left-0 -z-10"
      />
      <Image
        src="/assets/home/hero-right.png"
        width={175}
        height={338}
        alt="left"
        className="absolute top-[35%] -right-[80px] md:right-0 -z-10"
      />
      <Image
        src="/assets/home/hero-bottom.png"
        width={1600}
        height={560}
        alt="left"
        className="w-[230%] absolute bottom-0 left-[50%] -translate-x-[50%] -z-20 min-w-[1600px] opacity-60"
      />
      <Image
        src="/assets/home/hero-graph.png"
        width={1600}
        height={560}
        alt="left"
        className="absolute bottom-0 left-[50%] -translate-x-[50%] -z-10 min-w-[1600px]"
      />

      <div className="max-w-[1440px] mx-auto w-full min-h-fit py-19 lg:py-30 relative flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-8">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <h1 className="xl:!text-[70px] !leading-[100%] lg:!text-start bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#4E4EE41A] bg-clip-text text-transparent">
            Where Traders Learn, Grow & Thrive Together
          </h1>
          <p className="text-center lg:text-start max-w-[744px]">
            At FX Utopia, we&apos;re building more than just a platform —
            we&apos;re creating a home for Forex and Crypto enthusiasts who
            value real education, powerful tools, and a strong community.
          </p>
          <Link href="/" className="mt-4 lg:mt-8">
            <Button variant="common" className="login-button !w-[247px]">
              Join The Community
            </Button>
          </Link>
        </div>
        <div className="max-w-[631px] w-full h-fit">
          <Image
            src="/assets/about-us/about-hero.png"
            width={631}
            height={527}
            alt="about-hero"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
