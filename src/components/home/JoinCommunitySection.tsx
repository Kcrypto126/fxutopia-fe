"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../layouts/Container";
import { Button } from "../ui/button";

const JoinCommunitySection = () => {
  return (
    <Container className="py-8 md:py-28 overflow-hidden">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-8">
          <h5 className="uppercase text-center md:text-start text-[30px] lg:text-[50px] xl:text-[72px] font-riosark font-[400] leading-[120%] max-w-[956px]">
            Join a Global Trading and Crypto Community
          </h5>
          <div className="flex flex-col justify-center items-center md:items-start gap-[20px]">
            <p className="text-center md:text-start">
              FX Utopia is more than a platform. It&apos;s a movement.
            </p>
            <Link href="/">
            <Button variant="common" className="common-button !w-[269px]">
              Join The Community
            </Button>
            </Link>
          </div>
        </div>
        <div className="w-full relative z-0">
          <Image
            src="/assets/home/global.png"
            width={1440}
            height={651}
            alt="global"
            className=" min-w-[589px] w-auto relative top-0 left-[50%] -translate-x-[50%] z-0"
          />
          <Image
            src="/assets/home/global-bg.png"
            width={800}
            height={500}
            alt="global-bg"
            className="w-auto absolute left-[50%] -translate-x-[50%] top-0 z-10"
          />
        </div>
      </div>
    </Container>
  );
};

export default JoinCommunitySection;
