import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import ContactForm from "@/lib/components/contact-form"
import { Container, Label } from "@/lib/components/ui"
import {
  business,
  mapsUrl,
  telHref,
  mailHref,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from Zewditu Electrical Services in Amsterdam, NY. Serving Montgomery, Fulton, Schenectady, and Saratoga counties.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Contact"
        title="Tell us what needs power."
        lede="Send the details and we will come back with a clear scope and a real number. For anything urgent, calling is faster than typing."
        aside={
          <div className="border-t-2 border-copper pt-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-slate-muted">
              Typical reply
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold tracking-tightest">
              1 business day
            </p>
            <p className="mt-3 text-[0.85rem] leading-snug text-slate-muted">
              Requests are read by the people who do the work, not a call
              center.
            </p>
          </div>
        }
      />

      <section aria-labelledby="form-heading">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Form takes the wider column. */}
            <div className="lg:col-span-7">
              <Reveal motion="rise">
                <h2
                  id="form-heading"
                  className="font-display text-[1.7rem] font-extrabold tracking-tightest sm:text-[2rem]"
                >
                  Request a quote
                </h2>
                <p className="mt-3 max-w-xl text-[0.98rem] text-slate-muted">
                  The more you can tell us about the building and the problem,
                  the more useful our first reply will be.
                </p>
              </Reveal>
              <Reveal motion="rise" delay={100} className="mt-9">
                <ContactForm />
              </Reveal>
            </div>

            {/* Details rail. */}
            <div className="lg:col-span-4 lg:col-start-9">
              <Reveal motion="rise" delay={80}>
                <div className="border-t-2 border-copper pt-6">
                  <Label>Shop</Label>
                  <address className="mt-3 not-italic text-[1rem] leading-relaxed">
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="underline-offset-4 transition-colors hover:text-copper-deep hover:underline"
                    >
                      {business.address.street}
                      <br />
                      {business.address.city}, {business.address.state}{" "}
                      {business.address.zip}
                    </a>
                  </address>
                  <p className="mt-2 text-[0.85rem] text-slate-muted">
                    {business.address.county}
                  </p>
                </div>
              </Reveal>

              {(telHref || mailHref) && (
                <Reveal motion="rise" delay={140}>
                  <div className="mt-8 border-t border-paper-line pt-6">
                    <Label>Direct</Label>
                    <ul className="mt-3 space-y-2 text-[1rem]">
                      {telHref && (
                        <li>
                          <a
                            href={telHref}
                            className="font-mono underline-offset-4 transition-colors hover:text-copper-deep hover:underline"
                          >
                            {business.phone}
                          </a>
                        </li>
                      )}
                      {mailHref && (
                        <li>
                          <a
                            href={mailHref}
                            className="break-all underline-offset-4 transition-colors hover:text-copper-deep hover:underline"
                          >
                            {business.email}
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </Reveal>
              )}

              <Reveal motion="rise" delay={200}>
                <div className="mt-8 border-t border-paper-line pt-6">
                  <Label>Hours</Label>
                  <dl className="mt-3 space-y-2">
                    {business.hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex items-baseline justify-between gap-4 text-[0.95rem]"
                      >
                        <dt className="text-slate-muted">{h.days}</dt>
                        <dd className="font-mono">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>

              <Reveal motion="rise" delay={260}>
                <div className="mt-8 border-t border-paper-line pt-6">
                  <Label>Service area</Label>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-muted">
                    {business.serviceArea}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing band, so the page does not end on a form edge. */}
      <section className="bg-ink text-paper">
        <Container className="py-14 lg:py-16">
          <Reveal motion="rise">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl font-display text-[1.5rem] font-bold leading-snug tracking-tight sm:text-[1.9rem]">
                Working on a publicly funded project and short on qualifying
                hours?
              </p>
              <Link
                href="/credentials"
                className="inline-flex min-h-[3rem] shrink-0 items-center justify-center border border-ink-line px-6 font-semibold text-paper transition-colors hover:border-copper-light hover:text-copper-light"
              >
                See our credentials
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
