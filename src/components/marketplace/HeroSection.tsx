"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
}

const HeroSection = ({ data }: { data: HeroProps }) => {
  return (
    <div className="relative w-full flex items-end overflow-hidden" id="home">
      <div className="absolute top-0 left-0 w-full h-full select-none">
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
          className="w-[230%] absolute bottom-0 left-[50%] -translate-x-[50%] z-0 min-w-[1600px] opacity-60"
        />
        <Image
          src="/assets/home/hero-graph.png"
          width={1600}
          height={560}
          alt="left"
          className="absolute bottom-0 left-[50%] -translate-x-[50%] z-10 min-w-[1600px]"
        />
      </div>

      <div className="max-w-[1250px] w-full mx-auto min-h-screen md:min-h-[834px] px-3 relative z-30 flex flex-col items-center justify-center gap-3">
        <h5 className="text-[30px] md:text-[40px] lg:text-[80px] uppercase font-riosark font-[400] text-center leading-[110%] md:leading-[105%] bg-gradient-to-r from-[#4E4EE41A] via-[#ffffff] to-[#4E4EE41A] bg-clip-text text-transparent">
          {data.title}
        </h5>
        <p className="text-center max-w-[1224px]">{data.description}</p>
      </div>
    </div>
  );
};

export default HeroSection;
