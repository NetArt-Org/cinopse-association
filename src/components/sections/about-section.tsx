import { BookOpenCheck, Scale, Star } from "lucide-react"

const pillarIconMap = {
  scale: Scale,
  case: BookOpenCheck,
  star: Star,
} as const

export type AboutPillar = {
  icon: keyof typeof pillarIconMap
  title: string
  description: string
}

export type AboutSectionProps = {
  eyebrow: string
  title: string
  paragraphs: string[]
  quote: {
    text: string
    emphasis: string
    subtext: string
  }
  pillars: AboutPillar[]
}

export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  quote,
  pillars,
}: AboutSectionProps) {
  return (
    <section id="about" className="bg-[color:var(--cinopse-cream)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[860px] px-7">
        <div data-reveal>
          <div className="mb-3.5 flex items-center gap-3.5">
            <span className="h-[1.5px] w-[46px] bg-[color:var(--cinopse-accent)]" />
            <span className="text-[11px] leading-none font-medium tracking-[0.22em] text-[color:var(--cinopse-accent-deep)] uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display m-0 mb-[18px] text-[clamp(32px,4.6vw,46px)] leading-[1.12] font-semibold tracking-[-0.01em] text-[color:var(--cinopse-ink)]">
            {title}
          </h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)] ${
                index === 0 ? "m-0" : "mt-3.5 mb-0"
              }`}
            >
              {paragraph}
            </p>
          ))}

          <div className="relative mt-[22px] overflow-hidden rounded-[14px] bg-[image:var(--cinopse-gradient-reference-blue)] py-[18px] pr-6 pl-14 font-display text-[15px] leading-[1.55] font-medium text-white shadow-[0_14px_32px_rgba(12,40,84,0.22)]">
            <span className="absolute top-2.5 left-[18px] font-display text-[42px] leading-none font-bold text-[color:var(--cinopse-accent)]">
              &ldquo;
            </span>
            <span
              data-about-quote-shine
              className="absolute top-0 bottom-0 -left-20 w-[60px] animate-[quoteShine_3.8s_ease-in-out_infinite] bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.14),transparent)]"
            />
            {quote.text}{" "}
            <b className="text-[color:var(--cinopse-accent)]">{quote.emphasis}</b>
            <span className="mt-2 block font-sans text-[11px] leading-[1.6] font-light text-white/65">
              {quote.subtext}
            </span>
          </div>
        </div>

        <div data-reveal-group className="mt-11 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillarIconMap[pillar.icon]

            return (
              <article
                key={pillar.title}
                data-reveal
                className="group relative overflow-hidden rounded-[14px] bg-white px-5 py-[22px] shadow-[0_6px_20px_rgba(12,40,84,0.07)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] after:absolute after:inset-x-0 after:top-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-[image:linear-gradient(90deg,var(--cinopse-accent),var(--cinopse-accent-hi))] after:transition-transform after:duration-500 after:ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(12,40,84,0.14)] hover:after:scale-x-100"
              >
                <span className="mb-3.5 grid size-[38px] place-items-center rounded-[10px] bg-[rgba(27,75,150,0.09)] text-[color:var(--cinopse-primary)] transition-[transform,background,color] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] group-hover:animate-[wiggle_0.5s_cubic-bezier(.22,.9,.18,1)] group-hover:bg-[color:var(--cinopse-accent)] group-hover:text-white">
                  <Icon className="size-[17px]" aria-hidden="true" />
                </span>
                <h3 className="font-display m-0 mb-1.5 text-[15px] leading-5 font-semibold text-[color:var(--cinopse-primary)]">
                  {pillar.title}
                </h3>
                <p className="m-0 text-[11.5px] leading-[1.65] font-light text-[color:var(--cinopse-muted)]">
                  {pillar.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
