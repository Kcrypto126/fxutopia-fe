"use client";

import { useState } from "react";
import Image from "next/image";
import EmailSent from "@/components/auth/EmailSent";
import EmailVerify from "@/components/auth/EmailVerify";
import ResetPassword from "@/components/auth/ResetPassword";

const ForgotPassword = () => {
  const [isSent, setIsSent] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);

  return (
    <div className="relative max-w-[480px] w-full min-h-[661px] overflow-hidden z-0 flex flex-col justify-center items-center si:items-start gap-5 lg:gap-6 p-3 si:p-8 border-0 si:border-[1px] border-[#9862DB] rounded-[24px] bg-none si:bg-[#130D1B]">
      <Image
        src="/assets/signin/effect.png"
        width={150}
        height={150}
        alt="effect"
        className="absolute bottom-0 left-0 -z-10 !mb-0 max-w-[150px] w-full h-auto hidden si:block"
      />
      {!isSent ? (
        <EmailSent setIsSent={setIsSent} setEmail={setEmail} />
      ) : isSent && !emailVerified ? (
        <EmailVerify email={email} setEmailVerified={setEmailVerified} />
      ) : (
        <ResetPassword />
      )}
    </div>
  );
};

export default ForgotPassword;
