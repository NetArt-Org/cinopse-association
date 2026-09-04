import { Compass, Target } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"

export type VisionMissionSectionProps = {
  eyebrow: string
  title: string
  vision: string
  mission: string
}

export function VisionMissionSection({
  eyebrow,
  title,
  vision,
  mission,
}: VisionMissionSectionProps) {
  const cards = [
    { icon: Target, label: "Vision", text: vision },
    { icon: Compass, label: "Mission", text: mission },
  ]

  return (
    <section id="vision-mission" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div data-reveal-group className="mt-12 grid gap-6 md:grid-cols-2">
          {cards.map(({ icon: Icon, label, text }) => (
            <article
              key={label}
              data-reveal
              className="premium-card p-8 md:p-10"
            >
              <span className="grid size-11 place-items-center rounded-[12px] bg-[rgba(27,75,150,0.09)] text-[color:var(--cinopse-primary)]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-display mt-5 mb-3 text-[19px] leading-tight font-semibold text-[color:var(--cinopse-primary)]">
                {label}
              </h3>
              <p className="m-0 text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
