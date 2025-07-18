"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { BlogProps } from "@/app/blogs/data";

const BlogCards = ({ data }: { data: BlogProps[] }) => {
  const [fromNumber, setFromNumber] = useState(0);
  const [toNumber, setToNumber] = useState(9);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
        {data.slice(fromNumber, toNumber).map((item, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between gap-4 md:gap-6 p-3 md:p-6 border-[1px] border-[#361056] bg-gradient-to-b from-[#2B0A47] to-[#09030E] hover:bg-[#381E5B] hover:bg-none hover:border-[#604683] rounded-[22px] cursor-pointer transition-colors transition-border duration-300"
          >
            <div className="featured-img w-full !rounded-[11px] overflow-hidden h-[295px] bg-[#ffffff14] flex justify-center items-center transition-colors duration-300 group-hover:bg-[#ffffff34]">
              <Image
                src={item.featured_image}
                width={406}
                height={250}
                alt="featured"
                className="w-full h-[295px] object-cover"
              />
            </div>
            <h5 className="text-[20px] md:text-[30px] font-riosark font-[400] leading-[110%] uppercase">
              {item.title}
            </h5>
            <p className="text-[16px] md:text-[20px]">{item.description}</p>
            <Link href="/blogs/blog">
              <Button variant="common" className="login-button w-fit px-6 !h-9">
                {item.action}
              </Button>
            </Link>
          </div>
        ))}
      </div>
      <Pagination className="mt-8 md:mt-20">
        <PaginationContent className="w-full flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            {Array.from({ length: Math.ceil(data.length / 9) }).map(
              (_, pageIndex) => (
                <PaginationItem key={pageIndex}>
                  <button
                    type="button"
                    onClick={() => {
                      setFromNumber(pageIndex * 9);
                      setToNumber((pageIndex + 1) * 9);
                    }}
                    className={`!text-[14px] md:!text-[24px] px-2 py-1 rounded transition-colors duration-200 cursor-pointer bg-transparent hover:text-[#9a53f8] ${
                      fromNumber / 9 === pageIndex
                        ? "text-[#9441FE]"
                        : "text-white"
                    }`}
                    style={{
                      border: "none",
                      background: "none",
                      boxShadow: "none",
                    }}
                  >
                    {pageIndex + 1}
                  </button>
                </PaginationItem>
              )
            )}
          </div>
          <div className="flex items-center gap-5">
            <PaginationItem>
              <PaginationPrevious
                onClick={() => {
                  if (fromNumber > 0) {
                    setFromNumber(fromNumber - 9);
                    setToNumber(toNumber - 9);
                  }
                }}
                aria-disabled={fromNumber === 0}
                tabIndex={fromNumber === 0 ? -1 : 0}
                style={{
                  pointerEvents: fromNumber === 0 ? "none" : "auto",
                  opacity: fromNumber === 0 ? 0.5 : 1,
                }}
                className="w-12 md:w-18 h-12 md:h-18 rounded-full bg-[#9441FE] hover:!bg-[#9441FE]"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => {
                  if (toNumber < data.length) {
                    setFromNumber(fromNumber + 9);
                    setToNumber(toNumber + 9);
                  }
                }}
                aria-disabled={toNumber >= data.length}
                tabIndex={toNumber >= data.length ? -1 : 0}
                style={{
                  pointerEvents: toNumber >= data.length ? "none" : "auto",
                  opacity: toNumber >= data.length ? 0.5 : 1,
                }}
                className="w-12 md:w-18 h-12 md:h-18 rounded-full bg-[#9441FE] hover:!bg-[#9441FE]"
              />
            </PaginationItem>
          </div>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogCards;
