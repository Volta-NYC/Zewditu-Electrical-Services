"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Wordmark } from "./mark"
import { navLinks, business, telHref } from "@/lib/site"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  // Move focus into the panel when it opens.
  useEffect(() => {
    if (open) panelRef.current?.querySelector<HTMLElement>("a, button")?.focus()
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-calm ${
        scrolled || open
          ? "border-b border-paper-line bg-paper/95 backdrop-blur-sm"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[var(--nav-height)] w-full max-w-container items-center justify-between gap-4 px-5 sm:px-8 lg:px-12"
      >
        <Link href="/" className="shrink-0" aria-label={`${business.name}, home`}>
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-2 text-[0.92rem] font-medium transition-colors duration-200 ${
                      active ? "text-copper-deep" : "text-ink hover:text-copper-deep"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-copper transition-transform duration-300 ease-calm ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {telHref ? (
            <a
              href={telHref}
              className="inline-flex min-h-[2.75rem] items-center bg-copper px-5 text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-copper-deep"
            >
              Call {business.phone}
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex min-h-[2.75rem] items-center bg-copper px-5 text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-copper-deep"
            >
              Request a quote
            </Link>
          )}
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 inline-flex h-12 w-12 items-center justify-center md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M5 5L19 19M19 5L5 19"
                stroke="#14161A"
                strokeWidth="2"
                strokeLinecap="square"
              />
            ) : (
              <g stroke="#14161A" strokeWidth="2" strokeLinecap="square">
                <path d="M3 7H21" />
                <path d="M3 12H21" />
                <path d="M3 17H21" />
              </g>
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-paper-line bg-paper md:hidden"
      >
        <ul className="mx-auto w-full max-w-container px-5 py-3 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-paper-line last:border-b-0">
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className="flex min-h-[3.25rem] items-center justify-between font-display text-lg font-bold tracking-tight text-ink"
              >
                {link.label}
                <span aria-hidden="true" className="font-mono text-xs text-copper-deep">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mx-auto w-full max-w-container px-5 pb-5 sm:px-8">
          {telHref ? (
            <a
              href={telHref}
              className="flex min-h-[3.25rem] w-full items-center justify-center bg-copper px-5 font-semibold text-white"
            >
              Call {business.phone}
            </a>
          ) : (
            <Link
              href="/contact"
              className="flex min-h-[3.25rem] w-full items-center justify-center bg-copper px-5 font-semibold text-white"
            >
              Request a quote
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
