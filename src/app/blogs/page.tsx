"use client";

import HeroSection from "@/components/education/HeroSection";
import BlogSection from "@/components/blog/BlogSection";

import { BLOGS } from "./data";

const HeroData = {
  title: "FX Utopia Blogs: Trade Smarter, Think Deeper",
  description:
    "xplore fresh perspectives, timely insights, and actionable trading content — created by traders, for traders.",
};

const Blogs = () => {
  return (
    <>
      <HeroSection data={HeroData} />
      <BlogSection data={BLOGS} />
    </>
  );
};

export default Blogs;
