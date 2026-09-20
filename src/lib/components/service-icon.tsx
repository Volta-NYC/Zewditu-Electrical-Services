import type { Service } from "@/lib/site"

/**
 * Line drawn service icons in the same schematic language as the hero.
 * Decorative only: each service always carries a visible text label, so the
 * icons never carry meaning on their own.
 */
export function ServiceIcon({
  name,
  className = "",
}: {
  name: Service["icon"]
  className?: string
}) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 40 40",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.5,
    className,
    "aria-hidden": true,
    focusable: "false" as const,
  }

  switch (name) {
    case "panel":
      return (
        <svg {...common}>
          <rect x="8" y="5" width="24" height="30" />
          <line x1="8" y1="11" x2="32" y2="11" />
          <line x1="12" y1="17" x2="19" y2="17" />
          <line x1="21" y1="17" x2="28" y2="17" />
          <line x1="12" y1="23" x2="19" y2="23" />
          <line x1="21" y1="23" x2="28" y2="23" />
          <line x1="12" y1="29" x2="19" y2="29" />
        </svg>
      )
    case "rewire":
      return (
        <svg {...common}>
          <path d="M5 12C11 12 11 28 17 28C23 28 23 12 29 12C33 12 35 15 35 20" />
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="35" cy="20" r="2.5" />
        </svg>
      )
    case "generator":
      return (
        <svg {...common}>
          <rect x="5" y="13" width="30" height="18" rx="1" />
          <path d="M21 17L15 24H20L18 29L25 21H20L21 17Z" />
          <line x1="11" y1="13" x2="11" y2="9" />
          <line x1="29" y1="13" x2="29" y2="9" />
        </svg>
      )
    case "ev":
      return (
        <svg {...common}>
          <rect x="7" y="8" width="17" height="24" rx="1" />
          <path d="M16 14L12 21H16L14 27L20 19H16L16 14Z" />
          <path d="M24 16H29C30.5 16 31 17 31 18V27C31 29 33 29 33 27V19" />
          <line x1="29" y1="12" x2="29" y2="16" />
        </svg>
      )
    case "lighting":
      return (
        <svg {...common}>
          <path d="M13 17A7 7 0 0 1 27 17C27 21 24 22 23.5 26H16.5C16 22 13 21 13 17Z" />
          <line x1="16.5" y1="30" x2="23.5" y2="30" />
          <line x1="18" y1="34" x2="22" y2="34" />
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="7" y1="10" x2="10" y2="12" />
          <line x1="33" y1="10" x2="30" y2="12" />
        </svg>
      )
    case "troubleshoot":
      return (
        <svg {...common}>
          <circle cx="17" cy="17" r="10" />
          <line x1="24.5" y1="24.5" x2="34" y2="34" />
          <path d="M18 11L14 18H18L16 23L21 16H17L18 11Z" />
        </svg>
      )
    case "turnover":
      return (
        <svg {...common}>
          <path d="M6 18L20 7L34 18" />
          <path d="M10 18V32H30V18" />
          <rect x="17" y="23" width="6" height="9" />
        </svg>
      )
    case "maintenance":
      return (
        <svg {...common}>
          <path d="M25 6A8 8 0 0 0 33 16L17 32A4 4 0 0 1 11 26L27 10A8 8 0 0 0 25 6Z" />
          <circle cx="13" cy="28" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case "code":
      return (
        <svg {...common}>
          <rect x="9" y="5" width="22" height="30" />
          <line x1="14" y1="13" x2="26" y2="13" />
          <line x1="14" y1="19" x2="26" y2="19" />
          <path d="M14 26L17 29L26 22" />
        </svg>
      )
    case "retrofit":
      return (
        <svg {...common}>
          <rect x="5" y="12" width="30" height="8" rx="1" />
          <line x1="10" y1="20" x2="8" y2="28" />
          <line x1="20" y1="20" x2="20" y2="30" />
          <line x1="30" y1="20" x2="32" y2="28" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="28" y1="8" x2="28" y2="12" />
        </svg>
      )
  }
}
