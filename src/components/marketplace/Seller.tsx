"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface UserProps {
  avatar: string;
  full_name: string;
  title: string;
  description: string;
  twitter: string;
  linkedin: string;
  website: string;
}

const Seller = ({ data }: { data: UserProps }) => {
  return (
    <div className="relative z-1 w-full h-full flex flex-col py-6 px-4 rounded-[8px] bg-[#381E5B99] border-[1px] border-[#9862DB]">
      <div className="flex flex-col justify-between items-center gap-2">
        <Avatar className="h-20 w-20 rounded-full">
          <AvatarImage src={data.avatar} alt={data.full_name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="!font-[700] !text-center">{data.full_name}</p>
        <p className="!text-[16px] !font-[500] text-[#9862DB] !text-center">
          {data.title}
        </p>
        <p className="!text-[16px] !font-[400] !text-center">
          {data.description}
        </p>
        <div className="flex justify-center items-center gap-4">sdf</div>
      </div>
    </div>
  );
};

export default Seller;
