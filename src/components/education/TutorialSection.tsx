"use client";

import Image from "next/image";
import Container from "../layouts/Container";

const TutorialSection = () => {
  return (
    <Container className="pb-8 pt-15 md:pt-30">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col items-center">
          <Image
            src="/assets/education/tutorial-b.png"
            width={1402}
            height={254}
            alt="tutorial"
            className="lg:-mb-15"
          />
          <h1 className="max-w-[1098px]">
            Exclusive video tutorial for beginners
          </h1>
        </div>
        <div>
          <Image
            src="/assets/education/tutorial-v.png"
            width={1371}
            height={689}
            alt="video"
            className="mx-auto"
          />
        </div>
      </div>
    </Container>
  );
};

export default TutorialSection;
