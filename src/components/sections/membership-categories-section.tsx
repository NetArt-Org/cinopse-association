import {
  Award,
  BookOpen,
  CalendarCheck,
  GraduationCap,
  Globe2,
  Sparkles,
  Star,
  Users,
  type LucideIcon,
} from "lucide-react"

const iconMap = {
  life: Award,
  annual: CalendarCheck,
  young: Sparkles,
  postgraduate: GraduationCap,
  student: BookOpen,
  associate: Users,
  international: Globe2,
  honorary: Star,
} satisfies Record<string, LucideIcon>

export type MembershipCategory = {
  icon: keyof typeof iconMap
  title: string
  description: string
}

export type MembershipCategoriesSectionProps = {
  eyebrow: string
  title: string
  description: string
  categories: MembershipCategory[]
}

export function MembershipCategoriesSection({
  eyebrow,
  title,
  description,
  categories,
}: MembershipCategoriesSectionProps) {
  return (
    <section className="bg-[color:var(--cinopse-surface)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px] px-7">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center text-[color:var(--cinopse-secondary)]">
            <span className="gold-rule" />
            {eyebrow}
          </span>
          <h2 className="font-display mt-4 text-[clamp(24px,3.4vw,40px)] font-semibold tracking-[-0.01em] text-[color:var(--cinopse-primary)]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)]">
            {description}
          </p>
        </div>

        <div data-reveal-group className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <article
                key={category.title}
                data-reveal
                className="premium-card p-6"
              >
                <span className="grid size-10 place-items-center rounded-[10px] bg-[rgba(27,75,150,0.09)] text-[color:var(--cinopse-primary)]">
                  <Icon className="size-[18px]" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 mb-1.5 text-[15px] leading-tight font-semibold text-[color:var(--cinopse-primary)]">
                  {category.title}
                </h3>
                <p className="m-0 text-[12.5px] leading-[1.65] font-light text-[color:var(--cinopse-muted)]">
                  {category.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
