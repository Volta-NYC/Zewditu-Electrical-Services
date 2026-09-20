/**
 * Brand mark. A Z drawn as a conductor run between two terminals, which is
 * the same visual language used by the schematic and the section rules.
 * No client logo file was supplied, so this is built as vector type.
 */
export function Mark({
  size = 34,
  className = "",
}: {
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="40" height="40" rx="3" fill="#14161A" />
      <path
        d="M11 12.5H29L11 27.5H29"
        stroke="#D98A4F"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="11" cy="12.5" r="2.4" fill="#E2A33C" />
      <circle cx="29" cy="27.5" r="2.4" fill="#E2A33C" />
    </svg>
  )
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark size={30} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.05rem] font-bold tracking-tightest">
          ZEWDITU
        </span>
        <span className="font-mono text-[0.56rem] uppercase tracking-label text-copper-deep">
          Electrical Services
        </span>
      </span>
    </span>
  )
}
