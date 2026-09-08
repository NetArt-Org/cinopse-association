import Image from "next/image"
import Link from "next/link"

export type HeroSectionProps = {
  backgroundImage: {
    src: string
    alt: string
  }
  title: string
  ctaHref: string
}

export function HeroSection({
  backgroundImage,
  title,
  ctaHref,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative isolate h-[100svh] min-h-[540px] w-full overflow-hidden">
      <Link
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute inset-0 block"
        aria-label={`${title} — opens cinopse.in in a new tab`}
      >
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,38,.42)_0%,rgba(8,20,44,.22)_32%,rgba(6,16,38,.3)_62%,rgba(5,14,34,.72)_100%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
          <h1 className="font-display text-[clamp(36px,7.5vw,84px)] leading-[1.05] font-semibold tracking-[-0.02em]">
            {title}
          </h1>
        </div>
      </Link>
    </section>
  )
}
