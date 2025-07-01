"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import { PortfolioIcon, AlertIcon, CalendarIcon } from "../ui/icon";
import { Button } from "../ui/button";

const commands = [
  {
    icon: <PortfolioIcon width="36" height="36" />,
    title: "Real-time Portfolio Tracking",
    text: "Monitor your performance across multiple accounts and assets",
  },
  {
    icon: <AlertIcon width="36" height="36" />,
    title: "Instant Signal Alerts",
    text: "Receive notifications for new signals matching your criteria",
  },
  {
    icon: <CalendarIcon width="36" height="36" />,
    title: "Economic Calendar",
    text: "Stay ahead with upcoming market-moving events",
  },
];

const TradingCommandSection = () => {
  return (
    <Container className="py-8 md:py-20 relative z-0">
      <Image
        src="/assets/home/command-left.png"
        width={600}
        height={500}
        alt="command"
        className="absolute bottom-0 left-0 z-0"
      />
      <Image
        src="/assets/home/command-right.png"
        width={600}
        height={500}
        alt="command"
        className="absolute top-0 right-0 z-0"
      />
      <div className="relative z-10 flex flex-col-reverse lg:flex-row  gap-8 justify-between items-center">
        <div className="flex flex-col gap-9">
          <div>
            <h1 className="!text-start">Your Trading command center</h1>
            <p className="mt-6 text-start">
              Get access to our powerful dashboard with all the tools you need
              to make informed trading decisions.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {commands.map((item) => (
              <div key={item.title} className="flex gap-4">
                {item.icon}
                <div className="flex flex-col gap-3">
                  <h5 className="uppercase text-[20px] md:text-[24px] font-riosark leading-[100%] font-[400]">
                    {item.title}
                  </h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="animation">Get Access Now</Button>
        </div>
        <div>
          <Image
            src="/assets/home/command.png"
            width={604}
            height={596}
            alt="command"
            className="rounded-[12px] w-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default TradingCommandSection;
