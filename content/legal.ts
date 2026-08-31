import { siteConfig } from "@/lib/site-config";

const { email, phone } = siteConfig.contact;

/**
 * Legal content model. Each document is an ordered list of sections; a section
 * body is either paragraph strings or a bullet list. Rendered as plain JSX by
 * LegalLayout (no dangerouslySetInnerHTML) so there is no injection surface.
 */
export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type LegalDoc = {
  slug: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

const contactLine = `Email: ${email} · Phone: ${phone}`;

export const termsDoc: LegalDoc = {
  slug: "terms",
  title: "Terms & Conditions",
  intro:
    'These Terms govern your access to and use of the Billionit Wealth website, educational content, programmes and related services (the "Services"). By using our Services you agree to be bound by these Terms.',
  sections: [
    {
      heading: "1. About Billionit Wealth",
      paragraphs: [
        "Billionit Wealth provides trading and financial-market education — courses, mentorship, live sessions, an algo-trading service and a community trading desk. We are an education and technology provider. We do not provide investment advisory, portfolio management, or brokerage services, and we do not guarantee any profit or return.",
      ],
    },
    {
      heading: "2. Educational purpose only",
      paragraphs: [
        "All content, sessions and materials are for educational and informational purposes only. Nothing we provide is investment, financial, tax or legal advice, or a recommendation to buy or sell any security or instrument. You are solely responsible for your own trading and investment decisions and should consult a SEBI-registered investment adviser where appropriate.",
      ],
    },
    {
      heading: "3. Market risk disclosure",
      paragraphs: [
        "Trading and investing in securities, derivatives and other instruments involve substantial risk of loss and are not suitable for every person. Past performance is not indicative of future results. You may lose some or all of your capital. Do not trade with money you cannot afford to lose.",
      ],
    },
    {
      heading: "4. Eligibility",
      paragraphs: [
        "You must be at least 18 years old and legally able to enter into a contract to use paid programmes.",
      ],
    },
    {
      heading: "5. Enrolment & payments",
      paragraphs: [
        "Programme fees are shown at the point of enrolment and are processed securely through our payment partner (Razorpay). Access to a programme is granted after payment is confirmed. Prices and programme contents may change from time to time.",
      ],
    },
    {
      heading: "6. Acceptable use",
      list: [
        "Do not copy, record, redistribute or resell our content, materials or recordings without written permission.",
        "Do not share your access with others; access is for the enrolled individual only.",
        "Do not misuse the community or sessions for spam, harassment, or unlawful activity.",
      ],
    },
    {
      heading: "7. Intellectual property",
      paragraphs: [
        "All course materials, recordings, strategies, software, branding and content are owned by or licensed to Billionit Wealth and are protected by law. No rights are transferred to you other than a personal, non-transferable licence to access the content you enrolled in.",
      ],
    },
    {
      heading: "8. Algo trading service",
      paragraphs: [
        "Any automated or algorithmic trading tools are provided on an as-is basis for your own use. You remain responsible for your broker account, capital, configuration and all resulting trades. We do not execute trades on your behalf as a discretionary manager and do not guarantee performance.",
      ],
    },
    {
      heading: "9. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by law, Billionit Wealth is not liable for any trading or investment losses, lost profits, or indirect, incidental or consequential damages arising from the use of our Services or content. Use is at your own risk.",
      ],
    },
    {
      heading: "10. Changes & contact",
      paragraphs: [
        "We may update these Terms from time to time; continued use constitutes acceptance of the updated Terms.",
        contactLine,
      ],
    },
  ],
};

export const privacyDoc: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  intro:
    "This Privacy Policy explains how Billionit Wealth collects, uses and protects your information when you use our website and services.",
  sections: [
    {
      heading: "1. Information we collect",
      list: [
        "Contact details you provide (name, email, phone) when you enrol or get in touch.",
        "Payment information processed by our payment partner (we do not store card details).",
        "Basic usage and device data collected automatically to operate and improve the site.",
      ],
    },
    {
      heading: "2. How we use it",
      list: [
        "To deliver the programmes and services you enrol in.",
        "To respond to your enquiries and provide support.",
        "To send important updates about your programme (and, with consent, offers).",
        "To improve our content, website and services.",
      ],
    },
    {
      heading: "3. Sharing",
      paragraphs: [
        "We do not sell your personal information. We share it only with service providers who help us operate — for example our payment processor and communication tools — and where required by law.",
      ],
    },
    {
      heading: "4. Payments",
      paragraphs: [
        "Payments are handled by Razorpay under its own security standards and privacy policy. Billionit Wealth does not store your full card or bank details.",
      ],
    },
    {
      heading: "5. Data security & retention",
      paragraphs: [
        "We take reasonable measures to protect your information and retain it only as long as necessary for the purposes above or as required by law.",
      ],
    },
    {
      heading: "6. Your rights & contact",
      paragraphs: [
        "You may request access to, correction of, or deletion of your personal data by contacting us.",
        contactLine,
      ],
    },
  ],
};

export const refundDoc: LegalDoc = {
  slug: "refund",
  title: "Refund & Cancellation Policy",
  intro:
    "This policy explains when refunds and cancellations apply to programmes purchased from Billionit Wealth. Because we sell digital educational services, please read this carefully before enrolling.",
  sections: [
    {
      heading: "1. Digital services",
      paragraphs: [
        "Billionit Wealth sells digital educational services — courses, mentorship, live sessions and access to community/algo services. Access is granted promptly after payment; there is no physical product or shipping.",
      ],
    },
    {
      heading: "2. Refund eligibility",
      list: [
        "Refund eligibility, if any, is as displayed at the time of purchase for that specific programme.",
        "Once course content, recordings or materials have been accessed or substantially delivered, fees are generally non-refundable.",
        "For any live cohort cancelled by Billionit Wealth, you will be offered a rescheduled batch or a refund of that programme.",
      ],
    },
    {
      heading: "3. No refunds for trading outcomes",
      paragraphs: [
        "Programmes are educational. Refunds will not be granted on the basis of trading or investment losses, market conditions, or a strategy not producing expected results. Trading involves market risk, and outcomes depend on your own decisions and execution.",
      ],
    },
    {
      heading: "4. How to request",
      paragraphs: [
        "To raise a refund or cancellation request, contact us with your enrolment details. Approved refunds are processed to the original payment method through our payment partner.",
        contactLine,
      ],
    },
  ],
};

export const legalDocs: Record<string, LegalDoc> = {
  terms: termsDoc,
  privacy: privacyDoc,
  refund: refundDoc,
};
