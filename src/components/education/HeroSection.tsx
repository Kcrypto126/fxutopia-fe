"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
}

const HeroSection = ({ data }: { data: HeroProps }) => {
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

      <div className="max-w-[1440px] w-full mx-auto min-h-screen md:min-h-[834px] relative flex flex-col items-center justify-center gap-3">
        <h1 className="lg:!text-[80px] !leading-[110%] md:!leading-[105%] bg-gradient-to-r from-[#4E4EE41A] via-[#ffffff] to-[#4E4EE41A] bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="text-center max-w-[1124px]">{data.description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
