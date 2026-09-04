import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export type JoinCtaSectionProps = {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  contactLabel: string
  contactHref: string
}

export function JoinCtaSection({
  title,
  description,
  ctaLabel,
  ctaHref,
  contactLabel,
  contactHref,
}: JoinCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--cinopse-gradient-reference-blue)] py-20 text-white lg:py-24">
      <span
        className="pointer-events-none absolute -top-32 -right-24 size-[420px] rounded-full bg-[color:var(--cinopse-accent)]/14 blur-[90px]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-40 -left-28 size-[420px] rounded-full bg-[#1d5ab4]/45 blur-[90px]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[760px] px-7 text-center">
        <h2
          data-reveal
          className="font-display text-[clamp(26px,3.6vw,40px)] leading-[1.15] font-semibold tracking-[-0.01em]"
        >
          {title}
        </h2>
        <p data-reveal className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.9] font-light text-white/70">
          {description}
        </p>
        <div data-reveal className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaHref}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--cinopse-accent)] px-8 py-4 text-[13.5px] leading-none font-medium text-[color:var(--cinopse-primary-deep)] transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:bg-[color:var(--cinopse-accent-hi)] hover:shadow-[0_14px_30px_rgba(217,164,65,.4)]"
          >
            {ctaLabel}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={contactHref}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/[0.09] px-8 py-4 text-[13.5px] leading-none font-medium text-white backdrop-blur-md transition-[transform,background] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:bg-white/15"
          >
            <Mail className="size-4" aria-hidden="true" />
            {contactLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
