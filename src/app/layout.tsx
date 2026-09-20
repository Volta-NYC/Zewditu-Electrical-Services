import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { business, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Electrician in ${business.address.city}, NY`,
    template: `%s | ${business.name}`,
  },
  description:
    "Woman owned and minority owned electrical contractor in Amsterdam, New York. Panel upgrades, rewiring, generators, and M/WBE and Section 3 ready work across the Mohawk Valley.",
  keywords: [
    "electrician Amsterdam NY",
    "electrical contractor Mohawk Valley",
    "panel upgrade",
    "M/WBE electrical contractor",
    "Section 3 contractor",
  ],
  openGraph: {
    type: "website",
    siteName: business.name,
    title: `${business.name} | Electrician in ${business.address.city}, NY`,
    description:
      "Panel upgrades, rewiring, generators, and certified M/WBE and Section 3 electrical work across the Mohawk Valley.",
    url: siteUrl,
    locale: "en_US",
  },
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/*
          Marks the document as scripted before first paint. Scroll reveals in
          globals.css are scoped to html.js, so if this never runs every
          section renders fully visible instead of staying at opacity 0.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 pt-[var(--nav-height)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
