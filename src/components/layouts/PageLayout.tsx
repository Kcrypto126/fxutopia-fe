"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full relative z-0 overflow-hidden", className)}>
      <Image
        src="/assets/home/hero-top.png"
        width={1840}
        height={800}
        alt="hero-top"
        className="w-[300%] absolute top-0 left-[50%] -translate-x-[55%] -z-20 min-w-[1640px]"
      />
      <Image
        src="/assets/home/hero-left-top-light.png"
        width={519}
        height={519}
        alt="top-left"
        className="absolute top-0 left-0 -z-10 w-auto h-auto"
      />
      <Image
        src="/assets/home/hero-right-top.png"
        width={502}
        height={580}
        alt="right-left"
        className="absolute top-0 right-0 -z-10 w-auto h-auto"
      />
      {children}
    </div>
  );
};

export default PageLayout;
