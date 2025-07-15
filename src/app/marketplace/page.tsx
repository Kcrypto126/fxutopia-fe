"use client";

import HeroSection from "@/components/education/HeroSection";
import ExpertResourceSection from "@/components/marketplace/ExpertResourceSection";
import SellersSection from "@/components/marketplace/SellersSection";

const data = {
  title: "FX UTOPIA MARKETPLACE",
  description:
    "Whether you're looking to optimize your Forex performance, automate your crypto strategies, or access advanced indicators — our marketplace delivers verified, vetted, and value-packed products from experienced creators.",
};

const MarketPlace = () => {
  return (
    <>
      <HeroSection data={data} />
      <ExpertResourceSection />
      <SellersSection />
    </>
  );
};

export default MarketPlace;
