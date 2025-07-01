"use client";

import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full px-3 ${className || ""}`}>
      <div className="max-w-[1440px] w-full mx-auto">{children}</div>
    </div>
  );
};

export default Container;
