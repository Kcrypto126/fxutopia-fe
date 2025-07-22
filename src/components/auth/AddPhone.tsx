"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const FormSchema = z.object({
  phoneNumber: z
    .string()
    .nonempty({ message: "Phone number is required" })
    .refine(
      (val) => {
        // Basic E.164 format check: starts with + and 10-15 digits
        return /^\+\d{10,15}$/.test(val);
      },
      { message: "Invalid phone number format" }
    ),
});

const AddPhone = ({
  email,
  setStep,
}: {
  email: string;
  setStep: (value: number) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
    },
    mode: "onChange",
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(data.phoneNumber, email);

      setStep(3);
    }, 200);
  }

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Add Phone Number
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Secure your account with 2FA by adding your phone number.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
          autoComplete="off"
        >
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    international
                    defaultCountry="RU"
                    value={field.value}
                    onChange={field.onChange}
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
            Continue
          </Button>
          <div className="flex justify-center items-center">
            <Link
              href="/auth/signup"
              className="text-[#9F9F9F] text-[14px] flex items-center gap-2"
            >
              <IconArrowLeft color="#7E18FF" />
              Back to sign up
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddPhone;
