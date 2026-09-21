import type { Metadata } from "next"
import { PageHeader } from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { ServiceIcon } from "@/lib/components/service-icon"
import { Container, Label, Button, ConductorRule } from "@/lib/components/ui"
import {
  residentialServices,
  commercialServices,
  business,
  telHref,
  type Service,
} from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Panel upgrades, rewiring, generators, EV chargers, unit turnovers, and code corrections. Residential and commercial electrical services in Amsterdam, NY and the Mohawk Valley.",
  alternates: { canonical: "/services" },
}

const process = [
  {
    step: "1",
    title: "Walk the job",
    body: "We look at the actual service, panel, and conditions before quoting anything. Guesses turn into change orders.",
  },
  {
    step: "2",
    title: "Scope in writing",
    body: "You get a written scope that says what is included, what is not, and what happens if we open a wall and find a surprise.",
  },
  {
    step: "3",
    title: "Do the work",
    body: "Clean runs, labeled circuits, protected finishes, and a site left in a state you would not mind walking into.",
  },
  {
    step: "4",
    title: "Test and hand over",
    body: "Everything gets tested and documented, and the panel directory is filled in so the next person is not guessing.",
  },
]

function ServiceEntry({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal motion="lift" delay={(index % 3) * 60}>
      <article
        id={service.slug}
        className="grid scroll-mt-32 gap-5 border-b border-paper-line py-10 sm:grid-cols-12 sm:gap-8"
      >
        <div className="flex items-center gap-4 sm:col-span-3 sm:block">
          <ServiceIcon name={service.icon} className="text-copper" />
          <span className="mt-3 block font-mono text-[0.7rem] uppercase tracking-label text-slate-muted">
            {index + 1}
          </span>
        </div>
        <div className="sm:col-span-9">
          <h3 className="font-display text-[1.5rem] font-bold tracking-tight sm:text-[1.7rem]">
            {service.title}
          </h3>
          <p className="mt-2.5 max-w-2xl text-[1rem] font-medium leading-relaxed">
            {service.summary}
          </p>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-slate-muted">
            {service.detail}
          </p>
        </div>
      </article>
    </Reveal>
  )
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="1"
        eyebrow="Services"
        title="What we wire, repair, and bring up to code."
        lede="Two sides of one shop. Residential work across the Mohawk Valley, and certified subcontract work for builders, property managers, and housing authorities."
        aside={
          <div className="border-t-2 border-copper pt-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-label text-slate-muted">
              Service area
            </p>
            <p className="mt-2 text-[0.92rem] leading-snug">
              {business.serviceArea}
            </p>
          </div>
        }
      />

      {/* Residential */}
      <section aria-labelledby="residential-heading">
        <Container className="py-16 lg:py-20">
          <Reveal motion="rise">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2
                id="residential-heading"
                className="font-display text-[1.9rem] font-extrabold tracking-tightest sm:text-[2.3rem]"
              >
                For your home
              </h2>
              <Label>{residentialServices.length} services</Label>
            </div>
          </Reveal>
          <Reveal motion="wipe" className="mt-5">
            <ConductorRule />
          </Reveal>
          <div>
            {residentialServices.map((service, i) => (
              <ServiceEntry key={service.slug} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Process. A different composition: horizontal numbered band. */}
      <section aria-labelledby="process-heading" className="bg-ink text-paper">
        <Container className="py-16 lg:py-20">
          <Reveal motion="rise">
            <Label tone="dim">How a job runs</Label>
            <h2
              id="process-heading"
              className="mt-4 max-w-2xl font-display text-[1.9rem] font-extrabold leading-[1.05] tracking-tightest text-paper sm:text-[2.3rem]"
            >
              Four steps, and no surprises in the middle of them.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px bg-ink-line sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} motion="lift" delay={i * 70}>
                <li className="h-full bg-ink p-6 lg:p-7">
                  <span className="font-mono text-[0.72rem] tabular-nums text-copper-light">
                    Step {p.step}
                  </span>
                  <h3 className="mt-3 font-display text-[1.25rem] font-bold tracking-tight text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-slate-dim">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Commercial */}
      <section aria-labelledby="commercial-services-heading">
        <Container className="py-16 lg:py-20">
          <Reveal motion="rise">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2
                id="commercial-services-heading"
                className="font-display text-[1.9rem] font-extrabold tracking-tightest sm:text-[2.3rem]"
              >
                For your project
              </h2>
              <Label>{commercialServices.length} services</Label>
            </div>
            <p className="mt-4 max-w-2xl text-[1rem] text-slate-muted">
              Work for general contractors, property managers, municipalities,
              and housing authorities, where documentation matters as much as
              the wiring.
            </p>
          </Reveal>
          <Reveal motion="wipe" className="mt-5">
            <ConductorRule />
          </Reveal>
          <div>
            {commercialServices.map((service, i) => (
              <ServiceEntry
                key={service.slug}
                service={service}
                index={residentialServices.length + i}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-pure">
        <Container className="py-16 lg:py-20">
          <Reveal motion="rise">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-[1.9rem] font-extrabold leading-[1.05] tracking-tightest sm:text-[2.4rem]">
                  Not sure which of these you need?
                </h2>
                <p className="mt-4 max-w-lg text-[1rem] text-slate-muted">
                  Describe the problem in plain words. We have heard it before,
                  and we will tell you honestly whether it is a repair or a
                  bigger job.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
                <Button href="/contact">Request a quote</Button>
                {telHref && (
                  <Button href={telHref} variant="outline">
                    Call {business.phone}
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
