"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  IconBubbleTextFilled,
  IconChevronLeft,
  IconClockFilled,
  IconEyeFilled,
  IconHeartFilled,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatLargeNumber } from "@/lib/utils";

import { Topics } from "./data";

const IndividualCategorySection = () => {
  const [topicNumber, setTopicNumber] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTopicNumber(topicNumber + 3);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-11">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/community">
            <Button variant="back" className="!pr-0.5">
              <IconChevronLeft className="!w-[20px] !h-[20px]" />
              <p className="hidden lg:block">Back</p>
            </Button>
          </Link>
          <h5 className="text-[18px] md:text-[32px] font-[500]">
            Beginner Questions
          </h5>
        </div>
        <h5 className="text-[16px] md:text-[20px]">
          {Topics.length} Results Shown
        </h5>
      </div>

      <div className="hidden md:flex lg:hidden xl:flex gap-2 justify-between items-center py-5 px-7 bg-[#EFEFEF1A] rounded-full">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#87E1FF] rounded-full"></span>
          <h5 className="text-[20px]">Topics</h5>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-2 items-center w-[109px]">
            <IconBubbleTextFilled width="24" height="24" />
            <h5 className="text-[20px]">Replies</h5>
          </div>
          <div className="flex gap-2 items-center w-[119px]">
            <IconEyeFilled width="24" height="24" />
            <h5 className="text-[20px]">Views</h5>
          </div>
          <div className="flex gap-2 items-center w-[109px]">
            <IconClockFilled width="24" height="24" />
            <h5 className="text-[20px]">Activity</h5>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        {Topics.slice(0, topicNumber).map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-4 pb-6 md:pb-10  ${
              Topics[Topics.length - 1] === item
                ? "border-none"
                : "border-b-[1px]"
            } border-[#FFFFFF4D]`}
          >
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-start md:justify-between lg:justify-start xl:justify-between gap-4">
              <div className="flex items-center justify-start gap-3">
                <Link href="/community/individual-category/thread">
                  <h5 className="text-[18px] xl:text-[26px] hover:text-[#be93f3] transition-all duration-300">
                    {item.title}
                  </h5>
                </Link>
                <IconHeartFilled
                  color={`${item.favorite ? "#9441FE" : "#656565"}`}
                />
              </div>
              <div className="flex gap-6 pr-7">
                <div className="flex gap-2 items-center w-[109px] pl-0.5">
                  <IconBubbleTextFilled width="20" height="20" />
                  <h5 className="text-[16px] font-bold">{item.replies}</h5>
                </div>
                <div className="flex gap-2 items-center w-[119px] pl-0.5">
                  <IconEyeFilled width="20" height="20" />
                  <h5 className="text-[16px] font-bold">
                    {formatLargeNumber(item.views)}
                  </h5>
                </div>
                <div className="flex gap-2 items-center w-[109px] pl-0.5">
                  <IconClockFilled width="20" height="20" />
                  <h5 className="text-[16px] font-bold">{item.date}</h5>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-7">
                {item.image ? (
                  <Image
                    src={item.image}
                    width={192}
                    height={192}
                    alt="attach"
                    className="w-[192px] h-auto object-cover"
                  />
                ) : (
                  <></>
                )}
                <p className="w-full pr-0 md:pr-[425px] lg:pr-0 xl:pr-[425px]">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-6 md:-space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                {item.reply_users.slice(0, 5).map((user, index) => (
                  <div key={index} className="flex flex-col items-center w-12">
                    <Avatar className="w-8 md:w-12 h-8 md:h-12">
                      <AvatarImage src={user.avatar} alt={user.full_name} />
                      <AvatarFallback>
                        {user.full_name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
              <h5 className="text-[14px] md:text-[20px]">
                {item.reply_users.length - 5}+ More
              </h5>
            </div>
          </div>
        ))}
        <Button
          variant="common"
          className="login-button w-full md:!w-[269px]"
          onClick={() => {
            showMore();
          }}
        >
          {isLoading ? (
            <IconLoader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Show More Topics"
          )}
        </Button>
      </div>
    </div>
  );
};

export default IndividualCategorySection;
