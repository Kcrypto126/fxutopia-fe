"use client";

import { ClockIcon, DiskIcon } from "../ui/icon";
import Link from "next/link";

import { Descriptions } from "./data";

const CategoryDescriptionSection = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {Descriptions.map((item) => (
        <div
          key={item.title}
          className={`flex flex-col gap-4 ${
            Descriptions[Descriptions.length - 1] === item
              ? "border-none"
              : "border-b-[1px]"
          } pb-10 border-[#FFFFFF50]`}
        >
          <div className="flex justify-between gap-2 items-center">
            <Link href="/community/individual-category">
              <h5
                className="text-[20px] md:text-[36px] font-[500] hover:opacity-70 transition-all duration-300 "
                style={{ color: item.color }}
              >
                {item.title}
              </h5>
            </Link>
            <div className="flex gap-2 items-center">
              <ClockIcon />
              <h5 className="text-[20px] md:text-[24px] font-[500] text-[#FFFFFF50]">{`${item.week} / week`}</h5>
            </div>
          </div>
          <p className="mt-0 md:mt-2">{item.description}</p>
          <ul className="grid grid-cols-2 gap-2">
            {item.tags.map((tag) => (
              <li key={tag} className="flex gap-3 items-center">
                <DiskIcon color={item.color} width="13" height="13" />
                <p className="!text-[14px] md:!text-[18px]">{tag}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryDescriptionSection;
