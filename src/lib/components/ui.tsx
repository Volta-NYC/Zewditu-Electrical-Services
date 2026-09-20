import Link from "next/link"
import type { ReactNode } from "react"

/* ---------------------------------------------------------------------------
   Shared primitives. Deliberately small: a container, a section shell, a
   mono label, and two button styles. Art direction lives in the pages.
   --------------------------------------------------------------------------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-container px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export function Label({
  children,
  tone = "copper",
  className = "",
}: {
  children: ReactNode
  tone?: "copper" | "dim" | "ink"
  className?: string
}) {
  const tones = {
    copper: "text-copper-deep",
    dim: "text-slate-dim",
    ink: "text-ink",
  }
  return (
    <span
      className={`font-mono text-[0.68rem] font-medium uppercase tracking-label ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "solid" | "outline" | "ghost"
  external?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex min-h-[3rem] items-center justify-center gap-2 px-6 text-[0.95rem] font-semibold tracking-tight transition-colors duration-200 ease-calm"

  const variants = {
    solid: "bg-copper text-white hover:bg-copper-deep",
    outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
    // Secondary action on dark. The border needs enough contrast to read as a
    // control on its own, so it uses the muted text tone rather than the
    // hairline divider tone.
    ghost:
      "border border-slate-muted text-paper hover:border-copper-light hover:text-copper-light",
  }

  const cls = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

/**
 * A thin copper rule that wipes in on scroll. Used as the connective tissue
 * between sections, echoing a conductor run.
 */
export function ConductorRule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-copper ${className}`} aria-hidden="true" />
}
