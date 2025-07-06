"use client";

import Image from "next/image";

import Container from "@/components/layouts/Container";
import FilterSection from "@/components/community/FilterSection";
import { CategorySection } from "@/components/community/CategorySection";
import CategoryDescriptionSection from "@/components/community/CategoryDescriptionSection";
import LatestDiscussionSection from "@/components/community/LatestDiscussionSection";

const Categories = [
  {
    icon: "",
    text: "",
  },
];

const Community = () => {
  return (
    <Container className="relative z-0 py-20 lg:pt-48 lg:pb-32">
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
        className="absolute top-0 left-0 z-10 w-auto h-auto"
      />
      <Image
        src="/assets/home/hero-right-top.png"
        width={502}
        height={580}
        alt="right-left"
        className="absolute top-0 right-0 z-10 w-auto h-auto"
      />
      <div className="relative z-10 flex flex-col gap-6 lg:gap-20 w-full">
        <FilterSection />
        <div className="flex flex-col xl:flex-row gap-10 justify-between">
          <div className="flex flex-col lg:flex-row gap-10">
            <CategorySection />
            <CategoryDescriptionSection />
          </div>
          <LatestDiscussionSection />
        </div>
      </div>
    </Container>
  );
};

export default Community;
