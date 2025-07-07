"use client";

import { useState } from "react";
import Link from "next/link";

import {
  IconCalendarWeekFilled,
  IconChevronLeft,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Threads } from "./data";

const ThreadSection = () => {
  const [threadNumber, setThreadNumber] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setThreadNumber(threadNumber + 3);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-11">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-3 md:gap-5">
          <Link href="/community/individual-category">
            <Button variant="back" className="!pr-0.5">
              <IconChevronLeft className="!w-[20px] !h-[20px]" />
              <p className="hidden lg:block !text-[16px]">Back</p>
            </Button>
          </Link>
        </div>
        <h5 className="text-[16px] md:text-[20px]">Total Discussions: 1/308</h5>
      </div>

      <div className="flex items-center gap-4">
        <span className="w-4 h-4 bg-[#87E1FF] rounded-full"></span>
        <h5 className="text-[20px] md:text-[36px]">
          About the Beginner Questions category
        </h5>
      </div>

      <div className="flex flex-col gap-8 md:gap-11">
        {Threads.slice(0, threadNumber).map((item, index) => (
          <div key={index} className="flex flex-col gap-3 md:gap-6">
            <div className="flex gap-2 justify-between">
              <div className="flex items-center gap-2 md:gap-4">
                <Avatar className="w-8 md:w-14 h-8 md:h-14">
                  <AvatarImage
                    src={item.user.avatar}
                    alt={item.user.username}
                  />
                  <AvatarFallback>
                    {item.user.full_name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <h5 className="text-[16px] md:text-[26px] font-[500]">
                  {item.user.username}
                </h5>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendarWeekFilled />
                <h5 className="text-[14px] md:text-[20px]">{item.date}</h5>
              </div>
            </div>
            <div className="flex items-center gap-2 border-[1px] border-[#9862DB] bg-gradient-to-b from-[#2B0A47] to-[#000] p-4 md:p-12 rounded-[16px] md:rounded-[30px]">
              <p>{item.post}</p>
            </div>
          </div>
        ))}

        <Button
          variant="common"
          className="login-button w-full md:!w-[287px] hover:shadow-none"
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

export default ThreadSection;
