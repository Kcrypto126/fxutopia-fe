"use client";

import { useState } from "react";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import EmailVerify from "@/components/auth/EmailVerify";
import AddPhone from "@/components/auth/AddPhone";
import PhoneVerify from "@/components/auth/PhoneVerify";
import IDVerify from "@/components/auth/IdentityVerify";
import AllSet from "@/components/auth/AllSet";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);

  return (
    <div
      className={`relative ${
        step == 0
          ? "max-w-[784px]"
          : step == 4
          ? "max-w-[684px] min-h-[651px]"
          : "max-w-[480px] min-h-[661px]"
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
        <EmailVerify type="Signup" email={email} setStep={setStep} />
      ) : step == 2 ? (
        <AddPhone email={email} setStep={setStep} />
      ) : step == 3 ? (
        <PhoneVerify email={email} setStep={setStep} />
      ) : step == 4 ? (
        <IDVerify email={email} setStep={setStep} />
      ) : (
        <AllSet email={email} setStep={setStep} />
      )}
    </div>
  );
};

export default SignUp;
