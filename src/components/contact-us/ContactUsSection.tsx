"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { IconBrandSafari, IconMail, IconPhoneCall } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "@/components/ui/icon";
import Container from "../layouts/Container";

import { IconLoader2 } from "@tabler/icons-react";

// Example schema for creating a post
const FormSchema = z.object({
  first_name: z.string().nonempty({ message: "First name is required" }),
  last_name: z.string().nonempty({ message: "Last name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  phone: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .regex(/^(\+?\d{1,4}[\s-]?)?(\(?\d{2,4}\)?[\s-]?)?[\d\s-]{5,}$/, {
      message: "Invalid phone number",
    }),
  message: z.string().nonempty({ message: "Message is required" }),
});

const ContactUsSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
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
    <Container className="py-8 md:py-30">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
        <div className="w-full space-y-6 lg:space-y-13">
          <div>
            <h1 className="!text-start">Need Help?</h1>
            <p>
              Use the form below or select Contact Support to be paired with our
              Support team.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
            <div className="flex items-center gap-2 lg:gap-4 p-3 bg-[#000000] rounded-[16px] text-[14px] lg:text-[20px] overflow-hidden">
              <div className="bg-[#512F7C] min-w-8 h-8 lg:min-w-12 lg:h-12 rounded-full flex items-center justify-center">
                <IconPhoneCall
                  width={24}
                  height={24}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </div>
              +44 20 1234 5678
            </div>
            <div className="flex items-center gap-2 lg:gap-4 p-3 bg-[#000000] rounded-[16px] text-[14px] lg:text-[20px] overflow-hidden">
              <div className="bg-[#512F7C] min-w-8 h-8 lg:min-w-12 lg:h-12 rounded-full flex items-center justify-center">
                <IconMail
                  width={24}
                  height={24}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </div>
              support@fxutopia.com
            </div>
            <div className="col-span-1 xl:col-span-2 flex items-center gap-2 lg:gap-4 p-3 bg-[#000000] rounded-[16px] text-[14px] lg:text-[20px] overflow-hidden">
              <div className="bg-[#512F7C] min-w-8 h-8 lg:min-w-12 lg:h-12 rounded-full flex items-center justify-center">
                <IconBrandSafari
                  width={24}
                  height={24}
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </div>
              FX Utopia HQ 123 Market Street, Suite 400 London, UK
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4 ">
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
        <div className="w-full flex flex-col gap-4">
          <h5 className="text-[20px]">Select an reason</h5>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4 lg:space-y-6"
            >
              <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-between">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="First name"
                          className="w-full h-12 lg:h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] border-none focus:!ring-0 !text-[14px] lg:!text-[16px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Last name"
                          className="w-full h-12 lg:h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] border-none focus:!ring-0 !text-[14px] lg:!text-[16px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        className="w-full h-12 lg:h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] border-none focus:!ring-0 !text-[14px] lg:!text-[16px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        className="w-full h-12 lg:h-[68px] rounded-[34px] px-4 lg:px-8 !bg-[#381E5B] border-none focus:!ring-0 !text-[14px] lg:!text-[16px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        className="w-full min-h-[124px] lg:min-h-[177px] rounded-[24px] lg:rounded-[34px] border-none focus:outline-none bg-[#381E5B] px-4 lg:px-8 py-2 lg:py-4 !text-[14px] lg:!text-[16px] shadow-sm placeholder:text-muted-foreground "
                        placeholder="Type here your message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
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
                  Submit now
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUsSection;
