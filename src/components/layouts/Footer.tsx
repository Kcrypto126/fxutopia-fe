"use client";

import UnlockSection from "../footer/UnlockSection";
import FooterSection from "../footer/FooterSection";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.includes("account")) {
    return null;
  }

  return (
    <div>
      <UnlockSection />
      <FooterSection />
    </div>
  );
};

export default Footer;
