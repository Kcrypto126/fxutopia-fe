"use client";

import Image from "next/image";
import Container from "../layouts/Container";

const AboutFxUtopiaSection = () => {
  return (
    <Container className="py-8 md:py-30">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <Image
          src="/assets/about-us/about-fx.png"
          width={593}
          height={434}
          alt="about-hero"
          className="w-[493px] xl:w-[593px] h-auto"
        />
        <div className="space-y-2 md:space-y-4 max-w-[701px]">
          <h1 className="!text-start md:!text-center lg:!text-start">
            About FX Utopia
          </h1>
          <p>
            At FX Utopia, we&apos;re building something more than just a trading
            platform. We&apos;re creating a digital ecosystem — a hub where
            traders learn, grow, and thrive together.
            <br />
            <br /> Born out of frustration with misleading “get-rich-quick”
            schemes and overpriced trading groups, FX Utopia was founded by real
            traders who understand what it means to start from scratch, to lose
            money, to learn the hard way — and ultimately, to succeed through
            discipline, strategy, and support. <br />
            <br />
            We believe that trading success isn&apos;t about luck — it&apos;s
            about knowledge, tools, and community. That&apos;s what we offer.
            That&apos;s what we stand for.
          </p>
          <h1 className="!text-[20px] md:!text-[30px] !text-start md:!text-center lg:!text-start !text-[#9441FE]">
            Our Mission
          </h1>
          <p>
            To provide accessible, high-quality Forex & Crypto education,
            industry-leading tools, and a dynamic global community — so every
            trader has a real chance at long-term success.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutFxUtopiaSection;
