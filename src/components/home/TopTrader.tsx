"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const user = {
  avatar: "/assets/home/default-user.jpg",
  username: "@forex",
  full_name: "Alex Chen",
  type: "Posted",
};

const TopTrader = () => {
  return (
    <div className="relative z-0 w-full h-full p-0.5 rounded-[8px] overflow-hidden">
      <div className="relative z-1 w-full h-full flex flex-col py-6 px-4 rounded-[8px] bg-gradient-to-b from-[#101125] to-[#010F10] border-[1px] border-[#00f2ffb6]">
        <div className="flex items-center gap-4 font-inter">
          <Avatar className="h-12 w-12 rounded-full">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="rounded-full">CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h5 className="text-[18px] font-[600]">{user.full_name}</h5>
            <h5 className="text-[16px] font-[500] text-[#9194A0]">
              {user.type}
            </h5>
          </div>
        </div>
        <div className="py-[14px] px-3 flex gap-2 justify-between">
          <div className="flex flex-col gap-[13px]">
            <h5 className="text-[18px] font-[500] text-[#9194A0]">
              Monthly Return
            </h5>
            <h5 className="text-[18px] font-[500] text-[#9194A0]">Win Rate</h5>
            <h5 className="text-[18px] font-[500] text-[#9194A0]">Followers</h5>
          </div>
          <div className="flex flex-col gap-[13px]">
            <h5 className="text-[18px] font-[600] text-[#22C55E]">+187.4%</h5>
            <h5 className="text-[18px] font-[600]">94%</h5>
            <h5 className="text-[18px] font-[600]">3,637</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrader;
