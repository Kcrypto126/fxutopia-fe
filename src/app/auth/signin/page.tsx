"use client";

import { useState } from "react";
import SigninForm from "@/components/auth/SigninForm";
import Image from "next/image";
import EmailVerify from "@/components/auth/EmailVerify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  return (
    <div className="relative max-w-[480px] w-full min-h-[661px] overflow-hidden z-0 flex flex-col gap-5 lg:gap-6 justify-center p-3 si:p-8 border-0 si:border-[1px] border-[#9862DB] rounded-[24px] bg-none si:bg-[#130D1B]">
      <Image
        src="/assets/signin/effect.png"
        width={150}
        height={150}
        alt="effect"
        className="absolute bottom-0 left-0 -z-10 !mb-0 max-w-[150px] w-full h-auto hidden si:block"
      />
      {step == 0 ? (
        <SigninForm setEmail={setEmail} setStep={setStep} />
      ) : step == 1 ? (
        <EmailVerify email={email} setStep={setStep} />
      ) : (
        (() => {
          if (typeof window !== "undefined") {
            window.location.href = "/";
          }
          return (
            <div className="flex justify-center items-center text-[20px] animate-[bounce_1s_ease-in-out_infinite]">
              Loading...
            </div>
          );
        })()
      )}
    </div>
  );
};

export default SignIn;
