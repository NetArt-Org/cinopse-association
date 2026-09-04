import type { Metadata } from "next"

import { RegistrationFormModal } from "@/components/forms/registration-form-modal"
import { SiteHeader } from "@/components/layout/site-header"
import { ArticlePageContent, type ArticlePage } from "@/components/sections/article-page-content"
import { JoinCtaSection } from "@/components/sections/join-cta-section"
import { MembershipCategoriesSection } from "@/components/sections/membership-categories-section"
import { SiteFooter } from "@/components/sections/site-footer"
import { membershipCategories, whoCanJoin } from "@/lib/association-content"
import { policyFooter, policyNavItems, policyRegistrationComparison } from "@/lib/policy-pages"

export const metadata: Metadata = {
  title: "Membership — Karnataka CINOPSE Association",
  description:
    "Who can join Karnataka CINOPSE Association (KCA) and the association's suggested membership categories.",
}

const article: ArticlePage = {
  eyebrow: "Join KCA",
  title: "Who Can Join",
  summary:
    "KCA is envisioned as a multidisciplinary professional and academic association and welcomes qualified healthcare professionals interested in integrated medicine, scientific education and improved patient outcomes.",
  sections: whoCanJoin,
}

export default function MembershipPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--cinopse-cream)] text-[color:var(--cinopse-text)]">
      <SiteHeader items={policyNavItems} />
      <RegistrationFormModal {...policyRegistrationComparison} />
      <ArticlePageContent article={article} />
      <MembershipCategoriesSection
        eyebrow="Membership Categories"
        title="Suggested Membership Categories"
        description="Indicative categories reflecting KCA's proposed membership structure. Final eligibility and fees will be confirmed by the association."
        categories={membershipCategories}
      />
      <JoinCtaSection
        title="Ready to Become Part of KCA?"
        description="Reach out to the association to learn more about eligibility, enrolment and upcoming membership drives."
        ctaLabel="Explore Aims & Objectives"
        ctaHref="/aims-objectives"
        contactLabel="cinopseindiamedical@gmail.com"
        contactHref="mailto:cinopseindiamedical@gmail.com"
      />
      <SiteFooter {...policyFooter} />
    </div>
  )
}
