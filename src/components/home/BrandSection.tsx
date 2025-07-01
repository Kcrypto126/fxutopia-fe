"use client";

import React from "react";
import BrandCarousel from "./BrandCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "./css/embla.css";

import Container from "../layouts/Container";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const BrandSection = () => {
  return (
    <Container className="bg-[#000000]">
      <BrandCarousel slides={SLIDES} options={OPTIONS} />
    </Container>
  )
};

export default BrandSection;
