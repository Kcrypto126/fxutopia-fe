"use client";

import HeroSection from "@/components/marketplace/HeroSection";
import LatestCourseSection from "@/components/marketplace/LatestCourseSection";
import TutorialSection from "@/components/marketplace/TutorialSection";
import EbookSection from "@/components/marketplace/EbookSection";

import { Courses } from "@/app/marketplace/data";

const Marketplace = () => {
  return (
    <>
      <HeroSection />
      <LatestCourseSection data={Courses} />
      <TutorialSection />
      <EbookSection data={Courses} />
    </>
  );
};

export default Marketplace;
