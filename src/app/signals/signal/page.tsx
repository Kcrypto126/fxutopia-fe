"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import Container from "@/components/layouts/Container";
import SignalDetailsSection from "@/components/signals/SignalDetailsSection";
import SubscriptionSection from "@/components/signals/SubscriptionSection";
import LatestReviewSection from "@/components/signals/LatestReviewSection";

const Signal = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="flex flex-col gap-6 md:gap-11">
        <Link href="/signals" className="w-fit rounded-full">
          <Button variant="back" className="!pr-0.5">
            <IconChevronLeft className="!w-[20px] !h-[20px]" />
            <p className="hidden lg:block">Back</p>
          </Button>
        </Link>
        <div className="flex flex-col gap-10 lg:gap-25">
          <SignalDetailsSection />
          <SubscriptionSection />
          <LatestReviewSection />
        </div>
      </div>
    </Container>
  );
};

export default Signal;
