"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  IconChevronDown,
  IconFilter2,
  IconLoader2,
  IconSearch,
} from "@tabler/icons-react";
import Container from "../layouts/Container";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowDownAccordianIcon,
  ArrowUpAccordianIcon,
  GraphsIcon,
} from "../ui/icon";

const data = [
  [
    {
      date: "Tue May 01 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 01 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 01 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 02 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 02 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 02 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 03 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 03 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 03 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 04 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 04 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 04 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 05 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 05 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 05 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 06 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 06 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 06 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
  [
    {
      date: "Tue May 07 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:50am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 07 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "4:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
    {
      date: "Tue May 07 2025 00:00:00 GMT+0900 (Japan Standard Time)",
      time: "5:55am",
      currency: "JPY",
      impact: "Capital Spending q/y",
      actual: "6.4%",
      forcast: "3.8%",
      previous: "-0.2%",
    },
  ],
];

const invoices = [
  {
    history: "Mar 4, 2025",
    actual: -0.2,
    forcast: 8.1,
    previous: 4.9,
  },
  {
    history: "Dec 2, 2024",
    actual: 8.1,
    forcast: 7.4,
    previous: 6.7,
  },
  {
    history: "Sep 2, 2024",
    actual: 7.4,
    forcast: 7.6,
    previous: 9.6,
  },
  {
    history: "Jun 3, 2024",
    actual: 6.8,
    forcast: 18.1,
    previous: 14.9,
  },
  {
    history: "Mar 4, 2024",
    actual: 9.4,
    forcast: 3.4,
    previous: 2.9,
  },
  {
    history: "Dec 1, 2023",
    actual: 3.4,
    forcast: 3.4,
    previous: 2.9,
  },
  {
    history: "Dec 1, 2023",
    actual: 6.4,
    forcast: 3.4,
    previous: 2.9,
  },
  {
    history: "Dec 1, 2023",
    actual: 11.4,
    forcast: 3.4,
    previous: 2.9,
  },
  {
    history: "Dec 1, 2023",
    actual: 12.4,
    forcast: 3.4,
    previous: 2.9,
  },
];

const MainSection = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [searchValue, setSearchValue] = React.useState("");

  const [fromDate, setFromDate] = React.useState<Date | undefined>(
    () => new Date()
  );
  const [toDate, setToDate] = React.useState<Date | undefined>(
    () => new Date()
  );

  const isDateInRange = (dateStr: string) => {
    const date = new Date(dateStr);

    if (!fromDate || !toDate) {
      return false;
    }

    return date >= fromDate && date <= toDate;
  };

  // To get only the items with date from May 01 to May 03:
  const filteredData = data
    .map((dayArr) => dayArr.filter((item) => isDateInRange(item.date)))
    .filter((dayArr) => dayArr.length > 0);

  const convertDate = (date: Date | undefined) => {
    if (date) {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "2-digit",
      };
      return date.toLocaleDateString("en-US", options);
    }
    return "";
  };

  const handleData = ({ date }: { date: Date }) => {
    // Convert date to "Tue Jul 01" format
    if (date) {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        month: "short",
        day: "2-digit",
      };
      const formatted = date.toLocaleDateString("en-US", options);
      console.log(formatted);
    }

    // To compare two date strings like "Tue Jul 01 2025 00:00:00 GMT+0900 (Japan Standard Time)" by size,
    // you can convert them to Date objects and compare their numeric values (timestamps).
    // Example:
    // const date1 = new Date("Tue Jul 01 2025 00:00:00 GMT+0900 (Japan Standard Time)");
    // const date2 = new Date("Wed Jul 02 2025 00:00:00 GMT+0900 (Japan Standard Time)");
    // if (date1 > date2) { ... } // date1 is later than date2

    setFromDate(date);
    setToDate(date);

    setDate(date);
    setOpen(false);
  };

  return (
    <Container className="pt-8 md:pt-20 pr-0 xl:pr-3">
      <div className="flex flex-col gap-6 md:gap-15">
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 lg:gap-6">
          <div className="flex gap-4 lg:gap-6 items-center">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="default"
                  id="date"
                  className="text-[16px] !text-[#fff] font-[500] !w-[150px] md:!w-[160px] !h-11 md:!h-[52px] rounded-full bg-[#512F7C66] hover:bg-[#6B459C60]"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    if (date) {
                      handleData({ date });
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
            <Button variant="filter">
              <IconFilter2
                width="32"
                height="32"
                color="#9862DB"
                className="!w-5 !h-5 md:!w-7 md:!h-7"
              />
              <h5 className="text-[16px] font-[500] hidden lg:block">Filter</h5>
            </Button>
          </div>
          <div className="relative flex items-center max-w-[90vw] sm:max-w-[471px] w-full">
            <IconSearch
              width="20"
              height="20"
              color="#9441FE"
              className="absolute left-4"
            />
            <Input
              placeholder="Searching Brokers"
              className="h-11 md:h-[52px] w-full border-[1px] border-[#9862DB] !bg-[#512F7C66] rounded-full placeholder:text-[18px] pl-12 pr-6"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="calendar flex flex-col gap-8">
          <div className="w-full px-8 pb-9 flex justify-between gap-[71.33px] border-b-[1px] border-[#FFFFFF80] min-w-[1400px]">
            <h5 className="text-[18px] w-[114px]">Date</h5>
            <h5 className="text-[18px] w-[64px]">Time</h5>
            <h5 className="text-[18px] w-[73px]">Currency</h5>
            <h5 className="text-[18px] w-[180px]">Impact</h5>
            <h5 className="text-[18px] w-[50px]">Actual</h5>
            <h5 className="text-[18px] w-[60px]">Forcast</h5>
            <h5 className="text-[18px] w-[70px]">Previous</h5>
            <h5 className="text-[18px] w-[50px]">Graph</h5>
            <h5 className="text-[18px] w-[55px]">Details</h5>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 min-w-[1400px]">
            {data.map((dayData, dayIndex) => {
              const [dataCount, setDataCount] = React.useState(
                Math.min(2, dayData.length)
              );
              const [isLoading, setIsLoading] = React.useState(false);
              return (
                <div
                  key={dayIndex}
                  className="pb-6 md:pb-12 border-b-[1px] border-[#fff]"
                >
                  {(() => {
                    // Manage local graph open state for each row in this day
                    const [localGraphOpenStates, setLocalGraphOpenStates] =
                      React.useState(() => Array(dayData.length).fill(false));

                    // When dataCount increases, ensure localGraphOpenStates is long enough
                    React.useEffect(() => {
                      if (localGraphOpenStates.length < dayData.length) {
                        setLocalGraphOpenStates((prev) => [
                          ...prev,
                          ...Array(dayData.length - prev.length).fill(false),
                        ]);
                      }
                    }, [dayData.length, localGraphOpenStates.length]);

                    return (
                      <div className="flex flex-col gap-4 md:gap-8">
                        {dayData
                          .slice(0, dataCount)
                          .map((timeData, timeIndex) => {
                            const isLocalGraphOpen =
                              localGraphOpenStates[timeIndex];
                            const handleToggleGraph = () => {
                              setLocalGraphOpenStates((prev) => {
                                const newArr = [...prev];
                                newArr[timeIndex] = !newArr[timeIndex];
                                return newArr;
                              });
                            };

                            return (
                              <div
                                key={timeIndex}
                                className="flex flex-col py-5 px-8 md:p-8 bg-[#000000] border-[1px] border-[#9862DB] rounded-[20px]"
                              >
                                <Accordion
                                  type="single"
                                  collapsible
                                  className="w-full"
                                  defaultValue="item-0"
                                >
                                  <AccordionItem
                                    value={`item-1`}
                                    className="data-[state=open]:!bg-transparent data-[state=closed]:!bg-transparent"
                                  >
                                    <div className="flex items-center justify-between gap-[71.33px]">
                                      <h5 className="text-[18px] w-[114px] text-[#9441FE]">
                                        {convertDate(new Date(timeData.date))}
                                      </h5>
                                      <h5 className="text-[18px] w-[64px]">
                                        {timeData.time}
                                      </h5>
                                      <h5 className="text-[18px] w-[73px]">
                                        {timeData.currency}
                                      </h5>
                                      <h5 className="text-[18px] w-[180px]">
                                        {timeData.impact}
                                      </h5>
                                      <h5 className="text-[18px] w-[50px] text-[#21C015]">
                                        {timeData.actual}
                                      </h5>
                                      <h5 className="text-[18px] w-[60px]">
                                        {timeData.forcast}
                                      </h5>
                                      <h5 className="text-[18px] w-[70px]">
                                        {timeData.previous}
                                      </h5>
                                      <div className="w-[50px] flex items-center">
                                        <Button
                                          variant="default"
                                          className="!p-0 !w-[34px] !h-[34px] !bg-transparent"
                                          // onClick={handleToggleGraph}
                                        >
                                          <GraphsIcon width="44" height="44" />
                                        </Button>
                                      </div>
                                      <div className="w-[55px] flex items-center">
                                        <AccordionTrigger className="!p-0 rotate-90 [&[data-state=open]>svg]:rotate-180 bg-[#9441FE] w-[25px] h-[25px] flex justify-center items-center !pb-1" />
                                      </div>
                                    </div>
                                    <AccordionContent className="!p-0 !pt-8">
                                      <div className="p-6 rounded-[20px] bg-[#381E5B99] flex justify-between gap-7">
                                        <div className="w-full flex flex-col gap-6 border-r-[1px] border-[#ffffff30] pr-7">
                                          <h6 className="text-[20px] font-[700]">
                                            Specs
                                          </h6>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Source
                                            </p>
                                            <p>
                                              Ministry of Finance (latest
                                              release)
                                            </p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Measures
                                            </p>
                                            <p>
                                              Change in the total value of new
                                              capital expenditures made by
                                              businesses;
                                            </p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Usual Effect
                                            </p>
                                            <p>
                                              Actual' greater than 'Forecast' is
                                              good for currency;
                                            </p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Frequency
                                            </p>
                                            <p>
                                              Released quarterly, about 60 days
                                              after the quarter ends;
                                            </p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Next Release
                                            </p>
                                            <p>Sep 1, 2025</p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              FF Notes
                                            </p>
                                            <p>
                                              Data represents the change from
                                              the reported quarter to the same
                                              quarter a year earlier;
                                            </p>
                                          </div>
                                          <div className="flex gap-15">
                                            <p className="min-w-[142px]">
                                              Why Traders Care
                                            </p>
                                            <p>
                                              It's a leading indicator of
                                              economic health - businesses are
                                              quickly affected by market
                                              conditions, and changes in their
                                              investment levels can be an early
                                              signal of future economic activity
                                              such as hiring, spending, and
                                              earnings;
                                            </p>
                                          </div>
                                        </div>
                                        <div className="w-full max-w-[512px]">
                                          <Table>
                                            <TableHeader>
                                              <TableRow className="text-[18px] border-none">
                                                <TableHead className="w-[130px] font-[700]">
                                                  History
                                                </TableHead>
                                                <TableHead className="font-[700]">
                                                  Actual
                                                </TableHead>
                                                <TableHead className="font-[700]">
                                                  Forecast
                                                </TableHead>
                                                <TableHead className="font-[700]">
                                                  Previous
                                                </TableHead>
                                              </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                              {invoices.map(
                                                (invoice, invoiceIndex) => (
                                                  <TableRow
                                                    key={invoiceIndex}
                                                    className="text-[16px] border-none"
                                                  >
                                                    <TableCell>
                                                      {invoice.history}
                                                    </TableCell>
                                                    <TableCell
                                                      className={`${
                                                        invoice.actual > 7
                                                          ? "text-[#21C015]"
                                                          : "text-[#E30000]"
                                                      }`}
                                                    >
                                                      {invoice.actual}%
                                                    </TableCell>
                                                    <TableCell>
                                                      {invoice.forcast}
                                                    </TableCell>
                                                    <TableCell>
                                                      {invoice.previous}
                                                    </TableCell>
                                                  </TableRow>
                                                )
                                              )}
                                            </TableBody>
                                          </Table>
                                        </div>
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                                <div
                                  className={`graph-data overflow-hidden p-6 mt-8 rounded-[20px] bg-[#381E5B] lg:bg-[#381E5B99] transition-all duration-300`}
                                  style={{
                                    maxHeight: isLocalGraphOpen
                                      ? "500px"
                                      : "0px",
                                    opacity: isLocalGraphOpen ? 1 : 0,
                                    paddingTop: isLocalGraphOpen
                                      ? "1.5rem"
                                      : "0rem",
                                    paddingBottom: isLocalGraphOpen
                                      ? "1.5rem"
                                      : "0rem",
                                    marginTop: isLocalGraphOpen
                                      ? "2rem"
                                      : "0rem",
                                  }}
                                >
                                  sdfer
                                </div>
                              </div>
                            );
                          })}
                        <h6
                          className="w-[140px] h-4 flex justify-center text-[16px] text-[#9441FE] mt-4 md:mt-8 cursor-pointer"
                          onClick={() => {
                            setIsLoading(true);
                            setTimeout(() => {
                              setDataCount((prevCount) =>
                                Math.min(prevCount + 2, dayData.length)
                              );
                              setIsLoading(false);
                            }, 200);
                          }}
                        >
                          {isLoading ? (
                            <IconLoader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            "Show More Impact"
                          )}
                        </h6>
                      </div>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainSection;
