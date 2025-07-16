"use client";

import Link from "next/link";
import RatingStars from "../marketplace/Rating";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IconTrendingUp,
  IconFlameFilled,
  IconStarFilled,
  IconClockFilled,
  IconMessageDots,
} from "@tabler/icons-react";

import { data } from "./data";

const SingleReviewHeader = () => {
  const FirstData = data[0];

  return (
    <div className="flex flex-col gap-6 md:gap-9 w-full p-4 md:p-10 rounded-[24px] bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]">
      <div className="flex flex-wrap justify-between items-center gap-2 border-b-[1px] border-[#FFFFFF4D] pb-6 md:pb-9">
        <div className="flex gap-2 md:gap-4">
          <IconTrendingUp className="w-8 md:w-15 h-8 md:h-15 bg-[#8A50D6] p-1 md:p-3 rounded-[6px]" />
          <div className="flex flex-col">
            <Link
              href="/broker-review/single"
              className="!text-[18px] md:!text-[36px] leading-[105%] hover:opacity-70 transition-all duration-300"
            >
              {FirstData.title}
            </Link>
            <p className="underline">{FirstData.website}</p>
          </div>
        </div>
        <Button variant="select" className="!px-4 md:!px-7 !h-9 md:!h-13">
          {FirstData.category === "Hot" ? (
            <IconFlameFilled width="32" height="32" color="#9862DB" />
          ) : FirstData.category === "Top Rated" ? (
            <IconStarFilled width="32" height="32" color="#9862DB" />
          ) : (
            ""
          )}
          <h5 className="text-[14px] md:text-[16px] font-[500]">
            {FirstData.category}
          </h5>
        </Button>
      </div>
      <div className="w-full flex flex-col gap-7">
        <div className="flex justify-between md:justify-start flex-wrap gap-2 md:gap-[18px]">
          <div className="flex gap-2 md:gap-[18px]">
            <Avatar className="w-12 md:w-17 h-12 md:h-17 -mt-1.5 md:mt-0">
              <AvatarImage
                src={FirstData.user.avatar}
                alt={FirstData.user.username}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-[18px]">
              <h6 className="text-[16px] md:text-[20px] font-[700] leading-[100%]">
                {FirstData.user.username}
              </h6>
              <span className="w-[6px] h-[6px] bg-[#9441FE] rounded-full hidden md:block"></span>
              <div className="flex flex-row-reverse h-fit md:flex-row items-center gap-2 md :gap-[18px]">
                <RatingStars rating={FirstData.user.rating} />
                <h6 className="text-[14px] md:text-[16px] font-[700]">
                  {FirstData.user.rating}
                </h6>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconClockFilled color="#827F86" />
            {FirstData.date}
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h6 className="text-[16px] md:text-[24px] font-[500]">
            {FirstData.subtitle}
          </h6>
          <p className="!text-[14px] md:!text-[18px]">
            {FirstData.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-7">
          <div className="flex items-center flex-wrap gap-2 md:gap-5">
            {FirstData.tags.map((tag, index) => (
              <Button
                key={index}
                variant="select"
                className="!px-4 md:!px-7 !h-9 md:!h-13 !text-[14px] md:!text-[16px] font-[500]"
              >
                {tag}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <IconMessageDots color="#9441FE" />
            <p className="!text-[14px] md:!text-[18px]">
              {FirstData.comments} Comment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewHeader;
