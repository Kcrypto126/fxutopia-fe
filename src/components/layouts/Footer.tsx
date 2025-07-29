"use client";

import UnlockSection from "../footer/UnlockSection";
import FooterSection from "../footer/FooterSection";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("auth")) {
    return null;
  }

  return (
    <div className="pt-8">
      <UnlockSection />
      <FooterSection />
    </div>
  );
};

export default Footer;
