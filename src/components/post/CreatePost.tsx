"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IconFileIsr, IconLoader2, IconPlus } from "@tabler/icons-react";

// Example schema for creating a post
const FormSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  type: z.string().nonempty({ message: "Type is required" }),
  post: z.string().nonempty({ message: "Post is required" }),
  attachment: z.union([z.instanceof(File), z.string()]),
});

const Categories = [
  "Beginner Questions",
  "Candlesticks, Chart",
  "Trading Psychology",
  "Trading Discussion",
  "Chart Art",
  "News and Economy",
  "Risk Management",
  "Trade Journals",
  "Prop Firms",
  "Trading Lifestyle",
  "Free Forex Trading",
  "Expert Advisors",
  "Introduce Yourself",
  "Trader Q&As",
  "Announcements",
  "Community Feedback",
  "Broker Discussion",
  "Trading Tech",
  "MarketMilk",
  "Cryptocurrency",
  "Cryptocurrency Discussions",
  "Altcoin Discussion",
  "Global Markets",
  "Commodities Oil",
  "Stocks and Indexes",
  "Broker Support",
  "Analysts",
  "Scam Stories",
  "The Lobby",
];

const CreatePost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      type: "",
      post: "",
      attachment: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
    });
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="filter"
            className="!bg-[#381E5B] hover:!bg-[#402366] border-[1px] border-[#9862DB] !w-fit !px-4 flex gap-2"
          >
            <IconPlus
              width="32"
              height="32"
              color="#9862DB"
              className="!w-6 !h-6 lg:!w-8 lg:!h-8"
            />
            <h5 className="text-[16px] font-[500]">Create New Post</h5>
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="lg:max-w-[1180px] w-[95%] bg-[#512F7C] rounded-[30px] px-4 py-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-9"
        >
          <div className="flex flex-col gap-4 lg:gap-8">
            <DialogHeader>
              <DialogTitle className="!text-[28px] leading-1 lg:!text-[36px] flex items-center justify-start !font-bold gap-3 !font-satoshi">
                <IconPlus width="36" height="36" className="hidden lg:block" />
                Create New Post
              </DialogTitle>
              <DialogDescription className="text-[#fff] !text-start text-[20px] mt-2">
                Welcome to FX Utopia Forum — thanks for starting a new
                conversation!
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4 lg:space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="What is the discussion about one brief sentences"
                          className="w-full h-11 lg:h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] border-none focus:!ring-0 !text-[14px] lg:!text-[16px]"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={field.disabled}
                        >
                          <SelectTrigger className="w-full !h-11 lg:!h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] !text-[14px] lg:!text-[18px] border-none cursor-pointer">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent className="!bg-[#22103a] !text-[16px] gap-4">
                            {Categories.map((item, index) => (
                              <SelectItem
                                key={index}
                                value={item}
                                className="focus:!bg-[#381E5B] cursor-pointer"
                              >
                                {item}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="post"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          className="w-full min-h-[124px] lg:min-h-[177px] rounded-[24px] lg:rounded-[34px] border-none focus:outline-none bg-[#381E5B] px-4 lg:px-8 py-2 lg:py-4 !text-[14px] lg:!text-[16px] shadow-sm placeholder:text-muted-foreground "
                          placeholder="Write your post content here..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="attachment"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-end">
                          <label
                            htmlFor="file-input"
                            className="flex justify-end gap-2 items-center !text-[14px] lg:!text-[18px] cursor-pointer"
                          >
                            {field.value
                              ? `${
                                  field.value instanceof File
                                    ? field.value.name
                                    : field.value
                                }`
                              : "Attached files"}
                            <IconFileIsr width="20" height="20" className="" />
                          </label>
                          <Input
                            id="file-input"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                field.onChange(file);
                              }
                            }}
                          />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 lg:flex justify-start gap-3 lg:gap-5">
                  <Button
                    type="submit"
                    variant="common"
                    className="login-button !h-11 lg:!h-[58px] w-full lg:w-[187px] "
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <IconLoader2 className="w-4 h-4 animate-spin mr-2" />
                    )}
                    Create Post
                  </Button>
                  <DialogClose asChild>
                    <Button
                      variant="common"
                      type="button"
                      className="login-button !h-11 lg:!h-[58px] !w-full lg:!w-[153px] !bg-transparent"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                </div>
              </form>
            </Form>
          </div>
          <Image
            src="/assets/community/newpost.png"
            width={587}
            height={845}
            alt="post"
            className="w-full h-full object-cover rounded-[16px] hidden lg:block"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreatePost;
