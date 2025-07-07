"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full px-3", className)}>
      <div className="max-w-[1440px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default Container;
