"use client";

import BrokerReviewSection from "@/components/broker-review/BrokerReviewSection";
import HeroSection from "@/components/education/HeroSection";

const HeroData = {
  title: "Real Reviews. Real Traders. Real Insights.",
  description:
    "Read honest reviews from verified traders. Share your experience with brokers, tools, bots, or services — and help others trade smarter.",
};

const BrokerReview = () => {
  return (
    <>
      <HeroSection data={HeroData} />
      <BrokerReviewSection />
    </>
  );
};

export default BrokerReview;
