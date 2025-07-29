"use client";

import Container from "@/components/layouts/Container";
import FilterSection from "@/components/community/FilterSection";
import CategorySection from "@/components/community/CategorySection";
import CategoryDescriptionSection from "@/components/community/CategoryDescriptionSection";
import LatestDiscussionSection from "@/components/community/LatestDiscussionSection";

const Community = () => {
  return (
    <Container className="py-20 lg:pt-48 lg:pb-32">
      <div className="space-y-6 lg:space-y-20 w-full">
        <FilterSection />
        <div className="flex flex-col xl:flex-row gap-10 justify-between">
          <div className="flex flex-col lg:flex-row gap-10">
            <CategorySection />
            <CategoryDescriptionSection />
          </div>
          <LatestDiscussionSection />
        </div>
      </div>
    </Container>
  );
};

export default Community;
