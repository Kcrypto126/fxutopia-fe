"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IconEye, IconEyeOff } from "@/components/ui/icon";
import { useState } from "react";
import Link from "next/link";
import { IconLoader2, IconChevronUp } from "@tabler/icons-react";

import Container from "./Container";

const FormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
});

const Footer = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Container className="relative z-0 py-12">
      <Image
        src="/assets/footer/footer-bg.png"
        width={1780}
        height={169}
        alt="footer"
        className="absolute z-0 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
      />
      <div className="relative z-10 flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div className="flex-1 w-full space-y-2">
            <h5 className="font-riosark text-[30px] md:text-[56px] leading-[120%] uppercase text-center lg:text-start">
              Never Miss a Market Move Again
            </h5>
            <p className="text-center lg:text-start">
              Get trading insights, market updates, strategy tips, and exclusive
              resources — delivered straight to your inbox.
            </p>
          </div>
          <div className="flex-1 w-full flex flex-col gap-3 md:gap-6">
            <h5 className="text-[12px] md:text-[30px] text-start">
              Sign Up Newsletter
            </h5>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col md:flex-row items-center justify-stretch gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="h-[60px] bg-[#26212e] rounded-full px-7"
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="common"
                  className="common-button w-full md:!w-[177px]"
                >
                  {form.formState.isSubmitting && (
                    <IconLoader2 className="animate-spin" />
                  )}
                  Subscribe
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <Image
            src="/logo.png"
            width={348}
            height={82}
            alt="logo"
            className="w-[348px]"
          />
          <div
            className="flex items-center gap-6 cursor-pointer"
            onClick={() => {
              router.push("#");
            }}
          >
            <div className="bg-[#9441FE] p-4 rounded-full">
              <IconChevronUp width="25" height="25" />
            </div>
            <h5 className="text-[14px] md:text-[24px]">Back to top</h5>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h5 className="text-[26px] hidden md:block">Follow us on</h5>
          <div></div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
