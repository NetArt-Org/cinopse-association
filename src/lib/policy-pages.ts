import type { FooterLinkItem } from "@/components/sections/site-footer"

export const policyNavItems = [
  { label: "About", href: "/#about" },
  { label: "Aims & Objectives", href: "/#aims" },
  { label: "Membership", href: "/#membership" },
  { label: "Committee", href: "/#leadership" },
]

export const policyFooterLinks: FooterLinkItem[] = [
  { label: "About KCA", href: "/#about" },
  { label: "Aims & Objectives", href: "/#aims" },
  { label: "Membership", href: "/#membership" },
  { label: "Organising Committee", href: "/#leadership" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
]

export const policyFooter = {
  columns: [
    {
      title: "Karnataka",
      brandEmphasis: "CINOPSE Association",
      logo: {
        src: "/logo.jpg",
        alt: "CINOPSE logo",
      },
      paragraphs: [
        "Connecting Specialties. Integrating Science. Improving Outcomes.",
        "A multidisciplinary academic and professional association integrating Cardiology, Neurology, Nephrology, Pulmonology, Metabolic Medicine and Sleep Medicine.",
      ],
    },
  ],
  linksTitle: "Navigate",
  links: policyFooterLinks,
  contactTitle: "Contact",
  contacts: [
    "info@cinopseassociation.in",
    "www.cinopseassociation.in",
    "Karnataka, India",
  ],
  socialLinks: [],
  copyright: "© 2026 Karnataka CINOPSE Association. All rights reserved.",
  tagline: "Connecting Specialties. Integrating Science. Improving Outcomes.",
}

export type PolicySection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export type PolicyPage = {
  eyebrow: string
  title: string
  summary: string
  updated: string
  sections: PolicySection[]
}

const organiserContact =
  "For queries, contact Karnataka CINOPSE Association (KCA) at info@cinopseassociation.in."

export const privacyPolicy: PolicyPage = {
  eyebrow: "Compliance",
  title: "Privacy Policy",
  summary:
    "This policy explains how Karnataka CINOPSE Association (KCA) handles information shared through this website.",
  updated: "08 September 2026",
  sections: [
    {
      title: "About This Website",
      paragraphs: [
        "This website shares information about Karnataka CINOPSE Association (KCA) — its vision, mission, aims and objectives, membership categories, and its flagship scientific conference, CINOPSE India.",
        "The website is informational and does not process online membership registration or payments. Conference registration for CINOPSE India takes place on the conference's own website, cinopse.in.",
      ],
    },
    {
      title: "Information We Collect",
      paragraphs: [
        "This website does not run any registration, membership, or payment forms, and does not use analytics or advertising cookies.",
        "If you contact KCA directly by email, we receive only the information you choose to share — such as your name, contact details, and the content of your message.",
      ],
    },
    {
      title: "How We Use Information",
      bullets: [
        "To respond to enquiries about the association, membership, or CINOPSE India.",
        "To share updates about KCA's academic activities, where you have asked to receive them.",
        "To maintain accurate records for the association's operational and compliance needs.",
      ],
    },
    {
      title: "Data Sharing",
      paragraphs: [
        "KCA does not sell personal information. Information you share is only used by the association and, where strictly necessary to respond to your enquiry, trusted service providers.",
      ],
    },
    {
      title: "Contact",
      paragraphs: [organiserContact],
    },
  ],
}

export const termsAndConditions: PolicyPage = {
  eyebrow: "Legal",
  title: "Terms & Conditions",
  summary:
    "These terms apply to your use of the Karnataka CINOPSE Association (KCA) website.",
  updated: "08 September 2026",
  sections: [
    {
      title: "About Karnataka CINOPSE Association",
      paragraphs: [
        "Karnataka CINOPSE Association (KCA) is a multidisciplinary academic and professional association. This website is provided for general information about KCA's vision, mission, aims and objectives, and membership, and about its flagship conference, CINOPSE India.",
      ],
    },
    {
      title: "Membership Information",
      paragraphs: [
        "Membership categories described on this website are indicative and reflect KCA's proposed membership structure. Final eligibility criteria, fees, and the enrolment process will be confirmed directly by the association and are not processed through this website.",
      ],
    },
    {
      title: "Content and Intellectual Property",
      paragraphs: [
        "Website content, branding, and related materials are intended for general informational and educational use about KCA unless otherwise stated.",
        "Unauthorised commercial reuse, reproduction, or distribution of this content is not permitted without the association's consent.",
      ],
    },
    {
      title: "External Links",
      paragraphs: [
        "This website links to CINOPSE India (cinopse.in), the association's flagship conference and the site where conference registration takes place. KCA is not responsible for the content of external websites.",
      ],
    },
    {
      title: "Changes to Content",
      paragraphs: [
        "Aims, objectives, membership details, and other content on this website may be updated as KCA's constitution and bylaws are finalised.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: ["These terms are governed by the laws of India."],
    },
    {
      title: "Contact",
      paragraphs: [organiserContact],
    },
  ],
}
