"use client";

import Container from "@/components/layouts/Container";

const Terms = [
  {
    title: "1. Acceptance of Terms",
    details: [
      "By accessing or using any part of the FX Utopia platform — including our website, courses, marketplace, forum, and community resources — you agree to comply with and be bound by these Terms and Conditions. If you do not agree, you must not use this site.",
    ],
  },
  {
    title: "2. Eligibility",
    details: [
      "To register for an account, purchase products, or engage in community features, you must be at least 18 years of age or have legal parental or guardian consent. You represent that any registration information you submit is accurate and complete.",
    ],
  },
  {
    title: "3. Use of Services",
    details: [
      "You may not use FX Utopia for any unlawful or unauthorized purpose.",
      "You agree not to share copyrighted materials without permission.",
      "You may not interfere with, disrupt, or negatively affect other users' experience or our platform functionality.",
      "We reserve the right to suspend or terminate your account if you violate these terms.",
    ],
  },
  {
    title: "4. Accounts & Security",
    details: [
      "You're responsible for your login credentials and all activities under your account.",
      "Notify us immediately of any unauthorised use.",
      "We reserve the right to refuse registration, terminate accounts, or remove content at our sole discretion.",
    ],
  },
  {
    title: "5. Purchases, Subscriptions & Refunds",
    details: [
      "Payments are processed securely through third-party providers.",
      "Subscriptions renew automatically unless canceled.",
      "Refunds are only available under specific conditions outlined on the respective product pages or during checkout.",
    ],
  },
  {
    title: "6. Intellectual Property",
    details: [
      "All content, including logos, designs, graphics, educational materials, and tools, are property of FX Utopia or our licensed partners.",
      "No content may be copied, republished, or redistributed without written consent.",
    ],
  },
  {
    title: "7. Community Guidelines",
    details: [
      "Respectful, constructive interaction is expected in forums, chatrooms, and comments.",
      "No spam, harassment, offensive language, or self-promotion.",
      "Violations may result in warnings, suspension, or permanent bans.",
    ],
  },
  {
    title: "8. No Financial Advice Disclaimer ",
    details: [
      "All content on FX Utopia is for educational and informational purposes only. It does not constitute financial, investment, or trading advice. Always consult with a licensed financial advisor before making investment decisions.",
    ],
  },
  {
    title: "9. Limitation of Liability",
    details: [
      "FX Utopia is not liable for any direct, indirect, incidental, or consequential loss or damage from the use (or misuse) of any of our services, content, or third-party links. Trading involves risk — never trade more than you can afford to lose.",
    ],
  },
  {
    title: "10. Modifications",
    details: [
      "FX Utopia may update these terms at any time. Changes will be posted here, and continued use after changes constitutes acceptance.",
    ],
  },
];

const Policy = [
  {
    title: "1. Information We Collect",
    details: [
      "Personal Information: name, email, billing details, login credentials, etc.",
      "Usage Data: browser type, device, IP address, time spent on pages, clicks.",
      "Optional Data: survey responses, community posts, support tickets.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    details: [
      "To manage your account and provide services",
      "To personalize learning recommendations",
      "To process transactions securely",
      "To respond to support requests or technical issues",
      "To send updates, newsletters (opt-in), and educational content",
      "To analyze platform usage and improve our features",
    ],
  },
  {
    title: "3. Data Sharing & Disclosure",
    details: [
      "We do not sell your data. We may share limited data with trusted third-party services only to:",
      "Process payments (e.g., Stripe, PayPal)",
      "Send email communications (e.g., Mailchimp)",
      "Analyze web performance (e.g., Google Analytics) These partners are required to comply with data protection regulations.",
    ],
  },
  {
    title: "4. Cookies & Tracking",
    details: [
      "FX Utopia uses cookies to enhance functionality and track user experience.",
      "You can manage cookie preferences in your browser.",
      "We may use session cookies (for login) and analytics cookies (to improve features).",
    ],
  },
  {
    title: "5. Your Rights",
    details: [
      "Depending on your location (e.g., GDPR, CCPA), you may:",
      "Request access to your personal data",
      "Request correction, deletion, or portability of your data",
      "Withdraw consent for data usage",
      "File a complaint with a data protection authority",
      "To exercise any of the above rights, contact us at: privacy@fxutopia.com",
    ],
  },
  {
    title: "6. Third-Party Links",
    details: [
      "Our site may include links to third-party platforms or tools. We are not responsible for their content or privacy practices. We recommend reviewing their privacy policies separately.",
    ],
  },
  {
    title: "7. Retention Policy",
    details: [
      "We retain your data as long as your account is active, or as necessary to comply with legal, tax, or operational obligations.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    details: [
      "We may update our privacy policy from time to time. Changes will be communicated via the website or email. Your continued use of FX Utopia indicates acceptance.",
    ],
  },
];

const TermsPrivacyPolicy = () => {
  return (
    <Container className="py-25 lg:pt-48 lg:pb-32">
      <div className="flex flex-col gap-5">
        <h1 className="!text-start !leading-[115%] !text-[24px] md:!text-[46px]">
          Terms & Conditions & Privacy Policy
        </h1>
        <div className="flex flex-col gap-6 md:gap-8">
          <h5 className="text-[18px] md:text-[30px] font-[700]">
            Terms & Conditions
          </h5>
          {Terms.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] px-4 py-1 md:px-10 md:py-7 bg-[#000000]"
            >
              <h5 className="text-[20px] font-[700] py-3">{item.title}</h5>
              {item.details.length == 1 ? (
                <p>{item.details[0]}</p>
              ) : (
                <ul className="list-disc pl-6">
                  {item.details.map((detail, index) => (
                    <li key={index} className="text-[16px] md:text-[18px] my-3">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-8 mt-5">
          <h5 className="text-[18px] md:text-[30px]">Privacy Policy</h5>
          {Policy.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] px-4 py-1 md:px-10 md:py-7 bg-[#000000]"
            >
              <h5 className="text-[20px] font-[700] py-3">{item.title}</h5>
              {item.details.length == 1 ? (
                <p>{item.details[0]}</p>
              ) : (
                <ul className="list-disc pl-6">
                  {item.details.map((detail, index) => (
                    <li key={index} className="text-[16px] md:text-[18px] my-3">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TermsPrivacyPolicy;
