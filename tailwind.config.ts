import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#14161A",
          soft: "#1C1F25",
          line: "#2A2E36",
        },
        paper: {
          DEFAULT: "#F4F1EC",
          pure: "#FFFFFF",
          line: "#DED8CF",
        },
        copper: {
          DEFAULT: "#B45F2B",
          deep: "#96491E",
          light: "#D98A4F",
        },
        amber: {
          DEFAULT: "#E2A33C",
        },
        slate: {
          muted: "#5C6672",
          dim: "#9AA3AE",
        },
      },
      fontFamily: {
        display: ["Archivo", "Helvetica Neue", "Arial", "sans-serif"],
        sans: ["IBM Plex Sans", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        label: "0.14em",
      },
      maxWidth: {
        container: "78rem",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
export default config
