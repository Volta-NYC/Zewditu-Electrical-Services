import Link from "next/link"
import { Container, Label, Button } from "@/lib/components/ui"
import { navLinks } from "@/lib/site"

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center py-20">
        <Label tone="dim">Error 404</Label>
        <h1 className="mt-5 max-w-2xl font-display text-[2.4rem] font-extrabold leading-[1] tracking-tightest text-paper sm:text-[3.4rem]">
          This circuit does not go anywhere.
        </h1>
        <p className="mt-5 max-w-lg text-[1.02rem] text-slate-dim">
          The page you asked for is not here. Here is everything that is.
        </p>
        <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
          <li>
            <Link
              href="/"
              className="font-mono text-[0.78rem] uppercase tracking-label text-copper-light underline-offset-4 hover:underline"
            >
              Home
            </Link>
          </li>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-[0.78rem] uppercase tracking-label text-copper-light underline-offset-4 hover:underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </section>
  )
}
