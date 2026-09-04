import { FlaskConical, Network, TrendingUp } from "lucide-react"

const iconMap = {
  connecting: Network,
  integrating: FlaskConical,
  improving: TrendingUp,
} as const

export type PhilosophyPillar = {
  icon: keyof typeof iconMap
  title: string
  description: string
}

export type CorePhilosophySectionProps = {
  eyebrow: string
  title: string
  description: string
  pillars: PhilosophyPillar[]
}

export function CorePhilosophySection({
  eyebrow,
  title,
  description,
  pillars,
}: CorePhilosophySectionProps) {
  return (
    <section
      id="philosophy"
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

        <div data-reveal-group className="relative z-10 mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <article
                key={pillar.title}
                data-reveal
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-8 text-center backdrop-blur-md transition-[transform,background,border-color] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-1.5 hover:border-[color:var(--cinopse-accent)]/50 hover:bg-white/[0.13]"
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full border border-[color:var(--cinopse-accent)]/45 bg-[color:var(--cinopse-accent)]/14 text-[color:var(--cinopse-accent)]">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] leading-snug font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-6 font-light text-white/65">
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
