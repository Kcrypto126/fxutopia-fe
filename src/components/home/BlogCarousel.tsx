"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface BlogProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

export function BlogCarousel({ blogs }: { blogs: BlogProps[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full overflow-hidden"
    >
      <CarouselContent>
        {blogs.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="blog rounded-[12px] overflow-hidden w-full h-full flex flex-col cursor-pointer">
              <div className="w-full h-[288px] flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={288}
                  className="fetured-img w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 px-5 py-6 gap-2 bg-[#160426] border-[#A9A9A94D] border-[1px] border-t-0 rounded-b-[13px]">
                <div className="space-y-3 flex-1">
                  <h5 className="text-[14px] font-[500]">{item.date}</h5>
                  <h2 className="!text-start">{item.title}</h2>
                  <p className="flex-1">{item.description}</p>
                </div>
                <Link href="/" className="text-[16px] font-bold mt-1 md:mt-6">
                  Read More
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
