"use client";

import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      <Image
        src="/assets/signin/global-1.png"
        width={980}
        height={615}
        alt="global"
        className="absolute bottom-0 lg:bottom-[50%] translate-y-[50%] right-0 max-w-[980px] -z-10 w-full"
      />
      <Image
        src="/assets/signin/utopia.png"
        width={1780}
        height={169}
        alt="utopia"
        className="absolute max-w-[1580px] w-full h-auto bottom-[27px] left-[50%] -z-10 -translate-x-[50%]"
      />
      <Image
        src="/assets/signin/signin-right-bottom.png"
        width={1000}
        height={1000}
        alt="global"
        priority
        className="absolute right-0 bottom-0 -z-10 w-auto h-auto"
      />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="pr-0 lg:pr-18 relative flex justify-center lg:justify-end">
          {children}
          <Image
            src="/assets/signin/rectangle.png"
            width={486}
            height={668}
            alt="rectangle"
            className="absolute -right-8 bottom-0 -z-10 max-w-[486px] w-full h-auto hidden lg:block"
          />
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
