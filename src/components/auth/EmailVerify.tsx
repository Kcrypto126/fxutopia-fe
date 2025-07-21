"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRef, useState } from "react";
import { IconArrowLeft, IconLoader2 } from "@tabler/icons-react";

const FormSchema = z.object({
  opt: z
    .string()
    .length(4, { message: "Code must be 4 digits" })
    .regex(/^\d{4}$/, { message: "Code must be 4 digits" }),
});

const EmailVerify = ({
  email,
  setEmailVerified,
}: {
  email: string;
  setEmailVerified: (value: boolean) => void;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      opt: "",
    },
    mode: "onChange",
  });

  const handleOTPChange = (val: string, fieldOnChange: (v: string) => void) => {
    const sanitized = val.replace(/\D/g, "").slice(0, 4);
    fieldOnChange(sanitized);
    // Optionally, auto-submit when 4 digits are entered and valid
    if (
      sanitized.length === 4 &&
      /^\d{4}$/.test(sanitized) &&
      !form.formState.isSubmitting
    ) {
      setTimeout(() => {
        if (formRef.current) {
          form.handleSubmit(onSubmit)();
        }
      }, 0);
    }
  };

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log("Submitted code:", data.opt);
      console.log("email:", email);
      setEmailVerified(true);
      setIsSubmitting(false);
    }, 300);
  }

  const resendEmail = () => {
    console.log(email);
  };

  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Enter OTP
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Please enter your verification code
      </p>
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-5"
          autoComplete="off"
        >
          <FormField
            control={form.control}
            name="opt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputOTP
                    maxLength={4}
                    value={field.value}
                    onChange={(val) => handleOTPChange(val, field.onChange)}
                    inputMode="numeric"
                    autoFocus
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
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
            Continue
          </Button>
          <div className="text-[#9F9F9F] text-[14px] flex items-center gap-2">
            Haven&apos;t received the email?
            <span
              className="text-[#9862DB] font-[600] cursor-pointer"
              onClick={() => {
                resendEmail();
              }}
            >
              Click to resend
            </span>
          </div>
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

export default EmailVerify;
