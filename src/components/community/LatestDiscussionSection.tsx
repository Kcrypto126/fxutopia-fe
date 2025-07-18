"use client";

import { IconFlameFilled } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClockIcon } from "../ui/icon";

import { LatestDiscussions } from "./data";

const LatestDiscussionSection = () => {
  return (
    <div className="w-full max-w-full xl:max-w-[430px] space-y-5">
      <div className="flex gap-3 items-center">
        <IconFlameFilled width="28" height="28" color="#9862DB" />
        <h5 className="text-[26px] font-[500]">Latest Discussions</h5>
      </div>
      <div className="space-y-5">
        {LatestDiscussions.map((item, index) => (
          <div
            key={index}
            className="rounded-[12px] bg-[#000000] p-4 flex gap-3 justify-between"
          >
            <div className="flex gap-5 items-center">
              <Avatar className="w-[48px] md:w-[58px] h-[48px] md:h-[58px]">
                <AvatarImage src={item.user.avatar} alt="user" />
                <AvatarFallback>
                  {item.user.full_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p>{item.text}</p>
            </div>
            <div className="flex flex-col gap-1 justify-between min-w-[85px] text-[#FFFFFF50]">
              <h5 className="text-[16px] md:text-[20px] font-[500]">
                {item.followers}
              </h5>
              <div className="flex gap-1 items-center">
                <ClockIcon />
                <h5 className="text-[16px] font-[500]">{item.date}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestDiscussionSection;
