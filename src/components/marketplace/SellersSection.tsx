"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Container from "../layouts/Container";
import SellersCarousel from "./SellersCarousel";

import "./css/embla-rating.css";
import { SLIDES } from "./data";

const OPTIONS: EmblaOptionsType = { loop: true };

const SellersSection = () => {
  return (
    <Container className="bg-[#000] py-8 md:py-20">
      <div className="w-full flex flex-col items-center gap-8 md:gap-25">
        <div className="flex flex-col items-center gap-6">
          <h1>Top Performing traders</h1>
          <p className="text-center">
            Meet our company&apos;s most successful traders this month
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-6">
          <SellersCarousel slides={SLIDES} options={OPTIONS} />
          <SellersCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </Container>
  );
};

export default SellersSection;
