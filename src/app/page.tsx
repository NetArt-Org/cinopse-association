import { GsapProvider } from "@/components/layout/gsap-provider"
import { SiteHeader } from "@/components/layout/site-header"
import { AboutSection } from "@/components/sections/about-section"
import { CinopseRelationshipSection } from "@/components/sections/cinopse-relationship-section"
import { HeroSection } from "@/components/sections/hero-section"
import type { HeroSectionProps } from "@/components/sections/hero-section"
import { MembershipTeaserSection } from "@/components/sections/membership-teaser-section"
import { NumberedListSection } from "@/components/sections/numbered-list-section"
import { OrganizingCommitteeSection } from "@/components/sections/organizing-committee-section"
import { SiteFooter } from "@/components/sections/site-footer"
import { WhatMakesDifferentSection } from "@/components/sections/what-makes-different-section"
import { policyFooterLinks } from "@/lib/policy-pages"
import { aimsAndObjectivesTeaser, membershipCategories } from "@/lib/association-content"

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Aims & Objectives", href: "/#aims" },
  { label: "Membership", href: "/#membership" },
  { label: "Committee", href: "/#leadership" },
]

const hero: HeroSectionProps = {
  logo: {
    src: "/logo.jpg",
    alt: "CINOPSE logo",
  },
  backgroundImage: {
    src: "/images/cinopse-hero-cover.png",
    alt: "Jawaharlal Nehru Planetarium and the Bengaluru skyline at dusk",
  },
  title: "CINOPSE India 2026",
  ctaHref: "https://cinopse.in",
}

const committee = {
  eyebrow: "Leadership",
  title: "Organizing Committee",
  description:
    "The people shaping the agenda, the science, and the experience of CINOPSE India 2026.",
  leaders: [
    {
      initials: "MM",
      name: "Dr Murali Mohan BV",
      role: "President",
      affiliation: "Cinopse",
      image: "/doctor/murali-mohan.jpeg",
    },
    {
      initials: "SK",
      name: "Dr Santosh KM",
      role: "Organising Chairman",
      affiliation: "Cinopse",
      image: "/doctor/santosh-km.jpeg",
    },
    {
      initials: "VB",
      name: "Dr Vinod Babu Veerapalli",
      role: "Organising Co-Chairperson",
      affiliation: "Cinopse",
      image: "/doctor/vinod-babu.jpeg",
    },
    {
      initials: "SK",
      name: "Dr Sheetal Kamat",
      role: "Organising Secretary",
      affiliation: "Cinopse",
      image: "/doctor/sheetal-kamat.jpeg",
    },
    {
      initials: "KS",
      name: "Dr Karthik SM",
      role: "Organising Treasurer",
      affiliation: "Cinopse",
      image: "/doctor/kartik-sm.jpeg",
    },
  ],
  members: [
    {
      initials: "UH",
      name: "Dr Usha Humbi",
      caption: "Scientific Committee · Cinopse",
      image: "/doctor/usha-humbi.jpeg",
    },
    {
      initials: "SM",
      name: "Dr Soumya M S",
      caption: "Scientific Committee · Cinopse",
      image: "/doctor/soumya-ms.jpeg",
    },
    {
      initials: "PG",
      name: "Dr Praveen Gangadhara",
      caption: "Scientific Committee · Cinopse",
      image: "/doctor/praveen-gangadhara.jpeg",
    },
    {
      initials: "PM",
      name: "Dr Prathima Murthy",
      caption: "Scientific Committee · Cinopse",
      image: "/doctor/prathima-murthy.jpeg",
    },
    {
      initials: "✣",
      name: "Hospitality & Logistics",
      caption: "Hospitality & Logistics",
      variant: "logistics" as const,
      names: ["Mr Vishnu", "Mr Akash", "Mr Stephen", "Ms Bhavishya"],
    },
  ],
}

