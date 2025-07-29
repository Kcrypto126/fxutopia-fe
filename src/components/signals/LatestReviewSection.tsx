"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import RatingStars from "../marketplace/Rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IconLoader2 } from "@tabler/icons-react";

import { data, LatestReviews } from "./data";

const LatestReviewSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(Math.min(5, data.length));

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNumber(Math.min(number + 3, data.length));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 lg:space-y-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
        <h1 className="!text-center lg:!text-start">Latest Reviews</h1>
        <p className="max-w-[513px] !text-center lg:!text-start">
          Hear what our users are saying about the signal providers and trading
          tools they rely on every day.
        </p>
      </div>
      <div className="space-y-6 lg:space-y-11">
        {LatestReviews.slice(0, number).map((item, index) => (
          <div
            key={index}
            className="space-y-4 p-3 lg:p-6 rounded-[16px] lg:rounded-[24px] bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]"
          >
            <div className="flex items-center gap-3 lg:gap-4">
              <Avatar className="w-12 lg:w-16 h-12 lg:h-16 -mt-1.5 lg:mt-0">
                <AvatarImage src={item.user.avatar} alt={item.user.username} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-7">
                <h6 className="text-[18px] lg:text-[26px] leading-[100%]">
                  {item.user.username}
                </h6>
                <RatingStars rating={item.user.rating} />
              </div>
            </div>
            <p>{item.review}</p>
          </div>
        ))}
        <Button
          variant="common"
          className="login-button w-full md:!w-[287px]"
          onClick={() => {
            showMore();
          }}
        >
          {isLoading ? (
            <IconLoader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Show More Discussions"
          )}
        </Button>
      </div>
    </div>
  );
};

export default LatestReviewSection;
