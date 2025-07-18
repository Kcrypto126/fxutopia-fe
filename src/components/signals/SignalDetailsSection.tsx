"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "../ui/progress";
import { IconClockFilled, IconMapPin, IconUsers } from "@tabler/icons-react";
import RatingStars from "../marketplace/Rating";
import { formatLargeNumber } from "@/lib/utils";

import { data } from "./data";
import { SignalAreaChat } from "./AreaChat";
import { SignalBarChat } from "./BarChat";

const SignalDetailsSection = () => {
  return (
    <div className="space-y-8 lg:space-y-14">
      <div className="space-y-3">
        <div className="flex items-center gap-2 ">
          <Avatar className="w-14 lg:w-36 h-14 lg:h-36 -mt-1.5 lg:mt-0">
            <AvatarImage
              src={data[0].user.avatar}
              alt={data[0].user.username}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="w-full space-y-3">
            <div className="w-full flex flex-col lg:flex-row gap-2 items-start lg:items-center justify-between">
              <h1 className="!text-[24px] lg:!text-[56px] !leading-[100%] !text-start">
                {data[0].user.username}
              </h1>
              <div className="flex items-center gap-1 text-[14px] lg:text-[18px]">
                <IconClockFilled color="#8A50D6" />
                {data[0].date}
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <h6 className="h-11 flex items-center lg:w-fit px-7 text-[18px] bg-[#8A50D6] rounded-full leading-[100%]">
                {data[0].category}
              </h6>
              <RatingStars rating={data[0].user.rating} />
              <h6 className="text-[16px] font-[700]">{data[0].user.rating}</h6>
              <div className="h-10 flex items-center justify-center gap-2 px-3 text-[14px] bg-transparent border-[1px] border-[#FFFFFF] rounded-full">
                <IconUsers color="#8A50D6" className="w-5 h-5" />
                {data[0].user.followers}
              </div>
              <div className="flex items-center gap-2 text-[14px] lg:text-[18px]">
                <IconMapPin color="#D8BBFF" className="w-4 lg:w-5 h-4 lg:h-5" />
                {data[0].user.address}
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden items-center flex-wrap gap-3">
          <RatingStars rating={data[0].user.rating} />
          <h6 className="text-[16px] font-[700]">{data[0].user.rating}</h6>
          <div className="h-7 lg:h-10 flex items-center justify-center gap-1 lg:gap-2 px-2 lg:px-3 text-[14px] bg-transparent border-[1px] border-[#FFFFFF] rounded-full">
            <IconUsers color="#8A50D6" className="w-4 lg:w-5 h-4 lg:h-5" />
            {data[0].user.followers}
          </div>
          <div className="flex items-center gap-2 text-[14px] lg:text-[18px]">
            <IconMapPin color="#D8BBFF" className="w-4 lg:w-5 h-4 lg:h-5" />
            {data[0].user.address}
          </div>
          <h6 className="h-11 flex items-center lg:w-fit px-7 text-[18px] bg-[#8A50D6] rounded-full leading-[100%]">
            {data[0].category}
          </h6>
        </div>
      </div>
      <div className="space-y-3 lg:space-y-5 border-b-[1px] border-[#FFFFFF4D] pb-8 lg:pb-14">
        <h5 className="text-[20px] lg:text-[26px] font-[700]">
          About the Provider - Alpha Signals Pro
        </h5>
        <p>
          Alpha Signals Pro is a high-performance trading group renowned for its
          precision-based scalping and intraday strategies, with a sharp focus
          on the U.S. and European market sessions. Leveraging deep market
          expertise and cutting-edge analysis, the team delivers real-time
          signal alerts with minimal latency — allowing subscribers to act on
          opportunities within seconds.
          <br />
          <br /> With a proven track record of risk-adjusted consistency, Alpha
          Signals Pro emphasizes tight risk management, strategic entry zones,
          and clear exit signals. Their approach is especially effective for
          traders seeking fast-paced, high-frequency trades backed by
          data-driven setups.
        </p>
      </div>
      <div className="space-y-9">
        <h6 className="text-[26px] font-[700]">Performance Overview</h6>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
          <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
            <h6 className="text-[14px] lg:text-[18px]">Win Rate</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#87E1FF]">
              {data[0].win_rate}%
            </h6>
            <Progress
              value={data[0].win_rate}
              className="w-full bg-[#0e7e8fc5]"
            />
          </div>
          <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
            <h6 className="text-[14px] lg:text-[18px]">Total Trades</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#FFA528]">
              {data[0].total_trades}
            </h6>
            <h6 className="text-[12px] lg:text-[14px] text-[#FFA528]">
              +{data[0].last_trades} this month
            </h6>
          </div>
          <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
            <h6 className="text-[14px] lg:text-[18px]">Total Profit</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#21C015]">
              ${formatLargeNumber(data[0].total_profit)}
            </h6>
            <h6 className="text-[12px] lg:text-[14px] text-[#21C015]">
              +{data[0].total_profit_rate} this month
            </h6>
          </div>
          <div className="w-full bg-[#381E5B] rounded-[8px] p-3 lg:p-4 flex flex-col justify-between gap-1">
            <h6 className="text-[14px] lg:text-[18px]">Monthly ROI</h6>
            <h6 className="text-[20px] lg:text-[24px] font-[700] text-[#D8BBFF]">
              +{data[0].monthly_rol}%
            </h6>
            <h6 className="text-[12px] lg:text-[14px] text-[#D8BBFF]">
              Trading up
            </h6>
          </div>
        </div>
      </div>
      <div className="space-y-9">
        <h6 className="text-[18px] lg:text-[26px] font-[700]">
          Track Trading Performance with Real-Time Metrics
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SignalAreaChat />
          <SignalBarChat />
        </div>
      </div>
    </div>
  );
};

export default SignalDetailsSection;
