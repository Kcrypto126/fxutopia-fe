"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import { FaqAccordion } from "./FaqAccordion";

const FaqSection = () => {
  return (
    <Container className="relative z-0 py-8 lg:py-28">
      <div className="flex flex-col lg:flex-row justify-between gap-9">
        <div className="flex-1 flex flex-col gap-4">
          <h5 className="text-[30px] md:text-[72px] font-riosark font-[400] leading-[110%] text-center lg:text-start">
            Frequently Asked Questions
          </h5>
          <p className="text-center lg:text-start">
            We&apos;re here to make your journey smooth. Below are some quick
            answers to the most common questions about FX Utopia.
          </p>
          <Image
            src="/assets/home/utopia.png"
            width={420}
            height={380}
            alt="utopia"
            className="w-[420px] mx-auto mt-6 hidden lg:block"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 items-center lg:items-end">
          <FaqAccordion />
          <Image
            src="/assets/home/utopia.png"
            width={420}
            height={380}
            alt="utopia"
            className="w-[420px] mx-auto mt-6 -ml-3 block lg:hidden"
          />
        </div>
      </div>
    </Container>
  );
};

export default FaqSection;
