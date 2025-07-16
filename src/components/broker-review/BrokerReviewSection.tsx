"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  IconLoader2,
  IconFlameFilled,
  IconSearch,
  IconStarFilled,
} from "@tabler/icons-react";
import Container from "../layouts/Container";
import { useState } from "react";

import SingleReview from "./SingleReview";
import { data } from "./data";

const BrokerReviewSection = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reviewNumber, setReviewNumber] = useState(Math.min(5, data.length));

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setReviewNumber(Math.min(reviewNumber + 5, data.length));
    }, 200);
  };

  return (
    <Container className="py-8 md:py-20">
      <div className="flex flex-col gap-8 md:gap-15">
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 justify-between items-center w-full">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-6 justify-center items-center">
            <Button variant="select" className="!px-4 md:!px-7">
              <IconFlameFilled width="32" height="32" color="#9862DB" />
              Hot
            </Button>
            <Button variant="select" className="!px-4 md:!px-7">
              Newest
            </Button>
            <Button variant="select" className="!px-4 md:!px-7">
              <IconStarFilled width="32" height="32" color="#9862DB" />
              Top Rated
            </Button>
            <Button variant="select" className="!px-4 md:!px-7">
              Claimed
            </Button>
            <Button variant="select" className="!px-4 md:!px-7">
              Misleading
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
              placeholder="Search brokers, tools or keywords..."
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
            Broker & Product Reviews
          </h1>
          <p className="max-w-[513px] !text-center lg:!text-start">
            Read, rate, and review trading platforms and products — transparency
            powered by real user experience and Gain insights, avoid pitfalls,
            and choose smarter with verified reviews from the trading community.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-11">
          {data.slice(0, reviewNumber).map((item, index) => (
            <SingleReview key={index} data={item} />
          ))}
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

export default BrokerReviewSection;
