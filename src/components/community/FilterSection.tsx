"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  IconFilter2,
  IconFlameFilled,
  IconHeartFilled,
  IconPlus,
} from "@tabler/icons-react";

const FilterSection = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between items-center py-4 lg:py-0 w-full">
      <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-6 justify-center items-center">
        <Button variant="filter">
          <IconFilter2
            width="32"
            height="32"
            color="#9862DB"
            className="!w-5 !h-5 lg:!w-7 lg:!h-7"
          />
          <h5 className="text-[16px] font-[500] hidden lg:block">Filter</h5>
        </Button>
        <Button variant="filter">
          <IconFlameFilled
            width="32"
            height="32"
            color="#9862DB"
            className="!w-5 !h-5 lg:!w-7 lg:!h-7"
          />
          <h5 className="text-[16px] font-[500] hidden lg:block">Popular</h5>
        </Button>
        <Button variant="filter">
          <IconHeartFilled
            width="32"
            height="32"
            color="#9862DB"
            className="!w-5 !h-5 lg:!w-7 lg:!h-7"
          />
          <h5 className="text-[16px] font-[500] hidden lg:block">Favorite</h5>
        </Button>
        <Button
          variant="filter"
          className="!bg-[#381E5B] hover:!bg-[#402366]  border-[1px] border-[#9862DB] !w-fit !px-7"
        >
          <IconPlus
            width="32"
            height="32"
            color="#9862DB"
            className="!w-6 !h-6 lg:!w-8 lg:!h-8 p-1"
          />
          <h5 className="text-[16px] font-[500]">Create New Post</h5>
        </Button>
      </div>
      <div className="relative flex items-center max-w-[471px] w-full">
        <span className="absolute left-4 sm:left-6 text-gray-400">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path
              d="M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              stroke="#9441FE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <Input
          placeholder="Searching Popular Forums"
          className="h-[52px] w-full border-[1px] border-[#9862DB] !bg-[#512F7C66] rounded-full placeholder:text-[18px] pl-12 sm:pl-[63px] pr-6"
        />
      </div>
    </div>
  );
};

export default FilterSection;
