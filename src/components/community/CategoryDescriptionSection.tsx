"use client";

import { ClockIcon, DiskIcon } from "../ui/icon";

const Descriptions = [
  {
    title: "Beginner Questions",
    description:
      "This forum is for forex beginners. If you are new to forex and have a question, this is the best place to ask it. If you’re looking to learn forex, get your training and education at the School of Pipsology.",
    week: 4,
    color: "#87E1FF",
    tags: ["Candlesticks and Chart Patterns", "Trading Psychology"],
  },
  {
    title: "Trading Discussion",
    description:
      "The magical place where all traders can gather together to discuss anything and everything about the forex market.",
    week: 5,
    color: "#009CD0",
    tags: [
      "Currencies",
      "Chart Art",
      "News and Economy",
      "Risk Management Practices",
      "Trade Journals",
      "Prop Firms",
      "Trading Lifestyle",
      "Binary Options",
    ],
  },
  {
    title: "Trading Systems",
    description:
      "Got da bomb trading system or method? Discuss it here! Discuss Day Tading and Swing Trading here!",
    week: 4,
    color: "#009CD0",
    tags: [
      "Free Forex Trading Systems",
      "Expert Advisors and Automated Trading",
    ],
  },
  {
    title: "Community",
    description:
      "The magical place where all traders can gather together to discuss anything and everything about the forex market.",
    week: 4,
    color: "#21C015",
    tags: [
      "Introduce Yourself",
      "Club",
      "Member Spotlight",
      "Announcements",
      "Trader Q&As",
      "Community Feedback",
      "The Honorary Members",
      "Trader Meetups",
    ],
  },
  {
    title: "Broker Discussion",
    description:
      "Need a forex broker, have a question about a specific broker or have a broker review to share? This is the place for you!",
    week: 5,
    color: "#1A57D3",
    tags: ["Forex Brokers"],
  },
  {
    title: "Trading Tech and Tools",
    description:
      "This is the place to discuss trading platforms, charting and software packages, as well as different tools used to make you better traders, like economic calendars, educational courses, seminars, data services, analytical tools, calculators, nerdy spreadsheets, special computer setups or sweet mobil…",
    week: 1,
    color: "#8225B2",
    tags: ["MarketMilk", "Trading Software"],
  },
  {
    title: "Bitcoin Talk",
    description:
      "What does the future hold for Bitcoin and other cryptocurrencies like Ethereum/Ether, Ripple/XRP and Litecoin? Bitcoin is all the rage, gaining interest around the word and adoption by investors, businesses and governments. But new Altcoins are appearing just as quickly with their own technical ad…",
    week: 2,
    color: "#5220B3",
    tags: [
      "Cryptocurrency In the News",
      "Crypto Exchanges",
      "Bitcoin Discussion",
      "Crypto Gaming and NFTs",
      "Altcoin Discussion",
    ],
  },
  {
    title: "Global Markets",
    description:
      "We know forex traders trade more than just foreign currency. Discuss other markets here, including stocks, binary options, commodities and futures.",
    week: 6,
    color: "#B20C43",
    tags: [
      "Commodities Oil and Gold",
      "Stocks and Indexes",
      "Bonds and Interest Rates",
    ],
  },
  {
    title: "Commercial Content",
    description:
      "The Commercial Content category is only open to 3rd party analysis and market commentary, topics and replies related to support inquiries made by our members of their brokers and blog posts.",
    week: 12,
    color: "#E30000",
    tags: ["Press Release", "Trading Signals", "Broker Support", "Analysts"],
  },
  {
    title: "The Lobby",
    description:
      "Come here to shoot the breeze with fellow members about anything non-Forex related. (Note: forum rules still apply)",
    week: 2,
    color: "#E30000",
    tags: [],
  },
];

const CategoryDescriptionSection = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {Descriptions.map((item) => (
        <div
          className={`flex flex-col gap-4 ${
            item.title === "The Lobby" ? "border-none" : "border-b-[1px]"
          } pb-10 border-[#FFFFFF50]`}
        >
          <div className="flex justify-between gap-2 items-center">
            <h5
              className={`text-[36px] font-[500]`}
              style={{ color: item.color }}
            >
              {item.title}
            </h5>
            <div className="flex gap-2 items-center">
              <ClockIcon />
              <h5 className="text-[24px] font-[500] text-[#FFFFFF50]">{`${item.week} / week`}</h5>
            </div>
          </div>
          <p className="mt-2">{item.description}</p>
          <ul className="grid grid-cols-2 gap-2">
            {item.tags.map((tag) => (
              <li className="flex gap-3 items-center">
                <DiskIcon color={item.color} width="13" height="13" />
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryDescriptionSection;
