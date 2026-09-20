"use client"

import { useState, type FormEvent } from "react"
import { services } from "@/lib/site"

/**
 * Quote request form.
 *
 * TODO(client): set NEXT_PUBLIC_CONTACT_ENDPOINT in the Vercel project to the
 * URL of whatever receives submissions (Formspree, Basin, a Vercel function,
 * or similar). Until it is set, the form validates and then tells the user
 * plainly to call or email instead, rather than pretending it sent something.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? ""

type Status = "idle" | "submitting" | "sent" | "error" | "unconfigured"

type Errors = Partial<Record<"name" | "email" | "message", string>>

const field =
  "w-full border border-paper-line bg-paper-pure px-4 py-3 text-[0.98rem] text-ink transition-colors duration-200 placeholder:text-slate-muted/70 focus:border-copper"

const labelCls = "block font-mono text-[0.7rem] uppercase tracking-label text-slate-muted"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Errors>({})

  function validate(data: FormData): Errors {
    const next: Errors = {}
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (name.length < 2) next.name = "Please enter your name."
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "Please enter an email address we can reply to."
    if (message.length < 10)
      next.message = "Please add a sentence or two about the work."
    return next
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const firstKey = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus()
      return
    }

    if (!ENDPOINT) {
      setStatus("unconfigured")
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="border-l-2 border-copper bg-paper-pure p-7"
        aria-live="polite"
      >
        <h3 className="font-display text-[1.4rem] font-bold tracking-tight">
          Message received.
        </h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-muted">
          We read every request ourselves. Expect a reply within one business
          day, and sooner if it is something urgent.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className={labelCls}>
          Name <span className="text-copper">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${field} mt-2 ${errors.name ? "border-copper-deep" : ""}`}
        />
        {errors.name && (
          <p id="name-error" className="mt-2 text-[0.85rem] text-copper-deep">
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-copper">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${field} mt-2 ${errors.email ? "border-copper-deep" : ""}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-[0.85rem] text-copper-deep">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone <span className="text-slate-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={`${field} mt-2`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>
          What do you need
        </label>
        <select id="service" name="service" defaultValue="" className={`${field} mt-2`}>
          <option value="">Not sure yet</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Details <span className="text-copper">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Where the building is, what it is doing, and when you need it looked at."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} mt-2 resize-y ${errors.message ? "border-copper-deep" : ""}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-[0.85rem] text-copper-deep">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[3.25rem] w-full items-center justify-center bg-copper px-6 text-[0.98rem] font-semibold text-white transition-colors duration-200 hover:bg-copper-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>

      <p aria-live="polite" className="sr-only">
        {status === "submitting" ? "Sending your request" : ""}
      </p>

      {status === "unconfigured" && (
        <div role="alert" className="border-l-2 border-amber bg-paper-pure p-5">
          <p className="text-[0.92rem] leading-relaxed">
            This form is not connected to an inbox yet. Please call or email us
            using the details on this page and we will pick it up right away.
          </p>
        </div>
      )}

      {status === "error" && (
        <div role="alert" className="border-l-2 border-copper-deep bg-paper-pure p-5">
          <p className="text-[0.92rem] leading-relaxed">
            Something went wrong sending that. Please try again, or reach us
            directly with the details on this page.
          </p>
        </div>
      )}
    </form>
  )
}
