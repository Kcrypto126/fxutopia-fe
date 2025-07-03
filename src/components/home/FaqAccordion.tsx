"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = [
  {
    question: "Is FX Utopia free to join?",
    answer:
      "Yes! Core features like educational content, the blog, and community access are 100% free. Some premium tools and marketplace items may require payment.",
  },
  {
    question: "Do I need trading experience to use FX Utopia?",
    answer:
      "No, you don't need trading experience to use FX Utopia because the platform is designed to be user-friendly and handles trading automatically for you.",
  },
  {
    question: "Can I access FX and Crypto education in one place?",
    answer:
      "Yes, FX Utopia provides both FX and Crypto education in one convenient platform.",
  },
  {
    question: "How do I buy something from the marketplace?",
    answer:
      "To buy something from the marketplace, simply find the item you want, click 'Buy' or 'Add to Cart', then proceed to checkout and confirm your payment.",
  },
  {
    question: "Is the mentorship program included in the free plan?",
    answer:
      "Yes, because the free plan includes basic access to the mentorship program.",
  },
  {
    question: "How do I join the community?",
    answer:
      "To join the community, simply click the “Sign Up” or “Join Community” button on our website, create an account, and follow the prompts to introduce yourself in the welcome channel.",
  },
];

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-[617px] space-y-3 md:space-y-5"
      defaultValue="item-1"
    >
      {FAQs.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
