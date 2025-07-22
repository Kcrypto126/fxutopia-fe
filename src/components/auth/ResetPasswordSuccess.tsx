"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { IconArrowLeft } from "@tabler/icons-react";

const ResetPasswordSuccess = () => {
  return (
    <>
      <h5 className="text-[28px] font-[700] leading-[100%] text-center si:text-start">
        Password Updated
      </h5>
      <p className="!text-[14px] font-[400] text-[#9F9F9F] text-center si:text-start">
        Your password has been successfully changed.
      </p>
      <Link href="/auth/signin" className="w-full">
        <Button
          variant="common"
          className="login-button rounded-[6px] !w-full !h-11"
          onClick={() => {}}
        >
          Continue
        </Button>
      </Link>
      <div className="w-full flex justify-center items-center">
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

export default ResetPasswordSuccess;
