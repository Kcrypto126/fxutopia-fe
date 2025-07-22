"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconLoader2 } from "@tabler/icons-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const AddPhone = ({
  email,
  setStep,
}: {
  email: string;
  setStep: (value: number) => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  async function onSubmit() {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(phoneNumber, email);

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

      <PhoneInput
        international
        defaultCountry="RU"
        value={phoneNumber}
        onChange={(val) => setPhoneNumber(val ?? "")}
        className=""
      />

      <Button
        type="submit"
        variant="common"
        className="login-button rounded-[6px] !w-full !h-11"
        onClick={() => {
          onSubmit();
        }}
      >
        {isSubmitting && <IconLoader2 className="animate-spin" />}
        Continue
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
    </>
  );
};

export default AddPhone;
