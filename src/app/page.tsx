import Link from "next/link"
import { Schematic } from "@/lib/components/schematic"
import Reveal from "@/lib/components/reveal"
import { ServiceIcon } from "@/lib/components/service-icon"
import { Container, Label, Button, ConductorRule } from "@/lib/components/ui"
import {
  business,
  residentialServices,
  commercialServices,
  certifications,
  telHref,
} from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* -------------------------------------------------------------------
          Hero. Type led over a single line schematic, with the spec stack
          sitting low right so the composition is weighted diagonally rather
          than centred.
          ------------------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <Schematic className="absolute inset-0 h-full w-full opacity-70" />
        {/*
          Readability scrim. The schematic runs the full bleed, so the reading
          column needs protection. Strong at the left where the copy sits,
          clearing by the right edge where only the spec stack overlaps.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,#14161A_0%,rgba(20,22,26,0.94)_55%,rgba(20,22,26,0.88)_100%)] lg:bg-[linear-gradient(95deg,#14161A_0%,#14161A_26%,rgba(20,22,26,0.86)_48%,rgba(20,22,26,0.4)_72%,rgba(20,22,26,0.05)_100%)]"
        />

        <Container className="relative pb-16 pt-16 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <Reveal motion="rise">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.7rem] uppercase tracking-label text-copper-light">
                  <span>{business.address.city}, New York</span>
                  <span aria-hidden="true" className="text-ink-line">
                    /
                  </span>
                  <span>M/WBE certified</span>
                  <span aria-hidden="true" className="text-ink-line">
                    /
                  </span>
                  <span>Section 3 ready</span>
                </p>
              </Reveal>

              <Reveal motion="rise" delay={80}>
                <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tightest sm:text-[3.6rem] lg:text-[4.6rem]">
                  Wired by excellence.
                  <span className="block text-copper-light">
                    Powered by knowledge.
                  </span>
                </h1>
              </Reveal>

              <Reveal motion="rise" delay={140}>
                <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-slate-dim sm:text-[1.15rem]">
                  Zewditu Electrical Services is a woman owned and minority owned
                  electrical contractor in Amsterdam. We handle panel upgrades,
                  rewiring, and standby power for homes, and certified
                  subcontract work for builders and housing authorities across
                  the Mohawk Valley.
                </p>
              </Reveal>

              <Reveal motion="rise" delay={200}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="/contact">Request a quote</Button>
                  {telHref ? (
                    <Button href={telHref} variant="ghost">
                      Call {business.phone}
                    </Button>
                  ) : (
                    <Button href="/services" variant="ghost">
                      See what we do
                    </Button>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Spec stack. Mono detail that reads like a panel label. */}
            <Reveal
              motion="rise"
              delay={260}
              className="lg:col-span-4 lg:self-end lg:pb-2"
            >
              <dl className="border-t border-ink-line pt-5 sm:max-w-sm lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                <div className="flex items-baseline justify-between gap-4 py-2">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-label text-slate-dim">
                    Established
                  </dt>
                  <dd className="font-display text-xl font-bold">
                    {business.founded}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-ink-line py-2">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-label text-slate-dim">
                    Combined experience
                  </dt>
                  <dd className="font-display text-xl font-bold">21+ years</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-ink-line py-2">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-label text-slate-dim">
                    Based in
                  </dt>
                  <dd className="font-display text-xl font-bold">
                    {business.address.county}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------------
          Credential strip. The differentiator, stated immediately.
          ------------------------------------------------------------------- */}
      <section aria-labelledby="creds-heading" className="border-b border-paper-line">
        <Container className="py-10 lg:py-12">
          <h2 id="creds-heading" className="sr-only">
            Certifications
          </h2>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c, i) => (
              <Reveal key={c.abbr} motion="lift" delay={i * 60}>
                <div className="border-t-2 border-copper pt-4">
                  <div className="font-display text-lg font-bold tracking-tight">
                    {c.abbr}
                  </div>
                  <p className="mt-1 text-[0.85rem] leading-snug text-slate-muted">
                    {c.name}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal motion="rise" delay={240} className="mt-8">
            <Link
              href="/credentials"
              className="font-mono text-[0.75rem] uppercase tracking-label text-copper-deep underline-offset-4 hover:underline"
            >
              View registrations and bid details &rarr;
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------------------------------------------
          Services. Laid out as a circuit directory: numbered rows, thin
          rules, no cards.
          ------------------------------------------------------------------- */}
      <section aria-labelledby="work-heading">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--nav-height)+3rem)]">
                <Reveal motion="rise">
                  <Label>What we do</Label>
                  <h2
                    id="work-heading"
                    className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.02] tracking-tightest sm:text-[2.6rem]"
                  >
                    Residential work, done to the same standard as our public
                    contracts.
                  </h2>
                  <p className="mt-5 max-w-sm text-[1rem] text-slate-muted">
                    Every job gets a labeled panel, tested devices, and work that
                    is ready for the inspector when we leave.
                  </p>
                  <div className="mt-7">
                    <Button href="/services" variant="outline">
                      All services
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <Reveal motion="wipe">
                <ConductorRule />
              </Reveal>
              <ul>
                {residentialServices.map((service, i) => (
                  <Reveal key={service.slug} as="li" motion="lift" delay={i * 50}>
                    <Link
                      href={`/services#${service.slug}`}
                      className="group flex items-start gap-5 border-b border-paper-line py-6 transition-colors duration-200 hover:bg-paper-pure sm:gap-7 sm:px-2"
                    >
                      <span className="mt-1 font-mono text-[0.72rem] tabular-nums text-slate-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ServiceIcon
                        name={service.icon}
                        className="mt-0.5 hidden shrink-0 text-copper sm:block"
                      />
                      <span className="flex-1">
                        <span className="block font-display text-[1.3rem] font-bold tracking-tight transition-colors duration-200 group-hover:text-copper-deep sm:text-[1.45rem]">
                          {service.title}
                        </span>
                        <span className="mt-1.5 block text-[0.95rem] leading-relaxed text-slate-muted">
                          {service.summary}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1.5 font-mono text-sm text-copper opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------------
          Commercial. A dark counterweight, composed as a split rather than
          another row of cards.
          ------------------------------------------------------------------- */}
      <section aria-labelledby="commercial-heading" className="bg-ink text-paper">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal motion="rise">
                <Label tone="dim">For contractors and agencies</Label>
                <h2
                  id="commercial-heading"
                  className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.02] tracking-tightest text-paper sm:text-[2.6rem]"
                >
                  A certified electrical sub that clears your participation
                  goals.
                </h2>
                <p className="mt-5 max-w-md text-[1rem] text-slate-dim">
                  Our M/WBE and Section 3 status counts toward participation and
                  labor hour benchmarks on publicly funded work. We come to the
                  table with the registrations already in place, so adding us to
                  a bid package is paperwork you have mostly already done.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/credentials">Credentials and bid info</Button>
                  <Button href="/contact" variant="ghost">
                    Start a conversation
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal motion="wipe">
                <ConductorRule />
              </Reveal>
              <dl>
                {commercialServices.map((service, i) => (
                  <Reveal key={service.slug} motion="lift" delay={i * 60}>
                    <div className="flex gap-5 border-b border-ink-line py-6">
                      <ServiceIcon
                        name={service.icon}
                        className="mt-0.5 hidden shrink-0 text-copper-light sm:block"
                      />
                      <div>
                        <dt className="font-display text-[1.2rem] font-bold tracking-tight text-paper">
                          {service.title}
                        </dt>
                        <dd className="mt-1.5 text-[0.93rem] leading-relaxed text-slate-dim">
                          {service.summary}
                        </dd>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------------------------------
          Closing call to action.
          ------------------------------------------------------------------- */}
      <section className="bg-paper-pure">
        <Container className="py-20 lg:py-24">
          <Reveal motion="rise">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Label>Next step</Label>
                <h2 className="mt-4 font-display text-[2.1rem] font-extrabold leading-[1.02] tracking-tightest sm:text-[2.8rem]">
                  Tell us what the building is doing, and we will tell you what
                  it needs.
                </h2>
                <p className="mt-5 max-w-lg text-[1rem] text-slate-muted">
                  Send a few details and we will come back with a clear scope and
                  a real number. We serve {business.serviceArea}
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="flex flex-col gap-3">
                  <Button href="/contact">Request a quote</Button>
                  {telHref && (
                    <Button href={telHref} variant="outline">
                      Call {business.phone}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
