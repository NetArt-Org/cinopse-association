"use client"

import { type FormEvent, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { ChevronDown, X } from "lucide-react"
import { toast } from "sonner"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"

import { Input } from "@/components/ui/input"

const CATEGORIES = [
  "Life Member",
  "Annual Member",
  "Young KCA Member",
  "Postgraduate Member",
  "Student Member",
  "Associate Member",
  "International Member",
  "Honorary Member",
]

const CONTACT_EMAIL = "info@cinopseassociation.in"
// The HTML `pattern` attribute is matched using the regex "v" (unicodeSets)
// mode, which is stricter than plain JS regex about unescaped punctuation
// inside character classes — "-", "/" and "&" all need escaping there or the
// browser throws "Invalid character in character class" and skips validation
// entirely, so these are quoted defensively even where a JS-only regex
// wouldn't require it.
const NAME_PATTERN = "^[A-Za-z][A-Za-z .'\\-]{1,58}$"
const EMAIL_PATTERN = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"
const SPECIALTY_PATTERN = "^[A-Za-z0-9 ,.\\/'\\&\\-]{2,60}$"

export function MembershipJoinModal({
  triggerLabel = "Join Membership",
}: {
  triggerLabel?: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [phone, setPhone] = useState<string | undefined>()
  const [phoneError, setPhoneError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError(true)
      toast.error("Enter a valid phone number.")
      return
    }
    setPhoneError(false)

    const form = new FormData(event.currentTarget)
    const name = String(form.get("name") ?? "")
    const email = String(form.get("email") ?? "")
    const category = String(form.get("category") ?? "")
    const specialty = String(form.get("specialty") ?? "")
    const message = String(form.get("message") ?? "")

    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Membership category: ${category}`,
      `Specialty / profession: ${specialty}`,
      message ? `Message: ${message}` : null,
    ].filter(Boolean)

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "KCA Membership Application"
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`

    window.location.href = mailto
    toast.success("Opening your email app to send your application to KCA.")
    setOpen(false)
    event.currentTarget.reset()
    setPhone(undefined)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2.5 rounded-full bg-[color:var(--cinopse-primary)] px-7 py-4 text-[12.5px] leading-none font-medium text-white transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(27,75,150,0.35)]"
      >
        {triggerLabel}
      </button>

      {mounted
        ? createPortal(
            <>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-[120] bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${
                  open ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                aria-label="Close join membership form"
                tabIndex={open ? 0 : -1}
              />

              <div
                className={`fixed inset-0 z-[125] flex items-center justify-center overflow-y-auto px-[5%] py-6 transition-[opacity,transform] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] sm:px-6 ${
                  open
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                }`}
                aria-hidden={!open}
              >
                <div className="relative max-h-[88vh] w-full max-w-[500px] overflow-y-auto rounded-[20px] bg-white px-4 py-6 shadow-[0_30px_70px_rgba(6,26,58,0.35)] sm:px-7 sm:py-7">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 grid size-9 place-items-center rounded-full text-[color:var(--cinopse-muted)] transition-colors hover:bg-[color:var(--cinopse-surface)] hover:text-[color:var(--cinopse-primary)]"
                    aria-label="Close"
                  >
                    <X className="size-[18px]" aria-hidden="true" />
                  </button>

                  <h3 className="font-display m-0 mb-1 pr-9 text-[18px] leading-tight font-semibold text-[color:var(--cinopse-primary)]">
                    Join Karnataka CINOPSE Association
                  </h3>
                  <p className="m-0 mb-5 text-[12.5px] leading-[1.5] font-light text-[color:var(--cinopse-text-secondary)]">
                    Share a few basic details and we&apos;ll follow up about
                    membership.
                  </p>

                  <form onSubmit={handleSubmit} className="grid gap-3">
                    <Input
                      id="member-name"
                      name="name"
                      required
                      autoComplete="name"
                      pattern={NAME_PATTERN}
                      placeholder="Full Name"
                      aria-label="Full Name"
                      title="Enter a valid name (letters only, at least 2 characters)"
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        id="member-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        pattern={EMAIL_PATTERN}
                        placeholder="Email"
                        aria-label="Email"
                        title="Enter a valid email address"
                      />
                      <PhoneInput
                        id="member-phone"
                        international
                        defaultCountry="IN"
                        placeholder="Phone"
                        aria-label="Phone"
                        value={phone}
                        onChange={(value) => {
                          setPhone(value)
                          if (phoneError) setPhoneError(false)
                        }}
                        className={`phone-input-control ${
                          phoneError ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-500/15" : ""
                        }`}
                        numberInputProps={{ className: "focus:outline-none" }}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <select
                          id="member-category"
                          name="category"
                          required
                          defaultValue=""
                          aria-label="Membership Category"
                          className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pr-9 pl-3 text-sm text-slate-950 outline-none transition-colors focus:border-blue-700 focus:ring-3 focus:ring-blue-700/15"
                        >
                          <option value="" disabled>
                            Category
                          </option>
                          {CATEGORIES.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-400"
                          aria-hidden="true"
                        />
                      </div>
                      <Input
                        id="member-specialty"
                        name="specialty"
                        placeholder="Specialty"
                        aria-label="Specialty"
                        pattern={SPECIALTY_PATTERN}
                        title="Letters, numbers and basic punctuation only"
                      />
                    </div>

                    <textarea
                      id="member-message"
                      name="message"
                      rows={2}
                      maxLength={500}
                      placeholder="Message (optional)"
                      aria-label="Message"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-700 focus:ring-3 focus:ring-blue-700/15"
                    />

                    <button
                      type="submit"
                      className="mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[color:var(--cinopse-accent)] text-[13px] font-medium text-[color:var(--cinopse-primary-deep)] transition-[transform,box-shadow,background] duration-300 ease-[cubic-bezier(.22,.9,.18,1)] hover:-translate-y-0.5 hover:bg-[color:var(--cinopse-accent-hi)] hover:shadow-[0_12px_26px_rgba(217,164,65,.35)]"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </>,
            document.body
          )
        : null}
    </>
  )
}
