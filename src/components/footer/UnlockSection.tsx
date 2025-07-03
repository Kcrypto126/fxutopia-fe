"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../layouts/Container";
import { Button } from "../ui/button";

const UnlockSection = () => {
  return (
    <Container className="pb-8 md:pb-[70px]">
      <div className="relative z-0 rounded-3xl overflow-hidden px-3.5">
        <Image
          src="/assets/home/unlock-bg.png"
          width={1442}
          height={550}
          alt="unlock"
          className="absolute z-0 top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full min-h-[550px] flex flex-col gap-3 justify-center items-center">
          <h5 className="text-[30px] md:text-[48px] lg:text-[72px] font-[400] font-riosark text-center max-w-[948px] leading-[110%] uppercase">
            Ready to Unlock Your Trading Potential?
          </h5>
          <p className="text-center max-w-[709px]">
            Join thousands of Forex and Crypto traders leveling up their skills,
            tools, and strategies — all in one powerful, free-to-access
            platform.
          </p>
          <div className="flex flex-col md:flex-row w-full justify-center gap-5 mt-8">
            <Link href="/">
              <Button
                variant="common"
                className="common-button w-full md:!w-[204px] !bg-[#1283FF] hover:!bg-[#57a5f8]"
              >
                Join FX Utopia
              </Button>
            </Link>
            <Link href="/account/signup">
              <Button
                variant="common"
                className="common-button w-full md:!w-[269px]"
              >
                Create Your Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UnlockSection;
