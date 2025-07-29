"use client";

import HeroSection from "@/components/education/HeroSection";
import ReviewSection from "@/components/home/ReviewSection";
import ExpertResourceSection from "@/components/marketplace/ExpertResourceSection";
import RatingSection from "@/components/marketplace/RatingSection";
import SellersSection from "@/components/marketplace/SellersSection";

const HeroData = {
  title: "FX UTOPIA MARKETPLACE",
  description:
    "Whether you're looking to optimize your Forex performance, automate your crypto strategies, or access advanced indicators — our marketplace delivers verified, vetted, and value-packed products from experienced creators.",
};

const MarketPlace = () => {
  return (
    <div className="md:pb-20">
      <HeroSection data={HeroData} />
      <ExpertResourceSection />
      <SellersSection />
      <RatingSection />
      <ReviewSection />
    </div>
  );
};

export default MarketPlace;
