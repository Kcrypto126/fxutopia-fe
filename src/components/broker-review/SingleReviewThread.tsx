"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconCalendarWeekFilled,
  IconClipboardCheckFilled,
  IconClipboardFilled,
  IconHeartFilled,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNotification } from "@/providers/notificationProvider";

import { Threads } from "../community/data";

const SingleReviewThread = () => {
  const { toast } = useNotification();
  const [threadNumber, setThreadNumber] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const showMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setThreadNumber(threadNumber + 3);
      setIsLoading(false);
    }, 1000);
  };

  const copyText = (text: string) => {
    setIsCopied(true);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Copied to clipboard!", "Success");
      })
      .catch((err) => {
        toast("Copy failed", "Error");
        console.error(err);
      });
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 md:gap-11">
      {Threads.slice(0, threadNumber).map((item, index) => (
        <div key={index} className="flex flex-col gap-3 md:gap-6">
          <div className="flex gap-2 justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Avatar className="w-8 md:w-14 h-8 md:h-14">
                <AvatarImage src={item.user.avatar} alt={item.user.username} />
                <AvatarFallback>
                  {item.user.full_name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h5 className="text-[16px] md:text-[26px] font-[500]">
                {item.user.username}
              </h5>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendarWeekFilled />
              <h5 className="text-[14px] md:text-[20px]">{item.date}</h5>
            </div>
          </div>
          <div className="flex flex-col gap-0 md:gap-7 bg-[#000000] p-4 md:p-12 rounded-[16px] md:rounded-[30px]">
            <p className="pb-4 md:pb-12 border-b-[1px] border-[#FFFFFF4D]">
              {item.post}
            </p>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem
                value={`item-${index + 1}`}
                className="data-[state=open]:!bg-transparent data-[state=closed]:!bg-transparent"
              >
                <div className="flex justify-between gap-2">
                  <AccordionTrigger className="!p-0 !py-5 justify-start">
                    {item.replies.length} Replies
                  </AccordionTrigger>
                  <div className="flex items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-[10px]">
                      <IconHeartFilled color="#A1A1A1" width="20" height="20" />
                      {item.favorites}
                    </div>
                    <div
                      className="flex items-center gap-[10px] cursor-pointer"
                      onClick={() => {
                        copyText(item.post);
                      }}
                    >
                      {isCopied ? (
                        <IconClipboardCheckFilled
                          color="#A1A1A1"
                          width="18"
                          height="21"
                        />
                      ) : (
                        <IconClipboardFilled
                          color="#A1A1A1"
                          width="18"
                          height="21"
                        />
                      )}
                      Copy
                    </div>
                  </div>
                </div>
                <AccordionContent className="flex flex-col gap-5 md:gap-10 text-balance pl-3 md:pl-5">
                  {item.replies.map((reply, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 md:gap-5 ${
                        item.replies[item.replies.length - 1] == reply
                          ? "border-none"
                          : "border-b-[1px] pb-5 md:pb-10"
                      } border-[#FFFFFF4D]`}
                    >
                      <Avatar className="w-8 md:w-12 h-8 md:h-12">
                        <AvatarImage
                          src={reply.user.avatar}
                          alt={reply.user.username}
                        />
                        <AvatarFallback>
                          {reply.user.full_name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-1">
                        <p className="!font-[700]">{reply.user.username}</p>
                        <p>{reply.reply_message}</p>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}

      <Button
        variant="common"
        className="login-button w-full md:!w-[287px]"
        onClick={() => {
          showMore();
        }}
      >
        {isLoading ? (
          <IconLoader2 className="w-4 h-4 animate-spin" />
        ) : (
          "Show More Discussions"
        )}
      </Button>
    </div>
  );
};

export default SingleReviewThread;
