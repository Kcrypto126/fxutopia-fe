"use client0";

import Image from "next/image";
import Container from "../layouts/Container";
import { Button } from "../ui/button";
import { IconCircleArrowUpFilled } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const user = {
  avatar: "/assets/home/default-user.jpg",
  username: "@forex",
};

const CARD_COUNT = 3;
const CARDS = Array.from(Array(CARD_COUNT).keys());

const SignalSection = () => {
  return (
    <Container className="relative z-0 py-8 md:py-20 overflow-hidden">
      <Image
        src="/assets/home/signal-bg.png"
        width={1300}
        height={800}
        alt="signal"
        className="absolute bottom-0 left-[50%] -translate-x-[50%] z-10 hidden lg:block"
      />
      <div className="relative z-20 flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-2">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-6">
            <h1>Trading Signals</h1>
            <p className="text-center md:text-start">
              Latest trading opportunities from our verified signal providers
            </p>
          </div>
          <Button variant="animation">View All SIgnals</Button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {CARDS.map((index) => (
            <div
              key={index}
              className="w-full flex-1 flex flex-col rounded-[8px] overflow-hidden font-inter border-[1px] border-transparent hover:border-[#22C55E] transition-all duration-300"
            >
              <div className="flex justify-between gap-2 bg-gradient-to-b p-[14px] from-[#242C45] to-[#1E273A]">
                <div className="flex gap-2 items-center">
                  <IconCircleArrowUpFilled
                    width="46"
                    height="46"
                    color="#22C55E"
                  />
                  <div className="flex flex-col gap-2">
                    <h5 className="text-[26px] font-[600] leading-[100%]">
                      BUY
                    </h5>
                    <h5 className="text-[18px] text-[#22C55E] font-[500] leading-[100%]">
                      EUR/USD
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-2">
                  <h5 className="text-[14px] text-[#9194A0] font-[500]">
                    Posted
                  </h5>
                  <h5 className="text-[16px] font-[500]">10 min ago</h5>
                </div>
              </div>
              <div className="flex flex-col gap-7 px-[14px] py-7 bg-gradient-to-b from-[#1A062C] to-[#050109]">
                <div className="flex gap-2 justify-between">
                  <div className="flex flex-col gap-3">
                    <h5 className="text-[16px] text-[#9194A0] font-[500]">
                      Entry
                    </h5>
                    <h5 className="text-[20px] font-[500]">1.0878-1.0866</h5>
                    <h5 className="text-[16px] text-[#9194A0] font-[500]">
                      Take Profit 1
                    </h5>
                    <h5 className="text-[16px] text-[#22C55E] font-[500]">
                      1.0866
                    </h5>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5 className="text-[16px] text-[#9194A0] font-[500]">
                      Stop Loss
                    </h5>
                    <h5 className="text-[20px] text-[#E30000] font-[500]">
                      1.0878
                    </h5>
                    <h5 className="text-[16px] text-[#9194A0] font-[500]">
                      Take Profit 2
                    </h5>
                    <h5 className="text-[16px] text-[#22C55E] font-[500]">
                      1.0866
                    </h5>
                  </div>
                </div>
                <div className="flex gap-2 justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 rounded-full">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback className="rounded-full">
                        CN
                      </AvatarFallback>
                    </Avatar>
                    <h5 className="text-[16px] font-[500]">{user.username}</h5>
                  </div>
                  <h5 className="py-[4px] px-[8px] bg-[#0C281E] rounded-full text-[#22C55E] text-[14px] font-[500]">
                    85% Win Rate
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SignalSection;
