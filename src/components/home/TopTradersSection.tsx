"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Container from "../layouts/Container";
import TopTraderCarousel from "./ToptraderCarousel";

import "./css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const TopTradersSection = () => {
  return (
    <Container className="bg-[#000] py-8 md:py-20">
      <div className="w-full flex flex-col items-center gap-8 md:gap-25">
        <div className="flex flex-col items-center gap-6">
          <h1>Top Performing traders</h1>
          <p className="text-center">
            Meet our company&apos;s most successful traders this month
          </p>
        </div>
        <div className="w-full">
          <TopTraderCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </Container>
  );
};

export default TopTradersSection;
