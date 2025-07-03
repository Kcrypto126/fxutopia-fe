"use client";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
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
import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import UnlockSection from "@/components/home/UnlockSection";

export default function Home() {
  return (
    <>
      <Header />
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
      <BlogSection />
      <FaqSection />
      <UnlockSection />
      <Footer />
    </>
  );
}
