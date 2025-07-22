"use client";

import { useState } from "react";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import EmailVerify from "@/components/auth/EmailVerify";
import AddPhone from "@/components/auth/AddPhone";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(2);

  return (
    <div
      className={`relative ${
        step !== 0 ? "max-w-[480px] min-h-[661px]" : "max-w-[784px]"
      } w-full overflow-hidden z-0 flex flex-col gap-5 lg:gap-6 justify-center p-3 si:p-8 border-0 si:border-[1px] border-[#9862DB] rounded-[24px] bg-none si:bg-[#130D1B]`}
    >
      <Image
        src="/assets/signin/effect.png"
        width={150}
        height={150}
        alt="effect"
        className="absolute bottom-0 left-0 -z-10 !mb-0 max-w-[150px] w-full h-auto hidden si:block"
      />
      {step == 0 ? (
        <SignupForm setEmail={setEmail} setStep={setStep} />
      ) : step == 1 ? (
        <EmailVerify email={email} setStep={setStep} />
      ) : step == 2 ? (
        <AddPhone email={email} setStep={setStep} />
      ) : (
        "sdf"
      )}
    </div>
  );
};

export default SignUp;
