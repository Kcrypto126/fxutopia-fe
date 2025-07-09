"use client";

import HeroSection from "@/components/marketplace/HeroSection";
import BlogSection from "@/components/blog/BlogSection";

import { Blogs as BlogData } from "@/components/blog/data";

const HeroData = {
  title: "FX Utopia Blogs: Trade Smarter, Think Deeper",
  description:
    "xplore fresh perspectives, timely insights, and actionable trading content — created by traders, for traders.",
};

const Blogs = () => {
  return (
    <>
      <HeroSection data={HeroData} />
      <BlogSection data={BlogData} />
    </>
  );
};

export default Blogs;
