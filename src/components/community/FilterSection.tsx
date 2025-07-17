"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  IconFilter2,
  IconFlameFilled,
  IconHeartFilled,
  IconSearch,
} from "@tabler/icons-react";
import CreatePost from "../post/CreatePost";

const FilterSection = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between items-center py-4 lg:py-0 w-full">
      <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-6 justify-center items-center">
        
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
        <CreatePost />
      </div>
      <div className="relative flex items-center max-w-[90vw] sm:max-w-[471px] w-full">
        <IconSearch
          width="20"
          height="20"
          color="#9441FE"
          className="absolute left-4"
        />
        <Input
          placeholder="Searching Popular Forums"
          className="h-[52px] w-full border-[1px] border-[#9862DB] !bg-[#512F7C66] rounded-full placeholder:text-[18px] pl-12 pr-6"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default FilterSection;
