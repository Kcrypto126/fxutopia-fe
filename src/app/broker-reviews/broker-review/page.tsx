"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import Container from "@/components/layouts/Container";
import SingleReviewHeader from "@/components/broker-review/SingleReviewHeader";
import SingleReviewThread from "@/components/broker-review/SingleReviewThread";

const ReviewSingle = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="flex flex-col gap-6 md:gap-11">
        <div className="flex flex-col gap-8 md:gap-15 pb-6 md:pb-11 border-b-[1px] border-[#ffffff5e]">
          <div className="flex gap-2 items-center justify-between">
            <Link href="/broker-review">
              <Button variant="back" className="!pr-0.5">
                <IconChevronLeft className="!w-[20px] !h-[20px]" />
                <p className="hidden lg:block">Back</p>
              </Button>
            </Link>
            <h5 className="text-[16px] md:text-[20px]">Total Discussions</h5>
          </div>
          <SingleReviewHeader />
        </div>
        <SingleReviewThread />
      </div>
    </Container>
  );
};

export default ReviewSingle;
