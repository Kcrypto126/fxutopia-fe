"use client";

import ContactUsSection from "@/components/contact-us/ContactUsSection";
import HeroSection from "@/components/marketplace/HeroSection";

const HeroData = {
  title: "Get in Touch with FX Utopia",
  description:
    "Have questions, feedback, or need help? We’re here to support you every step of the way.",
};

const ContactUs = () => {
  return (
    <>
      <HeroSection data={HeroData} />
      <ContactUsSection />
    </>
  );
};

export default ContactUs;
