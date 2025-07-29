"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrowLeft } from "@tabler/icons-react";

const AllSet = ({
  email,
  setStep,
}: {
  email: string;
  setStep: (val: number) => void;
}) => {
  console.log(email);
  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        You&apos;re All Set!
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Your account has been created successfully.
      </p>
      <Link href="/auth/signin" className="w-full">
        <Button
          variant="common"
          className="login-button rounded-[6px] !w-full !h-11"
        >
          Continue
        </Button>
      </Link>
      <div className="w-full flex justify-center items-center">
        <h5
          className="text-[#9F9F9F] text-[14px] flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setStep(0);
          }}
        >
          <IconArrowLeft color="#7E18FF" />
          Back to sign up
        </h5>
      </div>
    </>
  );
};

export default AllSet;
