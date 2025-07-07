"use client";

import { IconFlameFilled } from "@tabler/icons-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ClockIcon } from "../ui/icon";

const LatestDiscusstions = [
  {
    user: {
      avatar: "/assets/avatars/avatar-1.png",
      full_name: "John Veetle",
    },
    text: "Welcome to The FX Utopia Forex Trading Forum!",
    followers: 266,
    date: "Mar 13",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-2.png",
      full_name: "John Veetle",
    },
    text: "SIA's Trading Journal - Q2 2025",
    followers: 46,
    date: "15m",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-3.png",
      full_name: "John Veetle",
    },
    text: "Is roboforex a good broker",
    followers: 2,
    date: "36m",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-4.png",
      full_name: "John Veetle",
    },
    text: "Still failing?!?!",
    followers: 35,
    date: "2h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-5.png",
      full_name: "John Veetle",
    },
    text: "Trade journal and market predictions",
    followers: 39,
    date: "3h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-6.png",
      full_name: "John Veetle",
    },
    text: "XAUUSD charts analysis by ChatGPT",
    followers: 0,
    date: "1h",
  },
  {
    user: {
      avatar: "",
      full_name: "John Veetle",
    },
    text: "How can money go to four decimal places?",
    followers: 4,
    date: "6h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-7.png",
      full_name: "John Veetle",
    },
    text: "Daily Market Analysis By FXOpen Analysts",
    followers: 39,
    date: "3h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-8.png",
      full_name: "John Veetle",
    },
    text: "Daily Market Analysis by Joshen Stephen from Ultima Markets",
    followers: 0,
    date: "1h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-9.png",
      full_name: "John Veetle",
    },
    text: "Trading the Trend with Strong Weak Analysis",
    followers: 58,
    date: "2h",
  },
  {
    user: {
      avatar: "",
      full_name: "John Veetle",
    },
    text: "How do you know when you're ready to switch from demo to live trading?",
    followers: 13,
    date: "2h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-10.png",
      full_name: "John Veetle",
    },
    text: "Karens, women or men",
    followers: 24,
    date: "3h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-11.png",
      full_name: "John Veetle",
    },
    text: "My trading journal with FXOpen",
    followers: 0,
    date: "1h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-12.png",
      full_name: "John Veetle",
    },
    text: "AUD/USD Weekly Outlook: CPI, RBNZ, PCE - Key Data Ahead",
    followers: 58,
    date: "2h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-13.png",
      full_name: "John Veetle",
    },
    text: "Price Action Algo Trading (PAAT) Journals",
    followers: 13,
    date: "3h",
  },
  {
    user: {
      avatar: "/assets/avatars/avatar-14.png",
      full_name: "John Veetle",
    },
    text: "What's cooking?",
    followers: 58,
    date: "2h",
  },
];

const LatestDiscussionSection = () => {
  return (
    <div className="w-full max-w-full xl:max-w-[430px] flex flex-col gap-5">
      <div className="flex gap-3 items-center">
        <IconFlameFilled width="28" height="28" color="#9862DB" />
        <h5 className="text-[26px] font-[500]">Latest Discussions</h5>
      </div>
      <div className="flex flex-col gap-5">
        {LatestDiscusstions.map((item, index) => (
          <div
            key={index}
            className="rounded-[12px] bg-[#000000] p-4 flex gap-3 justify-between"
          >
            <div className="flex gap-5 items-center">
              <Avatar className="w-[48px] md:w-[58px] h-[48px] md:h-[58px]">
                <AvatarImage src={item.user.avatar} alt="user" />
                <AvatarFallback>
                  {item.user.full_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <p>{item.text}</p>
            </div>
            <div className="flex flex-col gap-1 justify-between min-w-[85px] text-[#FFFFFF50]">
              <h5 className="text-[16px] md:text-[20px] font-[500]">
                {item.followers}
              </h5>
              <div className="flex gap-1 items-center">
                <ClockIcon />
                <h5 className="text-[16px] font-[500]">{item.date}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestDiscussionSection;
