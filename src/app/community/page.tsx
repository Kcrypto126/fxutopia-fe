"use client";

import Image from "next/image";

import Container from "@/components/layouts/Container";

const Community = () => {
  return (
    <Container className="relative z-0 py-20 md:py-48">
      <Image
        src="/assets/home/hero-top.png"
        width={1840}
        height={800}
        alt="hero-top"
        className="w-[300%] absolute top-0 left-[50%] -translate-x-[55%] z-0 min-w-[1640px]"
      />
      <div className="relative z-10 flex flex-col gap-6 md:gap-20">
        <div>sdf</div>
        <div>sdf</div>
      </div>
    </Container>
  );
};

export default Community;
