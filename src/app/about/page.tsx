import type { Metadata } from "next"
import { PageHeader } from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { Container, Label, Button, ConductorRule } from "@/lib/components/ui"
import { Mark } from "@/lib/components/mark"
import { business, certifications, addressLine } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Zewditu Electrical Services is a woman owned, minority owned electrical contractor founded in 2021 in Amsterdam, New York, serving homes and public projects across the Mohawk Valley.",
  alternates: { canonical: "/about" },
}

/*
 * TODO(client): The founder's own story is the strongest thing this page could
 * carry, and we do not have it. Ask C.J. Vielle for a few paragraphs on how the
 * company started and why, plus a portrait. Drop them into the section marked
 * "Founder" below, replacing the placeholder framing.
 */

const values = [
  {
    title: "Diagnose before replacing",
    body: "Swapping parts until a symptom disappears is not a repair. We find the fault, then fix the cause of it.",
  },
  {
    title: "Leave it documented",
    body: "A labeled directory and a written record of what changed. The next electrician in that panel should not have to guess.",
  },
  {
    title: "Say what it costs",
    body: "A scope in writing, before the work starts. If conditions change behind a wall, you hear about it that day.",
  },
  {
    title: "Build the bench",
    body: "Section 3 is not just a box we check. Hiring and training locally is how a small shop in Amsterdam stays a shop in Amsterdam.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="2"
        eyebrow="About"
        title="A small shop in Amsterdam, wired for bigger work."
        lede="Zewditu Electrical Services was formed in 2021 and works out of Amsterdam, New York. We are certified as a minority and woman owned business, which lets us take on public work alongside the residential jobs that keep the lights on."
        aside={
          <div className="border-t-2 border-copper pt-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-slate-muted">
              Established
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold tracking-tightest">
              {business.founded}
            </p>
            <p className="mt-3 text-[0.85rem] leading-snug text-slate-muted">
              {business.address.county}, New York
            </p>
          </div>
        }
      />

      {/* Pull quote. The brand line given real scale, once, on its own. */}
      <section className="bg-ink text-paper">
        <Container className="py-20 lg:py-28">
          <Reveal motion="rise">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <Mark size={52} />
              </div>
              <blockquote className="lg:col-span-9">
                <p className="font-display text-[2rem] font-extrabold leading-[1.08] tracking-tightest text-paper sm:text-[2.8rem] lg:text-[3.2rem]">
                  Wired by excellence,
                  <span className="text-copper-light"> powered by knowledge.</span>
                </p>
                <footer className="mt-6 font-mono text-[0.72rem] uppercase tracking-label text-slate-dim">
                  {business.legalName}
                </footer>
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Founder. Two column editorial, not a card. */}
      <section aria-labelledby="founder-heading">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Reveal motion="rise">
                <Label>Founder</Label>
                <h2
                  id="founder-heading"
                  className="mt-4 font-display text-[2rem] font-extrabold leading-[1.04] tracking-tightest sm:text-[2.5rem]"
                >
                  Owner operated, and on site.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal motion="rise" delay={100}>
                <p className="text-[1.05rem] leading-relaxed">
                  {business.owner} founded Zewditu Electrical Services in{" "}
                  {business.founded} and runs it from {business.address.city}.
                  The team brings more than 21 years of combined electrical
                  experience to residential service work and to subcontract work
                  on publicly funded projects.
                </p>
                <p className="mt-5 text-[1rem] leading-relaxed text-slate-muted">
                  Being owner operated shapes how the work goes. The person who
                  quotes the job is accountable for it, so scopes stay honest and
                  problems get raised early rather than absorbed quietly into a
                  change order.
                </p>
                <p className="mt-5 text-[1rem] leading-relaxed text-slate-muted">
                  The company carries minority owned, woman owned, and Section 3
                  status. On public work those certifications matter to the
                  contractors who hire us. On a house in Amsterdam they matter
                  less than whether the panel is labeled and the circuit holds.
                  We try to be worth hiring on both counts.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values as a numbered directory, echoing the homepage list rhythm. */}
      <section aria-labelledby="values-heading" className="bg-paper-pure">
        <Container className="py-20 lg:py-24">
          <Reveal motion="rise">
            <Label>How we work</Label>
            <h2
              id="values-heading"
              className="mt-4 max-w-2xl font-display text-[2rem] font-extrabold leading-[1.04] tracking-tightest sm:text-[2.5rem]"
            >
              Four things we do not cut corners on.
            </h2>
          </Reveal>
          <Reveal motion="wipe" className="mt-8">
            <ConductorRule />
          </Reveal>
          <dl className="grid sm:grid-cols-2 sm:gap-x-12">
            {values.map((v, i) => (
              <Reveal key={v.title} motion="lift" delay={i * 60}>
                <div className="border-b border-paper-line py-7">
                  <dt className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.72rem] tabular-nums text-copper">
                      {i + 1}
                    </span>
                    <span className="font-display text-[1.3rem] font-bold tracking-tight">
                      {v.title}
                    </span>
                  </dt>
                  <dd className="mt-2.5 pl-9 text-[0.95rem] leading-relaxed text-slate-muted">
                    {v.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Facts strip */}
      <section aria-labelledby="facts-heading">
        <Container className="py-16 lg:py-20">
          <h2 id="facts-heading" className="sr-only">
            Company facts
          </h2>
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Legal name", v: business.legalName },
              { k: "Shop", v: addressLine },
              { k: "Established", v: String(business.founded) },
              {
                k: "Certifications",
                v: certifications.map((c) => c.abbr).join(", "),
              },
            ].map((item, i) => (
              <Reveal key={item.k} motion="lift" delay={i * 60}>
                <div className="border-t border-ink pt-4">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-label text-slate-muted">
                    {item.k}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-snug">{item.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal motion="rise" delay={200} className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a quote</Button>
              <Button href="/credentials" variant="outline">
                See our credentials
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
