"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import Container from "@/components/layouts/Container";

import { BLOGS, HTML } from "@/app/blogs/data";

const Blog = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="flex flex-col lg:flex-row justify-between gap-8 xl:gap-24">
        <div className="w-full flex flex-col gap-3 md:gap-11">
          <Link href="/blogs#more-blog">
            <Button variant="back" className="!pr-0.5">
              <IconChevronLeft className="!w-[20px] !h-[20px]" />
              <p className="hidden lg:block">Back</p>
            </Button>
          </Link>
          <div className="flex flex-col gap-8 lg:gap-10">
            <h1 className="!text-[24px] md:!text-[46px] !text-start">
              How AI is Revolutionizing Prop Trading: Strategies for Success
            </h1>
            <p className="font-bold">January 29th, 2025</p>
            <Image
              src="/assets/blog/blog-0.jpg"
              width={852}
              height={510}
              alt="blog"
              className="rounded-[12px] w-full md:rounded-[38px]"
            />
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: HTML }}
            ></div>
          </div>
        </div>
        <div className="max-w-full lg:max-w-[464px] w-full flex flex-col gap-4 md:gap-6">
          <h5 className="text-[26px]">Related Blogs</h5>
          <div className="flex flex-col gap-6">
            {BLOGS.map((item, index) => (
              <Link href="/blogs/blog" key={index}>
                <div className="p-4 flex gap-4 bg-[#000000] hover:bg-[#222222] rounded-[12px] w-full h-full cursor-pointer transition-all duration-200">
                  <Image
                    src={item.featured_image}
                    width={154}
                    height={154}
                    alt="blog"
                    className="rounded-[10px] w-[124px] sm:w-[154px] h-full min-h-[104px] max-h-[154px]"
                  />
                  <div className="flex flex-col gap-2.5">
                    <h5 className="text-[16px] sm:text-[18px] font-[700] leading-[120%]">
                      {item.title}
                    </h5>
                    <p className="truncate-multiline">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
