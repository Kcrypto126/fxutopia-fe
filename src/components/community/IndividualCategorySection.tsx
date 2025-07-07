"use client";

import {
  IconBubbleTextFilled,
  IconChevronLeft,
  IconClockFilled,
  IconEyeFilled,
  IconHeartFilled,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatLargeNumber } from "@/lib/utils";

const Topics = [
  {
    title: "About the Beginner Questions category",
    favorite: false,
    replies: 302,
    views: 107000,
    date: "2d",
    description:
      "This forum is for forex beginners. If you are new to forex and have a question, this is the best place to ask it. If you're looking to learn forex, get your training and education at the School of Pipsology.",
    reply_users: [
      {
        avatar: "/avatars/avatar-1.png",
        full_name: "John Veetle",
      },
      {
        avatar: "/avatars/avatar-2.png",
        full_name: "John Veetle",
      },
      {
        avatar: "/avatars/avatar-3.png",
        full_name: "John Veetle",
      },
      {
        avatar: "",
        full_name: "John Veetle",
      },
      {
        avatar: "/avatars/avatar-4.png",
        full_name: "John Veetle",
      },
      {
        avatar: "/avatars/avatar-4.png",
        full_name: "John Veetle",
      },
    ],
  },
];

const IndividualCategorySection = () => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-11 border">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-3 md:gap-5">
          <Button variant="back" className="!pr-0.5">
            <IconChevronLeft className="!w-[20px] !h-[20px]" />
            <p className="hidden lg:block">Back</p>
          </Button>
          <h5 className="text-[18px] md:text-[36px] font-[500]">
            Beginner Questions
          </h5>
        </div>
        <h5 className="text-[16px] md:text-[24px]">100 Results Shown</h5>
      </div>
      <div className="hidden md:flex lg:hidden xl:flex gap-2 justify-between items-center py-5 px-7 bg-[#EFEFEF1A] rounded-full">
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#87E1FF] rounded-full"></span>
          <h5 className="text-[20px]">Topics</h5>
        </div>
        <div className="flex gap-6 items-center">
          <div className="flex gap-3 items-center w-[109px]">
            <IconBubbleTextFilled width="24" height="24" />
            <h5 className="text-[20px]">Replies</h5>
          </div>
          <div className="flex gap-3 items-center w-[109px]">
            <IconEyeFilled width="24" height="24" />
            <h5 className="text-[20px]">Views</h5>
          </div>
          <div className="flex gap-3 items-center w-[109px]">
            <IconClockFilled width="24" height="24" />
            <h5 className="text-[20px]">Activity</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        {Topics.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-4 pb-6 md:pb-10 border-b-[1px] border-[#FFFFFF4D]"
          >
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row justify-start md:justify-between lg:justify-start xl:justify-between gap-4">
              <div className="flex items-center justify-start gap-3">
                <h5 className="text-[18px] xl:text-[26px]">{item.title}</h5>
                <IconHeartFilled
                  color={`${item.favorite ? "#9441FE" : "#656565"}`}
                />
              </div>
              <div className="flex gap-6 pr-7">
                <div className="flex gap-3 items-center w-[109px] px-1">
                  <IconBubbleTextFilled width="20" height="20" />
                  <h5 className="text-[20px] font-bold">{item.replies}</h5>
                </div>
                <div className="flex gap-3 items-center w-[109px] px-1">
                  <IconEyeFilled width="20" height="20" />
                  <h5 className="text-[20px] font-bold">
                    {formatLargeNumber(item.views)}
                  </h5>
                </div>
                <div className="flex gap-3 items-center w-[109px] px-1">
                  <IconClockFilled width="20" height="20" />
                  <h5 className="text-[20px] font-bold">{item.date}</h5>
                </div>
              </div>
            </div>
            <div className="max-w-[635px] w-full">
              <p>{item.description}</p>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                {/* {
                    item.
                } */}
                <Avatar className="w-8 md:w-12 h-8 md:h-12">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 md:w-12 h-8 md:h-12">
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="w-8 md:w-12 h-8 md:h-12">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
              <h5 className="text-[14px] md:text-[20px]">10+ More</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualCategorySection;
