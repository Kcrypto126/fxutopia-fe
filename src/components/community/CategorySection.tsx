"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  AltCoinDiscussionIcon,
  AnalystsIcon,
  AnnouncementsIcon,
  BeginnerIcon,
  BrokerDiscussionIcon,
  BrokerSupportIcon,
  CandleSticksIcon,
  ChartArtIcon,
  CommoditiesOilIcon,
  CommunityFeedbackIcon,
  CryptoCurrencyIcon,
  ExpertAdvisorsIcon,
  FreeForexTradingIcon,
  GlobalMarketIcon,
  IntroduceYouelfIcon,
  LobbyIcon,
  MarketMilkIcon,
  NewsAndEconomyIcon,
  PropFirmsIcon,
  PsychologyIcon,
  RiskManagementIcon,
  ScamStoriesIcon,
  StocksAndIndexesIcon,
  TradeJournalsIcon,
  TraderQAIcon,
  TradingDiscussionIcon,
  TradingTechIcon,
} from "../ui/icon";
import Link from "next/link";

const Categories = [
  {
    icon: <BeginnerIcon />,
    label: "Beginner Questions",
    link: "/beginner-questions",
  },
  {
    icon: <CandleSticksIcon />,
    label: "Candlesticks, Chart",
    link: "/candlesticks-chart",
  },
  {
    icon: <PsychologyIcon />,
    label: "Trading Psychology",
    link: "/trading-psychology",
  },
  {
    icon: <TradingDiscussionIcon />,
    label: "Trading Discussion",
    link: "/trading-discussion",
  },
  {
    icon: <ChartArtIcon />,
    label: "Chart Art",
    link: "/chart-art",
  },
  {
    icon: <NewsAndEconomyIcon />,
    label: "News and Economy",
    link: "/news-and-economy",
  },
  {
    icon: <RiskManagementIcon />,
    label: "Risk Management",
    link: "/risk-management",
  },
  {
    icon: <TradeJournalsIcon />,
    label: "Trade Journals",
    link: "/trade-journals",
  },
  {
    icon: <PropFirmsIcon />,
    label: "Prop Firms",
    link: "/prop-firms",
  },
  {
    icon: <TradeJournalsIcon />,
    label: "Trading Lifestyle",
    link: "/trading-lifestyle",
  },
  {
    icon: <FreeForexTradingIcon />,
    label: "Free Forex Trading",
    link: "/free-forex-trading",
  },
  {
    icon: <ExpertAdvisorsIcon />,
    label: "Expert Advisors",
    link: "/expert-advisors",
  },
  {
    icon: <IntroduceYouelfIcon />,
    label: "Introduce Yourself",
    link: "/introduce-yourself",
  },
  {
    icon: <TraderQAIcon />,
    label: "Trader Q&As",
    link: "/trader-qas",
  },
  {
    icon: <AnnouncementsIcon />,
    label: "Announcements",
    link: "/announcements",
  },
  {
    icon: <CommunityFeedbackIcon />,
    label: "Community Feedback",
    link: "/community-feedback",
  },
  {
    icon: <BrokerDiscussionIcon />,
    label: "Broker Discussion",
    link: "/broker-discussion",
  },
  {
    icon: <TradingTechIcon />,
    label: "Trading Tech",
    link: "/trading-tech",
  },
  {
    icon: <MarketMilkIcon />,
    label: "MarketMilk",
    link: "/market-milk",
  },
  {
    icon: <CryptoCurrencyIcon />,
    label: "Cryptocurrency",
    link: "/cryptocurrency",
  },
  {
    icon: <CryptoCurrencyIcon />,
    label: "Cryptocurrency Discussions",
    link: "/cryptocurrency-discussions",
  },
  {
    icon: <AltCoinDiscussionIcon />,
    label: "Altcoin Discussion",
    link: "/altcoin-discussion",
  },
  {
    icon: <GlobalMarketIcon />,
    label: "Global Markets",
    link: "/global-markets",
  },
  {
    icon: <CommoditiesOilIcon />,
    label: "Commodities Oil",
    link: "/commodities-oil",
  },
  {
    icon: <StocksAndIndexesIcon />,
    label: "Stocks and Indexes",
    link: "/stocks-and-indexes",
  },
  {
    icon: <BrokerSupportIcon />,
    label: "Broker Support",
    link: "/broker-support",
  },
  {
    icon: <AnalystsIcon />,
    label: "Analysts",
    link: "/analysts",
  },
  {
    icon: <ScamStoriesIcon />,
    label: "Scam Stories",
    link: "/scam-stories",
  },
  {
    icon: <LobbyIcon />,
    label: "The Lobby",
    link: "/the-lobby",
  },
];

const CategorySection = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full h-fit p-0 lg:p-6 rounded-[28px] bg-transparent lg:bg-[#381E5B60] max-w-full lg:max-w-[320px]">
      <div className="w-full hidden lg:block">
        <div className=" w-full flex items-center justify-between gap-2 py-3">
          <h5 className="text-[20px] font-bold">Categories</h5>
          <ChevronDown />
        </div>
        <ul className="flex flex-col gap-7 mt-8">
          {Categories.map((item) => (
            <li key={item.label}>
              <Link
                href={`/community/individual-category`}
                className="flex items-center gap-[14px]"
              >
                {item.icon}
                <h5 className="text-[20px]">{item.label}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center sm:justify-start lg:hidden">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            asChild
            className="!mx-auto !px-5 h-12 border-[1px] !border-[#9862DB] !bg-[#512F7C40] hover:!bg-[#6b439f40] rounded-full"
          >
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="max-w-[90vw] sm:max-w-[471px] w-full justify-between hover:shadow-none"
            >
              {value
                ? Categories.find((item) => item.label === value)?.label
                : "Select category..."}
              <ChevronDown />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="!w-[90vw] sm:!w-[471px] border p-0">
            <Command>
              <CommandInput placeholder="Search category..." className="h-9" />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {Categories.map((item) => (
                    <CommandItem
                      key={item.label}
                      value={item.label}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {item.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === item.label ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CategorySection;
