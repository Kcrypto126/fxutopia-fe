"use client";

import Container from "../layouts/Container";
import { ChartIcon, RobotIcon, ShakIcon, GraphIcon } from "../ui/icon";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

const markets = [
  {
    icon: <ChartIcon width="80" height="80" />,
    title: "Tools & Indicators",
    text: "Advanced technical analysis tools and custom indicators",
  },
  {
    icon: <RobotIcon width="80" height="80" />,
    title: "EA Bots",
    text: "Automated trading solutions and expert advisors",
  },
  {
    icon: <ShakIcon width="80" height="80" />,
    title: "Broker Offers",
    text: "Exclusive deals and promotions from trusted brokers",
  },
  {
    icon: <GraphIcon width="80" height="80" />,
    title: "Premium Signals",
    text: "High-probability trading signals from expert traders",
  },
];

const MarketplaceSection = () => {
  return (
    <Container className="bg-[#000] py-8 md:py-20">
      <div className="flex flex-col items-center gap-8 md:gap-20">
        <div>
          <h1>Marketplace</h1>
          <p className="text-center mt-3 md:mt-6">
            Discover premium tools, indicators, and services to enhance your
            trading
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {markets.map((item) => (
            <div
              key={item.title}
              className="w-full h-full flex flex-col rounded-2xl overflow-hidden"
            >
              <div className="flex justify-center items-center !h-[180px] md:!h-[240px] bg-gradient-to-br from-[#3C1661] via-[#2A285E] to-[#094957]">
                {item.icon}
              </div>
              <div className="w-full flex flex-col gap-3 p-6 bg-[#07020B] border-b border-x rounded-b-2xl border-[#5F5F5F]">
                <div>
                  <h5 className="text-xl font-[600]">{item.title}</h5>
                  <p className="mt-2 text-[#819EAF]">{item.text}</p>
                </div>
                <Link href="#" className="flex gap-[6px] items-center">
                  <h5 className="text-[#03BEDC] text-[14px] font-[600]">
                    Browse Tools
                  </h5>
                  <IconArrowRight width="20" height="20" color="#03BEDC" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MarketplaceSection;
