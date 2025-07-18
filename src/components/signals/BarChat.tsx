"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#9441FE",
  },
  mobile: {
    label: "Mobile",
    color: "#FFA528",
  },
} satisfies ChartConfig;

export function SignalBarChat() {
  return (
    <Card className="bg-[#000000] border-none rounded-[30px]">
      <CardHeader className="h-[52px] flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <CardTitle>Weekly Performance</CardTitle>
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 rounded-full bg-[#9441FE]"></span>
          <h6 className="text-[16px]">Wins</h6>
          <span className="w-4 h-4 rounded-full bg-[#FFA528] ml-2"></span>
          <h6 className="text-[16px]">Losses</h6>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={{ strokeWidth: 1 }}
              tickLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: 1 }}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="#9441FE" radius={8} />
            <Bar dataKey="mobile" fill="#FFA528" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
