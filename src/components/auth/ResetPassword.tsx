"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import {
  IconArrowLeft,
  IconEye,
  IconEyeOff,
  IconLoader2,
} from "@tabler/icons-react";

const FormSchema = z
  .object({
    newPassword: z
      .string()
      .nonempty({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Please confirm your password" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

const ResetPassword = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Submitted code:", data);
      setIsSubmitting(false);
      router.push("/auth/signin");
    }, 300);
  }

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Reset Password
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Please enter your new password
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={`${isVisible1 ? "text" : "password"}`}
                      placeholder="Please enter a new password"
                      className="!h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]"
                      {...field}
                    />
                    <div
                      className="!bg-transparent absolute right-2 top-0 h-full flex items-center cursor-pointer"
                      onClick={() => {
                        setIsVisible1(!isVisible1);
                      }}
                    >
                      {!isVisible1 ? (
                        <IconEye width="22" height="22" color="#545454" />
                      ) : (
                        <IconEyeOff width="22" height="22" color="#545454" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm New Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={`${isVisible2 ? "text" : "password"}`}
                      placeholder="Please enter your new password again"
                      className="!h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]"
                      {...field}
                    />
                    <div
                      className="!bg-transparent absolute right-2 top-0 h-full flex items-center cursor-pointer"
                      onClick={() => {
                        setIsVisible2(!isVisible2);
                      }}
                    >
                      {!isVisible2 ? (
                        <IconEye width="22" height="22" color="#545454" />
                      ) : (
                        <IconEyeOff width="22" height="22" color="#545454" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant="common"
            className="login-button rounded-[6px] !w-full !h-11"
            disabled={isSubmitting}
          >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            Reset Password
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

export default ResetPassword;
