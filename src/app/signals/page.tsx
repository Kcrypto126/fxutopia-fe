"use client";

import HeroSection from "@/components/education/HeroSection";
import SignalProvidersSection from "@/components/signals/SignalProvidersSection";

const HeroData = {
  title: "Your Gateway to Elite Trading Signals & Tools",
  description:
    "Join a global network of trusted signal providers, advanced trading groups, and real-time profit strategies — all in one powerful hub.",
};

const Signals = () => {
  return (
    <>
      <HeroSection data={HeroData} />
      <SignalProvidersSection />
    </>
  );
};

export default Signals;
