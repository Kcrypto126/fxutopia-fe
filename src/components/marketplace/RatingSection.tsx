"use client";

import React from "react";
import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import Container from "../layouts/Container";
import RatingCarousel from "./RatingCarousel";

import "./css/embla-rating.css";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const RatingSection = () => {
  return (
    <Container className="py-8 md:py-20">
      <div className="w-full flex flex-col items-center gap-8 md:gap-25">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/assets/marketplace/reviews.png"
            width={1019}
            height={175}
            alt="review"
            className="-mb-10 md:-mb-12 w-[850px]"
          />
          <h1 className="max-w-[655px]">Ratings & Reviews That Matter</h1>
        </div>
        <div className="w-full flex flex-col gap-4 lg:gap-6">
          <RatingCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </Container>
  );
};

export default RatingSection;
