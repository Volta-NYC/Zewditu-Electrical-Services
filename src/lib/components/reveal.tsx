"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"

type Motion = "rise" | "lift" | "wipe"

type RevealProps = {
  children?: ReactNode
  /** Which of the three site motion treatments to use. */
  motion?: Motion
  /** Stagger within a group, in milliseconds. Keep these small. */
  delay?: number
  as?: ElementType
  className?: string
}

/**
 * Scroll reveal built on IntersectionObserver. No animation library needed.
 * Content is visible by default if JavaScript never runs, and the reduced
 * motion rules in globals.css neutralise the transform entirely.
 */
export default function Reveal({
  children,
  motion = "rise",
  delay = 0,
  as,
  className = "",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-motion={motion}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  )
}
