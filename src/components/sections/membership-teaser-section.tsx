import { SectionHeading } from "@/components/shared/section-heading"
// TODO: re-enable when membership enrolment is ready to go live.
// import { MembershipJoinModal } from "@/components/sections/membership-join-modal"

export type MembershipTeaserCategory = {
  title: string
  description: string
}

export type MembershipTeaserSectionProps = {
  eyebrow: string
  title: string
  description: string
  categories: MembershipTeaserCategory[]
}

export function MembershipTeaserSection({
  eyebrow,
  title,
  description,
  categories,
}: MembershipTeaserSectionProps) {
  return (
    <section id="membership" className="bg-[color:var(--cinopse-surface)] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1160px] px-7">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <p
          data-reveal
          className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.9] font-light text-[color:var(--cinopse-text-secondary)]"
        >
          {description}
        </p>

        <div
          data-reveal-group
          className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4"
        >
          {categories.map((category) => (
            <article
              key={category.title}
              data-reveal
              className="rounded-[14px] border border-[color:var(--cinopse-border)] bg-white px-4 py-5 text-center shadow-[0_6px_20px_rgba(12,40,84,0.06)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(12,40,84,0.12)]"
            >
              <h3 className="font-display text-[13.5px] leading-tight font-semibold text-[color:var(--cinopse-primary)]">
                {category.title}
              </h3>
              <p className="mt-1.5 text-[11px] leading-[1.6] font-light text-[color:var(--cinopse-muted)]">
                {category.description}
              </p>
            </article>
          ))}
        </div>

        {/* TODO: re-enable when membership enrolment is ready to go live.
        <div data-reveal className="mt-10 flex justify-center">
          <MembershipJoinModal triggerLabel="Join Membership" />
        </div>
        */}
      </div>
    </section>
  )
}
