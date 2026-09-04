import { ArrowRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"

export type WhatMakesDifferentSectionProps = {
  eyebrow: string
  title: string
  statement: string
  pathway: string[]
  closingTitle: string
  closingDescription: string
}

export function WhatMakesDifferentSection({
  eyebrow,
  title,
  statement,
  pathway,
  closingTitle,
  closingDescription,
}: WhatMakesDifferentSectionProps) {
  return (
    <section className="bg-[color:var(--cinopse-cream)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <p
          data-reveal
          className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)]"
        >
          {statement}
        </p>

        <div
          data-reveal
          className="mt-12 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-4"
        >
          {pathway.map((condition, index) => (
            <span key={condition} className="flex items-center gap-2.5">
              <span className="rounded-full border border-[color:var(--cinopse-border)] bg-white px-5 py-2.5 text-[13px] leading-none font-medium text-[color:var(--cinopse-primary)] shadow-[0_6px_18px_rgba(12,40,84,0.08)]">
                {condition}
              </span>
              {index < pathway.length - 1 ? (
                <ArrowRight
                  className="size-4 shrink-0 text-[color:var(--cinopse-accent)]"
                  aria-hidden="true"
                />
              ) : null}
            </span>
          ))}
        </div>

        <div
          data-reveal
          className="relative mx-auto mt-14 max-w-3xl overflow-hidden rounded-[20px] bg-[image:var(--cinopse-gradient-reference-blue)] px-8 py-10 text-center text-white shadow-[0_24px_60px_rgba(12,40,84,0.25)] md:px-14 md:py-12"
        >
          <p className="font-display m-0 text-[clamp(18px,2.6vw,26px)] leading-[1.35] font-semibold tracking-[-0.01em] uppercase">
            {closingTitle}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-[13.5px] leading-[1.8] font-light text-white/70">
            {closingDescription}
          </p>
        </div>
      </div>
    </section>
  )
}
