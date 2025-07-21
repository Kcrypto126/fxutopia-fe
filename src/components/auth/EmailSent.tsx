"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IconArrowLeft, IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";

const FormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
});

const EmailSent = ({
  setIsSent,
  setEmail,
}: {
  setIsSent: (value: boolean) => void;
  setEmail: (value: string) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setEmail(data.email);
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setIsSent(true);
      setIsSubmitting(false);
    }, 200);
  }

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Forgot password?
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        No worries, we&apos;ll email you instructions to reset your password.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="!h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="common"
            className="login-button rounded-[6px] !w-full !h-11"
          >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            Send
          </Button>
          <div className="flex justify-center items-center">
            <Link
              href="/auth/signin"
              className="text-[#9F9F9F] text-[14px] flex items-center gap-2"
            >
              <IconArrowLeft color="#7E18FF" />
              Back to sign in
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EmailSent;