const about = {
  eyebrow: "Who We Are",
  title: "About Karnataka CINOPSE Association",
  paragraphs: [
    "Karnataka CINOPSE Association (KCA) is a multidisciplinary academic and professional association dedicated to integrating Cardiology, Neurology, Nephrology, Pulmonology, Metabolic Medicine and Sleep Medicine through evidence-based, precision-oriented healthcare.",
    "Our vision is to create a unified medical community where specialties converge, scientific evidence guides clinical decisions, and collaboration translates into better patient outcomes.",
    "Our mission is to promote continuous medical education, multidisciplinary collaboration, clinical research, innovation and evidence-based patient care across interconnected cardiovascular, neurological, renal, pulmonary, metabolic and sleep disorders.",
    "The association serves as a platform for continuous medical education, multidisciplinary collaboration, clinical research, innovation, professional networking and advancement of patient-centred care — with CINOPSE India as its flagship scientific conference.",
  ],
  quote: {
    text: "Connecting Specialties. Integrating Science.",
    emphasis: "Improving Outcomes.",
    subtext:
      "The three commitments that shape every academic activity of Karnataka CINOPSE Association.",
  },
  pillars: [
    {
      icon: "scale" as const,
      title: "Connecting Specialties",
      description: "Bringing different medical disciplines together.",
    },
    {
      icon: "case" as const,
      title: "Integrating Science",
      description: "Combining guidelines, clinical evidence, research and real-world experience.",
    },
    {
      icon: "star" as const,
      title: "Improving Outcomes",
      description: "Translating knowledge into better clinical decisions and better patient care.",
    },
  ],
}

const whatMakesDifferent = {
  eyebrow: "What Makes KCA Different",
  title: "One Patient. Multiple Systems.",
  statement:
    "KCA is built around the belief that modern medicine cannot always be divided into isolated specialties. A patient with obesity, diabetes, hypertension, CKD, OSA and MASLD may require multiple specialties, but the patient's disease is interconnected.",
  pathway: [
    "Obesity",
    "Diabetes",
    "CKD",
    "Cardiovascular Disease",
    "Obstructive Sleep Apnoea",
    "MASLD",
  ],
  closingTitle: "One Integrated Approach",
  closingDescription:
    "The association aims to create a professional environment where physicians can learn from different specialties, challenge existing concepts, collaborate on research and translate scientific evidence into practical clinical care.",
}

const aimsTeaser = {
  id: "aims",
  eyebrow: "Our Purpose",
  title: "Aims & Objectives",
  description:
    "Commitments that guide KCA's academic, research and patient-care activities — from multidisciplinary medicine to public health.",
  items: aimsAndObjectivesTeaser,
}

const cinopseRelationship = {
  eyebrow: "Our Flagship Conference",
  title: "CINOPSE India & KCA",
  paragraphs: [
    "Karnataka CINOPSE Association (KCA) is the parent academic and professional association. CINOPSE India is the flagship scientific conference of the association, bringing together physicians, specialists, researchers, postgraduate students and allied healthcare professionals to exchange knowledge and develop collaborative approaches to complex clinical problems.",
  ],
  activitiesLabel: "Association Activities",
  activities: [
    "CINOPSE India Conference",
    "Continuing Medical Education",
    "Clinical Workshops",
    "Scientific Webinars",
    "Medical Quizzes",
    "Research Initiatives",
    "Publications",
    "Consensus & Clinical Pathways",
    "Young Physician Programmes",
    "Academic Collaborations",
  ],
  ctaLabel: "Visit CINOPSE India",
  ctaHref: "https://cinopse.in",
}

const membershipTeaser = {
  eyebrow: "Join KCA",
  title: "Suggested Membership Categories",
  description:
    "KCA welcomes qualified healthcare professionals interested in integrated medicine, scientific education and improved patient outcomes.",
  categories: membershipCategories,
}

const footer = {
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

export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-[color:var(--cinopse-text)]">
      <SiteHeader items={navItems} />
      <GsapProvider>
        <main>
          <HeroSection {...hero} />
          <AboutSection {...about} />
          <OrganizingCommitteeSection {...committee} />
          <WhatMakesDifferentSection {...whatMakesDifferent} />
          <NumberedListSection {...aimsTeaser} />
          <CinopseRelationshipSection {...cinopseRelationship} />
          <MembershipTeaserSection {...membershipTeaser} />
        </main>
        <SiteFooter {...footer} />
      </GsapProvider>
    </div>
  )
}
