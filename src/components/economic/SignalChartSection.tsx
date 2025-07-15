"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import Container from "../layouts/Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A stacked bar chart with a legend";

const chartData2 = [
  { month: "2025-01", actual: 222, forecast: 150 },
  { month: "2025-02", actual: 242, forecast: 260 },
  { month: "2025-03", actual: 373, forecast: 290 },
  { month: "2025-04", actual: 301, forecast: 340 },
  { month: "2025-05", actual: 97, forecast: 180 },
  { month: "2025-06", actual: 167, forecast: 120 },
  { month: "2025-07", actual: 242, forecast: 260 },
  { month: "2025-08", actual: 373, forecast: 290 },
  { month: "2025-09", actual: 301, forecast: 340 },
  { month: "2025-10", actual: 245, forecast: 180 },
  { month: "2025-11", actual: 409, forecast: 320 },
  { month: "2025-12", actual: 59, forecast: 110 },
  { month: "2024-01", actual: 261, forecast: 190 },
  { month: "2024-02", actual: 327, forecast: 350 },
  { month: "2024-03", actual: 292, forecast: 210 },
  { month: "2024-04", actual: 342, forecast: 380 },
  { month: "2024-05", actual: 137, forecast: 220 },
  { month: "2024-06", actual: 120, forecast: 170 },
  { month: "2024-07", actual: 138, forecast: 190 },
  { month: "2024-08", actual: 446, forecast: 360 },
  { month: "2024-09", actual: 364, forecast: 410 },
  { month: "2024-10", actual: -243, forecast: -180 },
  { month: "2024-11", actual: -89, forecast: -50 },
  { month: "2024-12", actual: -137, forecast: -200 },
  { month: "2023-01", actual: -224, forecast: -170 },
  { month: "2023-02", actual: -138, forecast: -230 },
  { month: "2023-03", actual: -387, forecast: -290 },
  { month: "2023-04", actual: -215, forecast: -250 },
  { month: "2023-05", actual: 75, forecast: 130 },
  { month: "2023-06", actual: 383, forecast: 420 },
  { month: "2023-07", actual: 122, forecast: 180 },
  { month: "2023-08", actual: 315, forecast: 240 },
  { month: "2023-09", actual: 454, forecast: 380 },
  { month: "2023-10", actual: 165, forecast: 220 },
  { month: "2023-11", actual: 293, forecast: 310 },
  { month: "2023-12", actual: 247, forecast: 190 },
  { month: "2022-01", actual: 385, forecast: 420 },
  { month: "2022-02", actual: 481, forecast: 390 },
  { month: "2022-03", actual: 498, forecast: 520 },
  { month: "2022-04", actual: 388, forecast: 300 },
  { month: "2022-05", actual: 149, forecast: 210 },
  { month: "2022-06", actual: 227, forecast: 180 },
  { month: "2022-07", actual: 293, forecast: 330 },
  { month: "2022-08", actual: 335, forecast: 270 },
  { month: "2022-09", actual: 197, forecast: 240 },
  { month: "2022-10", actual: 197, forecast: 160 },
  { month: "2022-11", actual: 448, forecast: 490 },
  { month: "2022-12", actual: 473, forecast: 380 },
  { month: "2021-01", actual: 338, forecast: 400 },
  { month: "2021-02", actual: 499, forecast: 420 },
  { month: "2021-03", actual: 315, forecast: 350 },
  { month: "2021-04", actual: 235, forecast: 180 },
  { month: "2021-05", actual: 177, forecast: 230 },
  { month: "2021-06", actual: 82, forecast: 140 },
  { month: "2021-07", actual: 81, forecast: 120 },
  { month: "2021-08", actual: 252, forecast: 290 },
  { month: "2021-09", actual: 294, forecast: 220 },
  { month: "2021-10", actual: 201, forecast: 250 },
  { month: "2021-11", actual: 213, forecast: 170 },
  { month: "2021-12", actual: 420, forecast: 460 },
];

const chartConfig = {
  actual: {
    label: "Actual",
    color: "#9441FE",
  },
  forecast: {
    label: "Forecast",
    color: "#512F7C",
  },
} satisfies ChartConfig;

const SignalChartSection = () => {
  const [isActual, setIsActual] = useState(false);
  const [isForecast, setIsForecast] = useState(false);
  const [isRevision, setIsRevision] = useState(false);

  const viewChart = (view: string) => {
    if (view === "actual") {
      setIsActual(!isActual);
    } else if (view === "forecast") {
      setIsForecast(!isForecast);
    } else {
      setIsRevision(!isRevision);
    }
    console.log(view);
  };

  return (
    <Container className="pb-0 md:pb-22">
      <div className=" flex flex-col gap-20 px-6 lg:px-11 py-16 rounded-[20px] bg-gradient-to-b from-[#2B0A47] to-[#09030E] border-[1px] border-[#361056]">
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
          <h1 className="!text-[30px] md:!text-[36px]">
            free signals dashboard
          </h1>
          <h1 className="!text-[18px] md:!text-[20px]">Jan 2021 - Dec 2025</h1>
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <Checkbox
                id="actual"
                defaultChecked={isActual}
                className="dark:data-[state=checked]:bg-[#9441FE] dark:bg-[#CECECE] border-none dark:text-[#fff]"
                onCheckedChange={() => {
                  viewChart("actual");
                }}
              />
              <Label htmlFor="actual">Actual</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="forecast"
                defaultChecked={isForecast}
                className="dark:data-[state=checked]:bg-[#9441FE] dark:bg-[#CECECE] border-none dark:text-[#fff]"
                onCheckedChange={() => {
                  viewChart("forecast");
                }}
              />
              <Label htmlFor="forecast">Forecast</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="revisions"
                defaultChecked={isRevision}
                className="dark:data-[state=checked]:bg-[#9441FE] dark:bg-[#CECECE] border-none dark:text-[#fff]"
                onCheckedChange={() => {
                  viewChart("revisions");
                }}
              />
              <Label htmlFor="revisions">Revisions</Label>
            </div>
          </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
        >
          <BarChart data={chartData2}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value: any, _index: number): string => {
                const date = new Date(value);
                // Only show year label for January
                if (date.getMonth() === 0) {
                  return date.getFullYear().toString();
                }
                return "";
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="month"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="actual"
              stackId="a"
              fill="#9441FE"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="forecast"
              stackId="a"
              fill="#512F7C"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </Container>
  );
};

export default SignalChartSection;
