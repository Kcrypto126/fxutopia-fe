"use client";

import Container from "@/components/layouts/Container";
import FilterSection from "@/components/community/FilterSection";
import CategorySection from "@/components/community/CategorySection";
import IndividualCategorySection from "@/components/community/IndividualCategorySection";

const IndividualCategory = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="flex flex-col gap-6 lg:gap-20 w-full">
        <FilterSection />
        <div className="flex flex-col lg:flex-row gap-10 justify-between">
          <CategorySection />
          <IndividualCategorySection />
        </div>
      </div>
    </Container>
  );
};

export default IndividualCategory;
