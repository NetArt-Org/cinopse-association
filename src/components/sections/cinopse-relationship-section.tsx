import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"

export type CinopseRelationshipSectionProps = {
  eyebrow: string
  title: string
  paragraphs: string[]
  activitiesLabel: string
  activities: string[]
  ctaLabel?: string
  ctaHref?: string
}

export function CinopseRelationshipSection({
  eyebrow,
  title,
  paragraphs,
  activitiesLabel,
  activities,
  ctaLabel,
  ctaHref,
}: CinopseRelationshipSectionProps) {
  return (
    <section id="cinopse" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div data-reveal className="mx-auto mt-6 max-w-2xl text-center">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-3.5 text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)] first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <p className="shrink-0 text-[10.5px] font-medium tracking-[0.22em] text-[color:var(--cinopse-accent-deep)] uppercase">
            {activitiesLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {activities.map((activity) => (
              <span
                key={activity}
                className="rounded-full border border-[color:var(--cinopse-border)] px-4 py-2 text-[11px] leading-none text-[color:var(--cinopse-text-secondary)] transition-[transform,background,color] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:bg-[color:var(--cinopse-primary)] hover:text-white"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>

        {ctaLabel && ctaHref ? (
          <div data-reveal className="mt-10 flex justify-center">
            <Link
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--cinopse-primary)] px-7 py-4 text-[12.5px] leading-none font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(27,75,150,0.35)]"
            >
              {ctaLabel}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
