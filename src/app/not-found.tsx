"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center relative z-0 px-3">
      <Image
        src="/assets/home/hero-left.png"
        width={259}
        height={321}
        alt="left"
        className="absolute top-[15%] -left-[110px] md:left-0 z-20"
      />
      <Image
        src="/assets/home/hero-right.png"
        width={175}
        height={338}
        alt="left"
        className="absolute top-[35%] -right-[80px] md:right-0 z-20"
      />
      <Image
        src="/assets/community/community-left.png"
        width={502}
        height={1300}
        alt="right-left"
        className="absolute -bottom-[70%] left-0 -z-10 w-auto h-auto"
      />
      <div className="relative pt-[112px] z-20 flex flex-col gap-4 md:gap-6">
        <Image
          src="/assets/not-found/not-found.png"
          width={460}
          height={330}
          alt="404"
        />
        <div className="flex flex-col items-center gap-4">
          <h1 className="!text-[120px] lg:!text-[200px] text-[#9441FE] !leading-[100%]">
            404
          </h1>
          <div>
            <h1>Page Not Found</h1>
            <p>Looks like you took a wrong turn on the trading chart.</p>
          </div>
          <Link href="/">
            <Button variant="common" className="login-button w-[282px]">
              Back to the homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
