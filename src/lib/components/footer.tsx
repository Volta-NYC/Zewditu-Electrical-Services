import Link from "next/link"
import { Mark } from "./mark"
import { Container, Label } from "./ui"
import {
  business,
  addressLine,
  mapsUrl,
  telHref,
  mailHref,
  navLinks,
  registrations,
  novus,
} from "@/lib/site"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="h-px w-full bg-copper" aria-hidden="true" />
      <Container className="py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Mark size={38} />
              <div className="leading-none">
                <div className="font-display text-xl font-bold tracking-tightest">
                  ZEWDITU
                </div>
                <div className="font-mono text-[0.6rem] uppercase tracking-label text-copper-light">
                  Electrical Services
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] text-slate-dim">
              {business.motto}. A woman owned and minority owned electrical
              contractor serving {business.address.city} and the Mohawk Valley
              since {business.founded}.
            </p>
          </div>

          <div className="lg:col-span-3">
            <Label tone="dim">Pages</Label>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-[0.95rem] text-paper transition-colors hover:text-copper-light"
                >
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-paper transition-colors hover:text-copper-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <Label tone="dim">Shop</Label>
            <address className="mt-4 not-italic text-[0.95rem] text-slate-dim">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-paper transition-colors hover:text-copper-light"
              >
                {business.address.street}
                <br />
                {business.address.city}, {business.address.state}{" "}
                {business.address.zip}
              </a>
              {telHref && (
                <>
                  <br />
                  <a
                    href={telHref}
                    className="mt-2 inline-block text-paper transition-colors hover:text-copper-light"
                  >
                    {business.phone}
                  </a>
                </>
              )}
              {mailHref && (
                <>
                  <br />
                  <a
                    href={mailHref}
                    className="text-paper transition-colors hover:text-copper-light"
                  >
                    {business.email}
                  </a>
                </>
              )}
            </address>
            <dl className="mt-5 space-y-1">
              {business.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 text-[0.85rem]">
                  <dt className="text-slate-dim">{h.days}</dt>
                  <dd className="font-mono text-paper">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 border-t border-ink-line pt-6">
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {registrations.map((r) => (
              <li key={r.label} className="font-mono text-[0.7rem] text-slate-dim">
                <span className="uppercase tracking-label">{r.label}</span>{" "}
                <span className="text-paper">{r.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[0.82rem] text-slate-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.legalName}. All rights reserved.
          </p>
          <a
            href={novus.href}
            target="_blank"
            rel="noreferrer"
            className="text-copper-light underline-offset-4 transition-colors hover:text-amber hover:underline"
          >
            {novus.label}
          </a>
        </div>
      </Container>
    </footer>
  )
}
