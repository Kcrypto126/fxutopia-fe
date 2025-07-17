"use client";

import { IconFilter2 } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Container from "../layouts/Container";
import { IconSearch, IconLoader2 } from "@tabler/icons-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import SignalProvider from "./SignalProvider";

import { data } from "./data";
const Sorts = ["Rating", "Followers", "Rates", "Profits"];

const SignalProvidersSection = () => {
  const [sort, setSort] = useState("rating");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(Math.min(9, data.length));

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNumber(Math.min(number + 6, data.length));
      setIsLoading(false);
    }, 200);
  };

  return (
    <Container className="py-8 md:py-20">
      <div className="flex flex-col gap-8 md:gap-15">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 justify-between items-center w-full">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-6 w-full justify-between lg:justify-start items-center">
            <Select
              value={sort}
              onValueChange={(val) => setSort(val)}
              defaultValue="bots"
            >
              <SelectTrigger className="w-[128px] flex justify-center text-[16px] !text-[#fff] !border-none font-[500] !h-11 md:!h-[52px] rounded-full cursor-pointer !bg-[#512F7C66] hover:!bg-[#6B459C60]">
                <SelectValue placeholder="Bots" />
              </SelectTrigger>
              <SelectContent className="!border-[#9862DB] !bg-[#3f2364f5]">
                <SelectGroup>
                  {Sorts.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.toLowerCase()}
                      className="focus:bg-[#5e3a8d66]"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="filter">
              <IconFilter2
                width="32"
                height="32"
                color="#9862DB"
                className="!w-5 !h-5 lg:!w-7 lg:!h-7"
              />
              <h5 className="hidden lg:block">Filter</h5>
            </Button>
          </div>
          <div className="relative flex items-center max-w-[90vw] lg:max-w-[471px] w-full">
            <IconSearch
              width="20"
              height="20"
              color="#9441FE"
              className="absolute left-4"
            />
            <Input
              placeholder="Search Providers..."
              className="h-[52px] w-full border-[1px] border-[#9862DB] !bg-[#512F7C66] rounded-full placeholder:text-[18px] pl-12 pr-6"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center">
          <h1 className="!text-center lg:!text-start max-w-[735px]">
            Signal Providers
          </h1>
          <p className="max-w-[513px] !text-center lg:!text-start">
            Explore proven trading groups, track win rates, and follow
            high-performing signal providers — with full transparency.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-11">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, number).map((item, index) => (
              <SignalProvider key={index} data={item} />
            ))}
          </div>
          <Button
            variant="common"
            className="login-button w-full md:!w-[269px]"
            onClick={() => {
              showMore();
            }}
          >
            {isLoading ? (
              <IconLoader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Show More Topics"
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SignalProvidersSection;
