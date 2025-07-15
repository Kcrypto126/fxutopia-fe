"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactStars from "react-stars";
import Container from "../layouts/Container";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconSearch, IconLoader2 } from "@tabler/icons-react";
import { ChevronDownIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Resources } from "./data";
import { VerifyIcon } from "../ui/icon";

const Categoris = ["Bots", "Platform", "Trading", "Video"];
const Platforms = ["MT5", "MT4", "TradingView", "Trader"];

const ExpertResourceSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const [platform, setPlatform] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [number, setNumber] = useState(9);

  const showMoreCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNumber(number + 6);
      setIsLoading(false);
    }, 200);
  };

  return (
    <Container className="py-8 md:py-20">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <div className="flex gap-5 items-center">
              <Select
                value={category}
                onValueChange={(val) => setCategory(val)}
                defaultValue="bots"
              >
                <SelectTrigger className="w-[128px] flex justify-center text-[16px] !text-[#fff] !border-none font-[500] !h-11 md:!h-[52px] rounded-full cursor-pointer !bg-[#512F7C66] hover:!bg-[#6B459C60]">
                  <SelectValue placeholder="Bots" />
                </SelectTrigger>
                <SelectContent className="!border-[#9862DB] !bg-[#3f2364f5]">
                  <SelectGroup>
                    {Categoris.map((item, index) => (
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
              <Select
                value={platform}
                onValueChange={(val) => setPlatform(val)}
                defaultValue="mt5"
              >
                <SelectTrigger className="w-[140px] flex justify-center text-[16px] !text-[#fff] !border-none font-[500] !h-11 md:!h-[52px] rounded-full cursor-pointer !bg-[#512F7C66] hover:!bg-[#6B459C60]">
                  <SelectValue placeholder="MT5" />
                </SelectTrigger>
                <SelectContent className="!border-[#9862DB] !bg-[#3f2364f5]">
                  <SelectGroup>
                    {Platforms.map((item, index) => (
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
            </div>
            <Button variant="select" className="w-full sm:w-auto !px-7">
              Verified Sellers Only
            </Button>
          </div>
          <div className="relative flex items-center max-w-[90vw] sm:max-w-[471px] w-full">
            <IconSearch
              width="20"
              height="20"
              color="#9441FE"
              className="absolute left-4"
            />
            <Input
              placeholder="Searching Brokers"
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
            Trade Better with Expert Resources
          </h1>
          <p className="max-w-[513px] !text-center lg:!text-start">
            Explore expert-curated products for MT4, MT5, TradingView, and
            crypto platforms — trusted by traders worldwide.
          </p>
        </div>
        <div className="pb-8 w-full flex flex-col gap-8 lg:gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
            {Resources.slice(0, number).map((item, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between gap-4 md:gap-5 p-3 md:p-6 border-[1px] border-[#361056] bg-gradient-to-b from-[#2B0A47] to-[#09030E] hover:bg-[#381E5B] hover:bg-none hover:border-[#604683] rounded-[22px] cursor-pointer transition-colors transition-border duration-300"
              >
                <div className="featured-img w-full !rounded-[11px] overflow-hidden h-[295px] bg-[#ffffff14] flex justify-center items-center transition-colors duration-300 group-hover:bg-[#ffffff34]">
                  <Image
                    src={item.featured_image}
                    width={406}
                    height={250}
                    alt="featured"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={item.user.avatar} alt="@user" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <h6 className="text-[16px] font-[700]">
                    {item.user.username}
                  </h6>
                  {item.user.verify ? <VerifyIcon /> : ""}
                </div>
                <h5 className="text-[20px] md:text-[30px] font-riosark font-[400] leading-[110%] uppercase">
                  {item.title}
                </h5>
                <p>{item.description}</p>
                <div className="flex items-center gap-2">
                  <p className="px-5 py-[6px] bg-[#5B5696] rounded-full leading-[100%]">
                    {item.category}
                  </p>
                  <ReactStars
                    count={5}
                    value={item.rating}
                    edit={false}
                    size={24}
                    color2={"#FFD428"}
                  />
                  <h6>
                    {item.rating} ({item.reviews} Reviews)
                  </h6>
                </div>
                <Link
                  href="#"
                  className="text-[16] font-[700] hover:underline max-w-[90px]"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <Button
            variant="common"
            className="login-button w-full sm:!w-[264px] mx-auto"
            onClick={() => {
              showMoreCourse();
            }}
          >
            {isLoading ? (
              <IconLoader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Show More Courses"
            )}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default ExpertResourceSection;
