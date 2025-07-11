"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Container from "../layouts/Container";
import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";

interface CourseProps {
  featured_image: string;
  title: string;
  description: string;
  action: string;
}

const CardSection = ({
  data,
  title,
  description,
}: {
  data: CourseProps[];
  title: string;
  description: string;
}) => {
  const [Number, setNumber] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const showMoreCourse = () => {
    setIsLoading(true);
    setTimeout(() => {
      setNumber(Number + 6);
      setIsLoading(false);
    }, 200);
  };

  return (
    <Container className="pb-8 pt-15 md:pt-30">
      <div className="flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-6">
          <h1 className="!text-center md:!text-start">{title}</h1>
          <p className="text-[16px] lg:text-20px max-w-[580px] text-center md:text-start">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
          {data.slice(0, Number).map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between gap-4 md:gap-6 p-3 md:p-6 border-[1px] border-[#361056] bg-gradient-to-b from-[#2B0A47] to-[#09030E] hover:bg-[#381E5B] hover:bg-none hover:border-[#604683] rounded-[22px] cursor-pointer transition-colors transition-border duration-300"
            >
              <div className="featured-img w-full !rounded-[11px] overflow-hidden h-[295px] bg-[#ffffff14] flex justify-center items-center transition-colors duration-300 group-hover:bg-[#ffffff34]">
                <Image
                  src={item.featured_image}
                  width={406}
                  height={250}
                  alt="featured"
                  className={`${
                    title == "Essential e-Books for Every Trader"
                      ? "w-auto h-[250px]"
                      : "w-full h-[295px] object-cover"
                  }`}
                />
              </div>
              <h5 className="text-[20px] md:text-[30px] font-riosark font-[400] leading-[110%] uppercase">
                {item.title}
              </h5>
              <p className="text-[16px] md:text-[20px]">{item.description}</p>
              <Button variant="common" className="login-button w-fit px-6 !h-9">
                {item.action}
              </Button>
            </div>
          ))}
        </div>
        <Button
          variant="common"
          className="login-button w-full sm:!w-[264px] mx-auto"
          onClick={() => {
            showMoreCourse();
          }}
        >
          {isLoading ? (
            <IconLoader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Show More Courses"
          )}
        </Button>
      </div>
    </Container>
  );
};

export default CardSection;
