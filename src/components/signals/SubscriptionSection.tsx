"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { IconCircleCheck } from "@tabler/icons-react";

const Plans = [
  {
    title: "Basic",
    amount: 39,
    tags: [
      "Access to 1:1 trading signals from one selected provider",
      "Weekly market recap & trade summary email",
      "Basic support via dashboard chat",
    ],
  },
  {
    title: "Pro",
    amount: 79,
    tags: [
      "Real-time trade alerts for multiple markets",
      "Daily technical and fundamental analysis breakdowns",
      "Private group chat access with signal providers",
      "Priority support & platform features",
    ],
  },
  {
    title: "Elite",
    amount: 129,
    tags: [
      "Full access to all premium signals (multiple providers)",
      "Exclusive strategy breakdowns & market playbooks",
      "1-on-1 consults with top-rated signal providers",
      "VIP-only chatroom with early trade calls & Q&A",
    ],
  },
];

const SubscriptionSection = () => {
  return (
    <div className="w-full space-y-8 lg:space-y-16">
      <div className="">
        <Image
          src="/assets/signal/subscription.png"
          width={1440}
          height={157}
          alt="subscribe"
          className="w-full h-auto"
        />
        <h1 className="!text-[30px] lg:!text-[56px] xl:!text-[72px] !text-center -mt-5">
          Subscription Plans
        </h1>
        <p className="!text-center">
          Choose the plan that fits your trading goals — from basic insights to
          elite strategies with direct expert access.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {Plans.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-15 lg:gap-18 justify-between max-w-[464px] w-full mx-auto ${
              item.title === "Pro"
                ? "bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]"
                : "bg-[#000000]"
            } rounded-[20px] p-5 lg:p-10`}
          >
            <div className="space-y-6">
              <h6 className="text-[30px] font-[400] text-center">
                {item.title}
              </h6>
              <h5
                className={`text-[46px] text-center font-[700] pb-6 border-b-[1px] border-[#FFFFFF] ${
                  item.title === "Pro" ? "text-[#fff]" : "text-[#9441FE]"
                }`}
              >
                ${item.amount}/<span className="text-[32px]">month</span>
              </h5>
              <h6 className="text-[18px] font-[700]">What&apos;s Included</h6>
              <div className="space-y-3">
                {item.tags.map((tag, index) => (
                  <div key={index} className="flex gap-2">
                    <IconCircleCheck
                      color={`${item.title === "Pro" ? "#fff" : "#9441FE"}`}
                    />
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="common"
              className={`login-button ${
                item.title === "Pro"
                  ? "!bg-[#eee6e6] hover:!bg-[#fff] !text-[#7E18FF]"
                  : ""
              }`}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionSection;
