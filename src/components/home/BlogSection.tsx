"use client";

import Image from "next/image";
import Container from "../layouts/Container";
import Link from "next/link";
import { BlogCarousel } from "./BlogCarousel";

const blogs = [
  {
    title: "Weekly Market Outlooks",
    description:
      "Stay updated with expert forecasts, trend breakdowns, and key levels to watch each week in Forex and Crypto...",
    image: "/assets/home/blog-1.png",
    date: "Market Outlook • 19 Jan 2025 • 3 min read",
  },
  {
    title: "trategy Deep Dives",
    description:
      "Discover proven trading strategies, risk management frameworks, and psychological techniques used by successful traders...",
    image: "/assets/home/blog-2.png",
    date: "Market Outlook • 19 Jan 2025",
  },
  {
    title: "Tool Tutorials & Reviews",
    description:
      "Explore how to get the most out of trading platforms, bots, calculators, and custom indicators with step-by-step walkthroughs and unbiased reviews...",
    image: "/assets/home/blog-3.png",
    date: "Market Outlook • 19 Jan 2025",
  },
  {
    title: "trategy Deep Dives",
    description:
      "Discover proven trading strategies, risk management frameworks, and psychological techniques used by successful traders...",
    image: "/assets/home/blog-2.png",
    date: "Market Outlook • 19 Jan 2025",
  },
];

const BlogSection = () => {
  return (
    <Container className="relative z-0 py-8 md:py-20">
      <Image
        src="/assets/home/blog-bg.png"
        width={1300}
        height={700}
        alt="blog"
        className="w-auto absolute z-0 top-0 left-0"
      />
      <div className="relative z-10 flex flex-col gap-8">
        <div className="flex flex-col gap-3 md:gap-6">
          <h1>From the FX Utopia Blog</h1>
          <p className="text-center">
            Market insights, trading strategies, and educational content
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <BlogCarousel blogs={blogs} />
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
