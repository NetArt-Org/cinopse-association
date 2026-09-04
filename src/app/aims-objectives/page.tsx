import type { Metadata } from "next"

import { RegistrationFormModal } from "@/components/forms/registration-form-modal"
import { SiteHeader } from "@/components/layout/site-header"
import { ArticlePageContent, type ArticlePage } from "@/components/sections/article-page-content"
import { SiteFooter } from "@/components/sections/site-footer"
import { aimsAndObjectives } from "@/lib/association-content"
import { policyFooter, policyNavItems, policyRegistrationComparison } from "@/lib/policy-pages"

export const metadata: Metadata = {
  title: "Aims & Objectives — Karnataka CINOPSE Association",
  description:
    "The twelve aims and objectives of Karnataka CINOPSE Association (KCA) — multidisciplinary medicine, evidence-based practice, education, research and patient outcomes.",
}

const article: ArticlePage = {
  eyebrow: "Our Purpose",
  title: "Aims & Objectives",
  summary:
    "Twelve commitments that guide Karnataka CINOPSE Association's academic, research and patient-care activities.",
  sections: aimsAndObjectives,
}

export default function AimsAndObjectivesPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--cinopse-cream)] text-[color:var(--cinopse-text)]">
      <SiteHeader items={policyNavItems} />
      <RegistrationFormModal {...policyRegistrationComparison} />
      <ArticlePageContent article={article} />
      <SiteFooter {...policyFooter} />
    </div>
  )
}
