import type { Metadata } from "next"

import { SiteHeader } from "@/components/layout/site-header"
import { PolicyPageContent } from "@/components/sections/policy-page-content"
import { SiteFooter } from "@/components/sections/site-footer"
import { policyFooter, policyNavItems, privacyPolicy } from "@/lib/policy-pages"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for the Karnataka CINOPSE Association (KCA) website.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-dvh bg-[color:var(--cinopse-cream)] text-[color:var(--cinopse-text)]">
      <SiteHeader items={policyNavItems} />
      <PolicyPageContent policy={privacyPolicy} />
      <SiteFooter {...policyFooter} />
    </div>
  )
}
