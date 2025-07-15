"use client";

import { Pie, PieChart } from "recharts";
import { Button } from "../ui/button";
import Container from "../layouts/Container";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "Highly Satisfactory", visitors: 275, fill: "#9862DB" },
  { browser: "Satisfactory", visitors: 200, fill: "#623C93" },
  { browser: "Neutral", visitors: 187, fill: "#B692F6" },
  { browser: "Dissatisfactory", visitors: 173, fill: "#D6BBFB" },
  {
    browser: "Highly Dissatisfactory",
    visitors: 90,
    fill: "#381E5B",
  },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Highly Satisfactory",
    color: "#9862DB",
  },
  safari: {
    label: "Satisfactory",
    color: "#623C93",
  },
  firefox: {
    label: "Neutral",
    color: "#B692F6",
  },
  edge: {
    label: "Dissatisfactory",
    color: "#D6BBFB",
  },
  other: {
    label: "Highly Dissatisfactory",
    color: "#381E5B",
  },
} satisfies ChartConfig;

const CalculatorSection = () => {
  return (
    <Container className="py-8 md:py-15">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="max-w-full lg:max-w-[464px] w-full h-fit xl:h-auto flex flex-col gap-6 md:gap-10 p-4 md:p-10 rounded-[24px] border-[1px] border-[#361056] bg-gradient-to-b from-[#2B0A47] to-[#09030E]">
          <h1 className="!text-[30px] md:!text-[37px] !font-[400] !text-center">
            calculator
          </h1>
          <div className="flex flex-col gap-6">
            <Button
              variant="default"
              className="bg-[#381E5B] hover:bg-[#412467] text-[#fff] h-11 text-[16px] font-[500]"
            >
              Lot Size
            </Button>
            <Button
              variant="default"
              className="bg-[#381E5B] hover:bg-[#412467] text-[#fff] h-11 text-[16px] font-[500]"
            >
              Pip Value
            </Button>
            <Button
              variant="default"
              className="bg-[#381E5B] hover:bg-[#412467] text-[#fff] h-11 text-[16px] font-[500]"
            >
              Position Size
            </Button>
            <Button
              variant="default"
              className="bg-[#381E5B] hover:bg-[#412467] text-[#fff] h-11 text-[16px] font-[500]"
            >
              Risk Reward
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 md:gap-8 p-4 md:p-10 rounded-[24px] border-[1px] border-[#361056] bg-gradient-to-b from-[#2B0A47] to-[#09030E]">
          <h1 className="!text-[30px] md:!text-[37px] !font-[400] !text-center">
            AI Market sentiment tracker
          </h1>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-3 px-4 md:px-11">
            <div className="flex-1 w-full">
              <ChartContainer
                config={chartConfig}
                className="aspect-square max-h-[280px]"
              >
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        className="!min-w-[11rem]"
                        hideLabel
                      />
                    }
                  />
                  <Pie
                    data={chartData}
                    dataKey="visitors"
                    nameKey="browser"
                    innerRadius={75}
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="w-full flex-1 flex flex-col gap-5">
              {chartData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 justify-between items-center"
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-[18px] h-[18px] rounded-full"
                      style={{ backgroundColor: item.fill }}
                    ></div>
                    <h6 className="text-[18px] font-[500]">{item.browser}</h6>
                  </div>
                  <h6 className="text-[24px] font-[600]">{item.visitors}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CalculatorSection;
