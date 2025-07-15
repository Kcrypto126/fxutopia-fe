"use client";

import CalculatorSection from "@/components/economic/CalculatorSection";
import MainSection from "@/components/economic/MainSection";
import SignalChartSection from "@/components/economic/SignalChartSection";
import HeroSection from "@/components/education/HeroSection";

const data = {
  title: "Stay Ahead with Real-Time Global Market Events",
  description:
    "Track the most important financial events and economic indicators that move the Forex and Crypto markets — all in one place, updated live and tailored for traders.",
};

const EconomicCalendar = () => {
  return (
    <div>
      <HeroSection data={data} />
      <MainSection />
      <CalculatorSection />
      <SignalChartSection />
    </div>
  );
};

export default EconomicCalendar;
