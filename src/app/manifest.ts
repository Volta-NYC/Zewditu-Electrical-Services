import type { MetadataRoute } from "next"
import { business } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.legalName,
    short_name: "Zewditu",
    description:
      "Woman owned and minority owned electrical contractor in Amsterdam, New York.",
    start_url: "/",
    display: "standalone",
    background_color: "#14161A",
    theme_color: "#14161A",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
