"use client";

import AboutFxUtopiaSection from "@/components/about-us/AboutFxUtopiaSection";
import HeroSection from "@/components/about-us/HeroSection";
import WhatWeOfferSection from "@/components/about-us/WhatWeOfferSection";
import WhyFxUtopiaSection from "@/components/about-us/WhyFxUtopiaSection";
import JoinCommunitySection from "@/components/home/JoinCommunitySection";

const AboutUs = () => {
  return (
    <div className="pb-8 md:pb-35">
      <HeroSection />
      <AboutFxUtopiaSection />
      <WhatWeOfferSection />
      <WhyFxUtopiaSection />
      <JoinCommunitySection color="#000" />
    </div>
  );
};

export default AboutUs;
