"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import { FaqAccordion } from "./FaqAccordion";

const FaqSection = () => {
  return (
    <Container className="relative z-0 py-8 md:py-28">
      <div className="flex justify-between gap-9">
        <div className="flex-1 flex flex-col gap-4">
          <h5 className="text-[72px] font-riosark font-[400] leading-[110%]">
            Frequently Asked Questions
          </h5>
          <p>
            We&apos;re here to make your journey smooth. Below are some quick
            answers to the most common questions about FX Utopia.
          </p>
          <Image
            src="/assets/home/utopia.png"
            width={420}
            height={380}
            alt="utopia"
            className="w-[420px] mx-auto mt-6"
          />
        </div>
        <div className="flex-1">
          <FaqAccordion />
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;
