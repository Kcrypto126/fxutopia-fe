"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
import { IconLoader2 } from "@tabler/icons-react";
import { GoogleIcon, AppleIcon } from "@/components/ui/icon";

const FormSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),

  password: z
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

  rememberme: z.boolean(),
});

const SigninForm = ({
  setEmail,
  setStep,
}: {
  setEmail: (val: string) => void;
  setStep: (val: number) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(data);

      setEmail(data.email);
      setStep(1);
    }, 300);
  }

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Sign in
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Welcome back! Please enter your details.
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={`${isVisible ? "text" : "password"}`}
                      placeholder="Enter your password"
                      className="!h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]"
                      {...field}
                    />
                    <div
                      className="!bg-transparent absolute right-2 top-0 h-full flex items-center cursor-pointer"
                      onClick={() => {
                        setIsVisible(!isVisible);
                      }}
                    >
                      {!isVisible ? (
                        <IconEye width="22" height="22" />
                      ) : (
                        <IconEyeOff width="22" height="22" />
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
          >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            Sign In
          </Button>
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="rememberme"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="terms"
                        className="data-[state=checked]:!bg-transparent data-[state=checked]:!text-white data-[state=checked]:!border-[#545454]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label
                        htmlFor="terms"
                        className="font-normal text-[#9F9F9F]"
                      >
                        Remember Me
                      </Label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Link
              href="/auth/retrieve"
              className="text-[#00A6E8] hover:text-[#7cd5f8] text-sm"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </Form>
      <div className="space-y-5 si:space-y-8 w-full">
        <div className="w-full flex justify-between items-center gap-3 text-[#767676] text-[14px]">
          <div className="w-full">
            <Separator className="!bg-[#2F174F]" />
          </div>
          OR
          <div className="w-full">
            <Separator className="!bg-[#2F174F]" />
          </div>
        </div>
        <div className="space-y-5">
          <Button variant="social" className="">
            <GoogleIcon />
            Continue with Google
          </Button>
          <Button variant="social" className="">
            <AppleIcon />
            Continue with Apple
          </Button>
        </div>
        <div className="flex justify-center items-center gap-1">
          <h5 className="text-[14px] text-[#9F9F9F] font-[400]">
            Don&apos;t have an account?
          </h5>
          <Link
            href="/auth/signup"
            className="text-[14px] font-[600] text-[#9862DB] hover:text-[#a86fed]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
