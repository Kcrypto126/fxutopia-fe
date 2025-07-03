"use client";

import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/icon";
import { useState } from "react";
import Link from "next/link";
import { IconLoader2, IconChevronUp } from "@tabler/icons-react";

import Container from "../layouts/Container";

const FormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
});

const FooterSection = () => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmiting(true);
    setTimeout(() => {
      console.log(data);
      setIsSubmiting(false);
    }, 1000);
  }

  return (
    <Container className="relative z-0 py-8 md:py-12">
      <Image
        src="/assets/footer/footer-bg.png"
        width={1780}
        height={169}
        alt="footer"
        className="absolute z-0 top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] cursor-pointer"
      />
      <Image
        src="/assets/footer/footer-bottom.png"
        width={1600}
        height={500}
        alt="footer"
        className="absolute z-0 bottom-0 left-[50%] -translate-x-[50%]"
      />
      <div className="relative z-10 flex flex-col gap-8 md:gap-20">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-21 justify-between items-center">
          <div className="flex-1 w-full space-y-2">
            <h5 className="font-riosark text-[30px] md:text-[40px] xl:text-[56px] leading-[120%] uppercase text-center lg:text-start">
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
                          className="h-[56px] md:h-[60px] bg-[#26212e] rounded-full px-7"
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="common"
                  className="common-button !w-[134px] !h-[52px] md:!h-[58px] md:!w-[177px]"
                >
                  {isSubmiting ? (
                    <IconLoader2 className="animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div
          className="flex lg:hidden items-center w-fit px-3 py-3 mx-auto border-[1px] border-[#604683] rounded-[8px] gap-3 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <IconChevronUp width="22" height="22" />
          <h5 className="text-[14px]">Back to top</h5>
        </div>
        <div className="flex gap-2 items-center justify-between flex-wrap">
          <Link href="/">
            <Image
              src="/logo.png"
              width={348}
              height={82}
              alt="logo"
              className="w-full max-w-[145px] md:max-w-[348px]"
            />
          </Link>
          <div
            className="hidden lg:flex items-center gap-6 cursor-pointer"
            onClick={() => {
              router.push("/#home");
            }}
          >
            <div className="bg-[#9441FE] p-4 rounded-full">
              <IconChevronUp width="25" height="25" />
            </div>
            <h5 className="text-[14px] md:text-[24px]">Back to top</h5>
          </div>
          <div className="flex flex-col gap-4 ">
            <h5 className="text-[26px] hidden lg:block">Follow us on</h5>
            <div className="flex gap-3 md:gap-5 items-center">
              <Link href="https://www.facebook.com" target="_blank">
                <FaceBookIcon width="60" height="60" />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <YoutubeIcon width="60" height="60" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <LinkedinIcon width="60" height="60" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <InstagramIcon width="60" height="60" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterSection;
