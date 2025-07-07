"use client";

import Container from "@/components/layouts/Container";
import CategorySection from "@/components/community/CategorySection";
import ThreadSection from "@/components/community/ThreadSection";

const Thread = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="w-full flex flex-col lg:flex-row gap-10 justify-between">
        <CategorySection />
        <ThreadSection />
      </div>
    </Container>
  );
};

export default Thread;
