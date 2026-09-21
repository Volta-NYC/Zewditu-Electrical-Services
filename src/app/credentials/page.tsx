import type { Metadata } from "next"
import { PageHeader } from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { Container, Label, Button } from "@/lib/components/ui"
import {
  business,
  certifications,
  registrations,
  addressLine,
  mailHref,
  telHref,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "M/WBE, WOSB, Section 3, and small disadvantaged business certifications, plus UEI, CAGE, and NAICS details for Zewditu Electrical Services, LLC bid packages.",
  alternates: { canonical: "/credentials" },
}

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        index="3"
        eyebrow="Credentials"
        title="Everything you need to put us in a bid package."
        lede="Certifications, registration numbers, and firm details in one place, so an estimator does not have to email us for them at 4:00 PM on a deadline."
        aside={
          <div className="border-t-2 border-copper pt-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-slate-muted">
              Primary NAICS
            </p>
            <p className="mt-1 font-mono text-2xl font-medium">238210</p>
            <p className="mt-2 text-[0.82rem] leading-snug text-slate-muted">
              Electrical contractors and other wiring installation contractors
            </p>
          </div>
        }
      />

      {/* Registration table. The most utilitarian composition on the site,
          on purpose: this page is a reference document. */}
      <section aria-labelledby="registrations-heading" className="bg-ink text-paper">
        <Container className="py-16 lg:py-20">
          <Reveal motion="rise">
            <Label tone="dim">Firm identifiers</Label>
            <h2
              id="registrations-heading"
              className="mt-4 font-display text-[1.9rem] font-extrabold tracking-tightest text-paper sm:text-[2.3rem]"
            >
              Registration details
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-ink-line">
            {[
              { k: "Legal name", v: business.legalName },
              { k: "Address", v: addressLine },
              { k: "State of formation", v: "New York" },
              { k: "Year established", v: String(business.founded) },
              ...registrations.map((r) => ({ k: r.label, v: r.value })),
            ].map((row, i) => (
              <Reveal key={row.k} motion="lift" delay={i * 40}>
                <div className="grid grid-cols-1 gap-1 border-b border-ink-line py-4 sm:grid-cols-12 sm:gap-6 sm:py-5">
                  <div className="font-mono text-[0.7rem] uppercase tracking-label text-slate-dim sm:col-span-4">
                    {row.k}
                  </div>
                  <div className="font-mono text-[0.95rem] text-paper sm:col-span-8">
                    {row.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal motion="rise" delay={200}>
            <p className="mt-8 max-w-2xl text-[0.9rem] leading-relaxed text-slate-dim">
              Need a W-9, certificate of insurance, or a signed certification
              letter for your submission? Ask and we will send it the same day.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Certification detail. Editorial rows with real explanation of what
          each status does for the hiring contractor. */}
      <section aria-labelledby="certs-heading">
        <Container className="py-20 lg:py-24">
          <Reveal motion="rise">
            <Label>Certifications</Label>
            <h2
              id="certs-heading"
              className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.04] tracking-tightest sm:text-[2.5rem]"
            >
              What each status actually does for your project.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-px bg-paper-line sm:grid-cols-2">
            {certifications.map((c, i) => (
              <Reveal key={c.abbr} motion="lift" delay={i * 70}>
                <div className="h-full bg-paper p-7 lg:p-9">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-extrabold tracking-tightest text-copper-deep">
                      {c.abbr}
                    </span>
                    <span className="font-mono text-[0.68rem] tabular-nums text-slate-muted">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-[1.2rem] font-bold leading-snug tracking-tight">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-muted">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 3 explainer. Gives the page a distinct closing moment. */}
      <section aria-labelledby="section3-heading" className="bg-paper-pure">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal motion="rise">
                <Label>Section 3</Label>
                <h2
                  id="section3-heading"
                  className="mt-4 font-display text-[2rem] font-extrabold leading-[1.04] tracking-tightest sm:text-[2.4rem]"
                >
                  Hours that count toward your benchmarks.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal motion="rise" delay={100}>
                <p className="text-[1.02rem] leading-relaxed">
                  HUD Section 3 asks that federally assisted housing work create
                  opportunity in the communities it serves. Agencies and prime
                  contractors have to show labor hours that meet the benchmark,
                  and those hours have to come from qualifying firms and workers.
                </p>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-slate-muted">
                  As a Section 3 business concern based in{" "}
                  {business.address.county}, our electrical hours on your project
                  count toward that requirement. That is worth real money on a
                  compliance report, and it is the reason a number of our
                  contracts start with a phone call from an estimator who is
                  short on qualifying hours.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Request our documents</Button>
                  {mailHref && (
                    <Button href={mailHref} variant="outline" external>
                      Email the office
                    </Button>
                  )}
                  {!mailHref && telHref && (
                    <Button href={telHref} variant="outline">
                      Call {business.phone}
                    </Button>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
