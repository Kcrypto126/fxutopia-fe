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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { IconEye, IconEyeOff } from "@/components/ui/icon";
import { useState } from "react";
import { IconLoader2 } from "@tabler/icons-react";
import { GoogleIcon, AppleIcon } from "@/components/ui/icon";

import { countries } from "@/lib/utils";

const FormSchema = z
  .object({
    firstName: z.string().nonempty({ message: "First name is required" }),

    lastName: z.string().nonempty({ message: "Last name is required" }),

    country: z.string().nonempty({ message: "Country is required" }),

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

    confirmPassword: z
      .string()
      .nonempty({ message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupForm = ({
  setEmail,
  setStep,
}: {
  setEmail: (val: string) => void;
  setStep: (val: number) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
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
        Sign up
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Start trading crypto by creating your secure account
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
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
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
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
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Residence</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-full !h-11 rounded-[6px] !bg-[#15101D] border-[#381E5B]">
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Country</SelectLabel>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={`${isVisible2 ? "text" : "password"}`}
                        placeholder="Enter your password again"
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
          </div>
          <Button
            type="submit"
            variant="common"
            className="login-button rounded-[6px] !w-full !h-11"
            disabled={!isAgreeTerms || isSubmitting}
          >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            Create Account
          </Button>
          <div className="flex items-center gap-3">
            <Checkbox
              id="terms"
              className="data-[state=checked]:!bg-transparent data-[state=checked]:!text-white data-[state=checked]:!border-[#545454]"
              checked={isAgreeTerms}
              onCheckedChange={(val) => setIsAgreeTerms(val === true)}
            />
            <Label htmlFor="terms" className="text-[14px] text-[#9F9F9F]">
              I agree to the
              <Link
                href="/terms-privacy-policy"
                className="text-[#9862DB] font-[600] cursor-pointer"
              >
                Terms & Privacy Policy
              </Link>
            </Label>
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
            Already have an account?
          </h5>
          <Link
            href="/auth/signin"
            className="text-[14px] font-[600] text-[#9862DB] hover:text-[#a86fed]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
