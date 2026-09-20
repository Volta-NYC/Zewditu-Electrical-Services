/**
 * Hero backdrop. A stylised single line schematic: a service entrance feeding
 * a load center, then branch circuits out to terminals.
 *
 * All geometry is hard coded rather than generated, so server and client
 * render identically and there is no hydration mismatch. Purely decorative,
 * so it is hidden from assistive technology.
 */
export function Schematic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="zew-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#2A2E36" strokeWidth="1" />
        </pattern>
        <linearGradient id="zew-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14161A" stopOpacity="0" />
          <stop offset="100%" stopColor="#14161A" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect width="1200" height="700" fill="#14161A" />
      <rect width="1200" height="700" fill="url(#zew-grid)" opacity="0.55" />

      {/* Service entrance run */}
      <g stroke="#D98A4F" strokeWidth="2" fill="none" opacity="0.75">
        <path
          className="conductor"
          style={{ "--dash": "900", "--delay": "120ms" } as React.CSSProperties}
          d="M0 120H300V300H470"
        />
        <path
          className="conductor"
          style={{ "--dash": "1100", "--delay": "260ms" } as React.CSSProperties}
          d="M1200 96H940V420H742"
        />
      </g>

      {/* Load center */}
      <g opacity="0.85">
        <rect
          x="470"
          y="212"
          width="272"
          height="288"
          fill="none"
          stroke="#B45F2B"
          strokeWidth="2"
        />
        <line x1="470" y1="252" x2="742" y2="252" stroke="#2A2E36" strokeWidth="2" />
        {[292, 328, 364, 400, 436, 472].map((y, i) => (
          <g key={y}>
            <line x1="486" y1={y} x2="596" y2={y} stroke="#2A2E36" strokeWidth="6" />
            <line x1="616" y1={y} x2="726" y2={y} stroke="#2A2E36" strokeWidth="6" />
            <line
              x1="486"
              y1={y}
              x2={i % 2 === 0 ? 544 : 520}
              y2={y}
              stroke="#E2A33C"
              strokeWidth="6"
              opacity="0.5"
            />
          </g>
        ))}
      </g>

      {/* Branch circuits */}
      <g stroke="#2A2E36" strokeWidth="2" fill="none">
        <path d="M606 500V612H210" />
        <path d="M606 500V612H1010" />
        <path d="M742 340H860V180" />
        <path d="M470 400H360V560" />
      </g>

      {/* Terminals */}
      <g fill="#E2A33C">
        <circle className="node-pulse" style={{ "--delay": "0ms" } as React.CSSProperties} cx="210" cy="612" r="5" />
        <circle className="node-pulse" style={{ "--delay": "700ms" } as React.CSSProperties} cx="1010" cy="612" r="5" />
        <circle className="node-pulse" style={{ "--delay": "1400ms" } as React.CSSProperties} cx="860" cy="180" r="5" />
        <circle className="node-pulse" style={{ "--delay": "2100ms" } as React.CSSProperties} cx="360" cy="560" r="5" />
      </g>

      <rect y="380" width="1200" height="320" fill="url(#zew-fade)" />
    </svg>
  )
}
