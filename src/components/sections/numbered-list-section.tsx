import Link from "next/link"
import { ArrowRight } from "lucide-react"

export type NumberedListItem = {
  number: string
  title: string
  description: string
}

export type NumberedListSectionProps = {
  id?: string
  eyebrow: string
  title: string
  description: string
  items: NumberedListItem[]
  ctaLabel?: string
  ctaHref?: string
}

export function NumberedListSection({
  id,
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  ctaHref,
}: NumberedListSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden bg-[image:var(--cinopse-gradient-blue)] py-24 text-white lg:py-28"
    >
      <div className="absolute -bottom-64 -left-52 size-[560px] rounded-full bg-[color:var(--cinopse-accent)]/12 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-[1160px] px-7">
        <div className="mx-auto max-w-2xl text-center">
          <div data-reveal className="flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 rounded-full bg-[color:var(--cinopse-accent)]" />
            <p className="text-[11px] font-medium tracking-[0.22em] text-[color:var(--cinopse-accent)] uppercase">
              {eyebrow}
            </p>
            <span className="h-0.5 w-12 rounded-full bg-[color:var(--cinopse-accent)]" />
          </div>
          <h2
            data-reveal
            className="font-display mt-5 text-[clamp(32px,4.6vw,46px)] leading-[1.12] font-semibold tracking-[-0.01em]"
          >
            {title}
          </h2>
          <p data-reveal className="mx-auto mt-6 max-w-xl text-[15px] leading-8 text-white/65">
            {description}
          </p>
        </div>

        <div className="relative z-10 mt-14 grid gap-3.5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.number}
              data-reveal
              className="flex items-start gap-4 rounded-[14px] border border-white/12 bg-white/[0.07] px-5 py-[18px] backdrop-blur-md transition-[transform,background,border-color] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-1.5 hover:border-[color:var(--cinopse-accent)]/50 hover:bg-white/[0.13]"
            >
              <span className="grid size-[34px] shrink-0 place-items-center rounded-full border border-[color:var(--cinopse-accent)]/45 bg-[color:var(--cinopse-accent)]/14 font-mono text-[11px] font-semibold text-[color:var(--cinopse-accent)]">
                {item.number}
              </span>
              <div>
                <h3 className="text-[14px] leading-snug font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] leading-normal font-light text-white/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {ctaLabel && ctaHref ? (
          <div data-reveal className="relative z-10 mt-10 flex justify-center">
            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--cinopse-accent)] px-7 py-4 text-[12.5px] leading-none font-medium text-[color:var(--cinopse-primary-deep)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(217,164,65,0.35)]"
            >
              {ctaLabel}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
