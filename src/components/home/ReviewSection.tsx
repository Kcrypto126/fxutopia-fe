"use client";

import EmblaCarousel, { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";

import ReviewCarousel from "./ReviewCarousel";

const OPTIONS1: EmblaOptionsType = {
  dragFree: true,
  loop: true,
};
const OPTIONS2: EmblaOptionsType = {
  dragFree: true,
  direction: "rtl",
  loop: true,
};

const SLIDES = [
  {
    user: {
      avatar: "/assets/home/review-avatar1.jpg",
      full_name: "Zara Qadir",
      username: "@fab3304",
    },
    text: "Playing around with @fxutopia suddenly made me feeling inspired to launch that side project.",
  },
  {
    user: {
      avatar: "/assets/home/review-avatar2.jpg",
      full_name: "Fabrizio Fernandez",
      username: "@fab3304",
    },
    text: "Testing out @fxutopia responsive design. That's the template we have all been waiting for. My mobile-first heart is doing a happy dance.",
  },
  {
    user: {
      avatar: "/assets/home/review-avatar3.jpg",
      full_name: "Felix Beaumont ",
      username: "@felixbs",
    },
    text: "Digging into @fxutopia. Those shadows are giving me serious design envy.",
  },
  {
    user: {
      avatar: "/assets/home/review-avatar4.jpg",
      full_name: "Olivia Blackwood",
      username: "@olivia1992",
    },
    text: "@fxutopia is not messing around with its component library game.",
  },

  {
    user: {
      avatar: "/assets/home/review-avatar5.jpg",
      full_name: "Kai Nakamura",
      username: "@KaiNakWaves",
    },
    text: "Just made my first website with @fxutopia. Its flexibility is speaking my language. No drama, just seamless integration.",
  },
  {
    user: {
      avatar: "/assets/home/review-avatar6.jpg",
      full_name: "Darius Flynn",
      username: "@flynnn",
    },
    text: "Exploring @fxutopia sleek UI. It's like a dark mode enthusiast's playground.",
  },
  {
    user: {
      avatar: "/assets/home/review-avatar7.jpg",
      full_name: "Esme Rothschild",
      username: "@EsmeRothArt",
    },
    text: "@fxutopia is siiiiick. That globe graphic though. Making me feel like I'm building websites for a sci-fi movie.",
  },
];

const ReviewSection = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-20 py-8 md:py-20 bg-[#060015]">
      <div>
        <h1>Trusted by Thousands Around the World</h1>
        <p className="text-center mt-3 md:mt-6">
          Real experiences from our customers
        </p>
      </div>
      <div className="relative flex flex-col gap-6 w-full max-w-[1600px] mx-auto overflow-hidden">
        <Image
          src="/assets/home/left-side.png"
          alt="left-side"
          width={200}
          height={576}
          className="h-full absolute top-0 -left-[160px] sm:-left-[5px] z-20"
        />
        <Image
          src="/assets/home/right-side.png"
          alt="right-side"
          width={200}
          height={576}
          className="h-full absolute top-0 -right-[160px] sm:-right-[5px] z-20"
        />
        <ReviewCarousel slides={SLIDES} options={OPTIONS1} direction="left" />
        <ReviewCarousel slides={SLIDES} options={OPTIONS2} direction="right" />
        <ReviewCarousel slides={SLIDES} options={OPTIONS1} direction="left" />
      </div>
    </div>
  );
};

export default ReviewSection;
