"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Container from "../layouts/Container";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import BlogCards from "./BlogCard";

interface BlogProps {
  featured_image: string;
  title: string;
  description: string;
  action: string;
}

const BlogSection = ({ data }: { data: BlogProps[] }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container className="py-8 md:py-30">
      <div className="flex flex-col gap-15 md:gap-25">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20">
          <Image
            src="/assets/blog/blog-0.jpg"
            width={748}
            height={585}
            alt="blog"
            className="rounded-[30px] w-full h-full object-cover"
          />
          <div className="flex flex-col gap-4">
            <h5 className="text-[20px] md:text-[46px] font-riosark uppercase leading-[110%]">
              How AI is Revolutionizing Prop Trading: Strategies for Success
            </h5>
            <h5 className="text-[16px] md:text-[20px]">January 29th, 2025</h5>
            <p className="!text-[16px] md:!text-[20px]">
              The world is changing at a rate never seen before due to
              artificial intelligence, and the proprietary trading industry is
              not exempt from this rapidly developing technology. By enabling
              traders to create strategies that beat conventional approaches
              rife with human error, artificial intelligence (AI) has completely
              changed the way the industry operates. AI has given traders the
              ability to quickly and accurately execute trades, evaluate large
              amounts of data, and forecast market patterns.
            </p>
            <Link href="#more-blog">
              <Button variant="common" className="login-button w-[203px] mt-4">
                Show More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col" id="more-blog">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <h1 className="!text-center md:!text-start">Our Recent Blogs</h1>
            <div className="relative flex items-center max-w-[90vw] sm:max-w-[471px] w-full">
              <IconSearch
                width="20"
                height="20"
                color="#9441FE"
                className="absolute left-4"
              />
              <Input
                placeholder="Searching Popular Forums"
                className="h-[52px] w-full border-[1px] border-[#9862DB] !bg-[#512F7C66] rounded-full placeholder:text-[18px] pl-12 pr-6"
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </div>
          </div>
          <BlogCards data={data} />
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
