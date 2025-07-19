"use client";

import HeroSection from "@/components/education/HeroSection";
import TutorialSection from "@/components/education/TutorialSection";
import CardSection from "@/components/education/CardSection";

const HeroData = {
  title: "Unlock your potential with expert-led education and resources",
  description:
    "Explore fresh perspectives, timely insights, and actionable trading content — created by traders, for traders.",
};

import { Courses, Ebooks, Educations } from "@/app/education/data";

const titles = [
  "See Our Latest Courses",
  "Essential e-Books for Every Trader",
  "FX Utopia Marketplace",
];

const descriptions = [
  "Whether you're brand new to trading or seeking to fine-tune advanced strategies, our interactive courses cover the full spectrum. Built by professionals with years of real-market experience, each course includes practical examples, downloadable resources, quizzes, and community discussion.",
  "Download actionable insights you can read anytime. <br /> Our growing e-book library turns complex topics into easy-to-follow guides. Perfect for offline reading or quick refreshers before you trade.",
  "We've handpicked a collection of trading tools, indicators, and mentorships from verified providers. Whether you're automating your trades or searching for premium signals, the FX Utopia Marketplace makes it easy to find what works.",
];

const Education = () => {
  return (
    <div className="pb-8 md:pb-22">
      <HeroSection data={HeroData} />
      <CardSection
        data={Courses}
        title={titles[0]}
        description={descriptions[0]}
      />
      <TutorialSection />
      <CardSection
        data={Ebooks}
        title={titles[1]}
        description={descriptions[1]}
      />
      <CardSection
        data={Educations}
        title={titles[2]}
        description={descriptions[2]}
      />
    </div>
  );
};

export default Education;
