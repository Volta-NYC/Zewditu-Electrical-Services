import Reveal from "./reveal"
import { Container, Label } from "./ui"
import type { ReactNode } from "react"

/**
 * Interior page opener. Deliberately lighter and flatter than the homepage
 * hero so routes feel related without repeating the same moment.
 */
export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
  aside,
}: {
  index: string
  eyebrow: string
  title: string
  lede: string
  aside?: ReactNode
}) {
  return (
    <section className="border-b border-paper-line bg-paper-pure">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <Reveal motion="rise">
              <div className="flex items-center gap-4">
                <span className="font-mono text-[0.72rem] tabular-nums text-copper">
                  {index}
                </span>
                <span className="h-px w-10 bg-copper" aria-hidden="true" />
                <Label>{eyebrow}</Label>
              </div>
              <h1 className="mt-5 max-w-3xl font-display text-[2.4rem] font-extrabold leading-[0.98] tracking-tightest sm:text-[3.2rem] lg:text-[3.7rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-slate-muted">
                {lede}
              </p>
            </Reveal>
          </div>
          {aside && (
            <div className="lg:col-span-3 lg:col-start-10 lg:self-end">
              <Reveal motion="rise" delay={120}>
                {aside}
              </Reveal>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
