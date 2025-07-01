"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import HeroSection from "@/components/home/HeroSection";
import BrandSection from "@/components/home/BrandSection";
import TrustedSection from "@/components/home/TrustedSection";
import WhyFxSection from "@/components/home/WhyFxSection";
import SignalSection from "@/components/home/SignalSection";
import TopTradersSection from "@/components/home/TopTradersSection";
import TradingCommandSection from "@/components/home/TradingCommandSection";
import MarketplaceSection from "@/components/home/MarketplatSection";
import JoinCommunitySection from "@/components/home/JoinCommunitySection";
import ReviewSection from "@/components/home/ReviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <TrustedSection />
      <WhyFxSection />
      <SignalSection />
      <TopTradersSection />
      <TradingCommandSection />
      <MarketplaceSection />
      <JoinCommunitySection />
      <ReviewSection />
    </>
  );
}
