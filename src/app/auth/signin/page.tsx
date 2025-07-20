"use client";

import SigninForm from "@/components/auth/SigninForm";
import Image from "next/image";

const SignIn = () => {
  return (
    <div className="relative max-w-[480px] w-full overflow-hidden z-0 flex flex-col gap-5 lg:gap-6 items-center p-3 si:p-8 border-0 si:border-[1px] border-[#9862DB] rounded-[24px] bg-none si:bg-[#130D1B]">
      <Image
        src="/assets/signin/effect.png"
        width={150}
        height={150}
        alt="effect"
        className="absolute bottom-0 left-0 -z-10 !mb-0 max-w-[150px] w-full h-auto hidden si:block"
      />
      <SigninForm />
    </div>
  );
};

export default SignIn;
