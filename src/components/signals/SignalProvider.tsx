"use client";

import {
  IconClockFilled,
  IconMapPin,
  IconStarFilled,
  IconUsers,
} from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { formatLargeNumber } from "@/lib/utils";
import RatingStars from "../marketplace/Rating";

import { SignalProps } from "./data";

const SignalProvider = ({ data }: { data: SignalProps }) => {
  return (
    <div className="w-full flex flex-col gap-6 lg:gap-8 p-4 xl:p-8 rounded-[20px] bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]">
      <div className="flex flex-col gap-4 lg:gap-6">
        <div className="flex justify-between items-center gap-2">
          <div className="flex gap-3 items-center">
            <Avatar className="w-12 lg:w-17 h-12 lg:h-17 -mt-1.5 lg:mt-0">
              <AvatarImage src={data.user.avatar} alt={data.user.username} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-3">
              <h6 className="text-[16px] lg:text-[20px] font-[700] leading-[120%]">
                {data.user.username}
              </h6>
              <div className="flex items-center gap-2 leading-[120%]">
                <IconClockFilled color="#8A50D6" />
                {data.date}
              </div>
            </div>
          </div>
          <div className="h-7 lg:h-10 flex items-center justify-center gap-2 px-2 lg:px-4 bg-[#381E5B] rounded-full lg:hidden">
            <IconStarFilled color="#FFD428" className="w-4 lg:w-5 h-4 lg:h-5" />
            <h6 className="text-[14px] lg:text-[18px] font-[700]">
              {data.user.rating}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <div className="h-7 lg:h-10 hidden lg:flex items-center justify-center gap-2 px-2 lg:px-4 bg-[#381E5B] rounded-full">
            <IconStarFilled color="#FFD428" className="w-4 lg:w-5 h-4 lg:h-5" />
            <h6 className="text-[14px] lg:text-[18px] font-[700]">
              {data.user.rating}
            </h6>
          </div>
          <div className="h-7 lg:h-10 flex items-center justify-center gap-2 px-2 lg:px-4 bg-transparent border-[1px] border-[#FFFFFF] rounded-full">
            <IconUsers color="#fff" className="w-4 lg:w-5 h-4 lg:h-5" />
            <h6 className="text-[14px]">{data.user.followers}</h6>
          </div>
          <div className="flex items-center gap-2 text-[14px] lg:text-[18px]">
            <IconMapPin color="#D8BBFF" className="w-4 lg:w-5 h-4 lg:h-5" />
            {data.user.address}
          </div>
        </div>
      </div>
      <h6 className="h-10 lg:h-11 flex items-center justify-center w-full lg:w-fit px-7 text-[16px] lg:text-[18px] bg-[#8A50D6] rounded-full leading-[100%]">
        {data.category}
      </h6>
      <div className="grid grid-cols-2 gap-3">
        <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
          <h6 className="text-[14px] lg:text-[18px]">Win Rate</h6>
          <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#87E1FF]">
            {data.win_rate}%
          </h6>
          <Progress value={data.win_rate} className="w-full bg-[#0e7e8fc5]" />
        </div>
        <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
          <h6 className="text-[14px] lg:text-[18px]">Total Trades</h6>
          <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#FFA528]">
            {data.total_trades}
          </h6>
          <h6 className="text-[12px] lg:text-[14px] text-[#FFA528]">
            +{data.last_trades} this month
          </h6>
        </div>
        <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
          <h6 className="text-[14px] lg:text-[18px]">Total Profit</h6>
          <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#21C015]">
            ${formatLargeNumber(data.total_profit)}
          </h6>
          <h6 className="text-[12px] lg:text-[14px] text-[#21C015]">
            +{data.total_profit_rate} this month
          </h6>
        </div>
        <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
          <h6 className="text-[14px] lg:text-[18px]">Monthly ROI</h6>
          <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#D8BBFF]">
            +{data.monthly_rol}%
          </h6>
          <h6 className="text-[12px] lg:text-[14px] text-[#D8BBFF]">
            Trading up
          </h6>
        </div>
      </div>
      <div className="pb-6 lg:pb-8 border-b-[1px] border-[#FFFFFF4D]">
        <h6 className="text-[16px] lg:text-[18px]">Performance Trend</h6>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="rounded-[8px] lg:rounded-[16px] p-3 border-[0.5px] border-[#ECDEFF]">
            <h6 className="text-[14px] lg:text-[18px]">Daily</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] mt-[6px] text-[#9441FE]">
              +{data.daily}%
            </h6>
          </div>
          <div className="rounded-[8px] lg:rounded-[16px] p-3 border-[0.5px] border-[#ECDEFF]">
            <h6 className="text-[14px] lg:text-[18px]">Weekly</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] mt-[6px] text-[#FFD428]">
              +{data.weekly}%
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h6 className="text-[14px] lg:text-[18px]">Latest Reviews</h6>
        <div className="flex items-center gap-2 lg:gap-3">
          <Avatar className="w-10 h-10 -mt-1.5 xl:mt-0">
            <AvatarImage
              src={data.last_review.user_avatar}
              alt={data.last_review.username}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center">
            <h6 className="text-[18px] leading-[100%]">
              {data.last_review.username}
            </h6>
            <RatingStars rating={data.last_review.rating} />
          </div>
        </div>
        <h6 className="text-[16px] lg:text-[18px]">
          {data.last_review.review}
        </h6>
      </div>
    </div>
  );
};

export default SignalProvider;
