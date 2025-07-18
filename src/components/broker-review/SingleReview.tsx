"use client";

import Link from "next/link";
import RatingStars from "../marketplace/Rating";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  IconTrendingUp,
  IconFlameFilled,
  IconStarFilled,
  IconChevronUp,
  IconChevronDown,
  IconClockFilled,
  IconMessageDots,
} from "@tabler/icons-react";

import { ReviewProps } from "./data";

const SingleReview = ({ data }: { data: ReviewProps }) => {
  return (
    <div className="space-y-6 md:space-y-10 w-full p-4 md:p-10 rounded-[24px] bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex gap-2 md:gap-4">
          <IconTrendingUp className="w-8 md:w-15 h-8 md:h-15 bg-[#8A50D6] p-1 md:p-3 rounded-[6px]" />
          <div>
            <Link
              href="/broker-review/single"
              className="!text-[18px] md:!text-[36px] leading-[105%] hover:opacity-70 transition-all duration-300"
            >
              {data.title}
            </Link>
            <p className="underline">{data.website}</p>
          </div>
        </div>
        <Button variant="select" className="!px-4 md:!px-7 !h-9 md:!h-13">
          {data.category === "Hot" ? (
            <IconFlameFilled width="32" height="32" color="#9862DB" />
          ) : data.category === "Top Rated" ? (
            <IconStarFilled width="32" height="32" color="#9862DB" />
          ) : (
            ""
          )}
          <h5 className="text-[14px] md:text-[16px] font-[500]">
            {data.category}
          </h5>
        </Button>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-13 items-end md:items-center">
        <div className="w-fit h-fit flex flex-row md:flex-col items-center justify-center gap-1 md:gap-4 p-2 md:p-3 rounded-[8px] bg-[#381E5B99] border-[1px] border-[#9862DB]">
          <IconChevronUp className="-rotate-90 md:rotate-0" />
          <h6 className="text-[16px] md:text-[24px] font-[400]">
            {data.user.review}
          </h6>
          <IconChevronDown className="-rotate-90 md:rotate-0" />
        </div>
        <div className="w-full flex flex-col gap-7">
          <div className="flex justify-between md:justify-start flex-wrap gap-2 md:gap-[18px]">
            <div className="flex gap-2 md:gap-[18px]">
              <Avatar className="w-12 md:w-17 h-12 md:h-17 -mt-1.5 md:mt-0">
                <AvatarImage src={data.user.avatar} alt={data.user.username} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-[18px]">
                <h6 className="text-[16px] md:text-[20px] font-[700] leading-[100%]">
                  {data.user.username}
                </h6>
                <span className="w-[6px] h-[6px] bg-[#9441FE] rounded-full hidden md:block"></span>
                <div className="flex flex-row-reverse h-fit md:flex-row items-center gap-2 md :gap-[18px]">
                  <RatingStars rating={data.user.rating} />
                  <h6 className="text-[14px] md:text-[16px] font-[700]">
                    {data.user.rating}
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconClockFilled color="#827F86" />
              {data.date}
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-3">
            <h6 className="text-[16px] md:text-[24px] font-[500]">
              {data.subtitle}
            </h6>
            <p className="!text-[14px] md:!text-[18px]">{data.description}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-7">
            <div className="flex items-center flex-wrap gap-2 md:gap-5">
              {data.tags.map((tag, index) => (
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
                {data.comments} Comment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
