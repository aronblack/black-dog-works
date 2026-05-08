'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '../components/ThemeProvider'
import type enDict from '../../dictionaries/en.json'

type Dictionary = typeof enDict

const PROJECT_IMAGES = [
  '/placeholders/dishwasher-clip.jpg',
  '/placeholders/car-bracket2.jpeg',
  '/placeholders/prototype-enclosure.jpg',
]

const LOCALES = ['en', 'fr', 'es'] as const

const CONTACT_LABELS: Record<(typeof LOCALES)[number], string> = {
  en: 'Contact',
  fr: 'Contact',
  es: 'Contacto',
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:bg-neutral-100 dark:border-white/20 dark:text-neutral-300 dark:hover:bg-white/10"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

function LangSwitcher({ lang }: { lang: string }) {
  return (
    <div className="flex gap-1">
      {LOCALES.map(l => (
        <a
          key={l}
          href={`/${l}`}
          className={`rounded px-2 py-1 text-xs font-bold uppercase tracking-wider transition ${
            lang === l
              ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950'
              : 'text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  )
}

function EyebrowBanner({ lang }: { lang: string }) {
  const contactLabel = CONTACT_LABELS[lang as (typeof LOCALES)[number]] ?? 'Contact'

  return (
    <div className="border-b border-neutral-200 bg-neutral-50/70 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          Black Dog Works
        </p>

        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="rounded px-2 py-1 text-xs font-bold uppercase tracking-wider text-neutral-600 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
          >
            {contactLabel}
          </a>
          <ThemeToggle />
          <LangSwitcher lang={lang} />
        </div>
      </div>
    </div>
  )
}

export default function HomePage({
  dict,
  lang,
}: {
  dict: Dictionary
  lang: string
}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  return (
    <main className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <EyebrowBanner lang={lang} />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-lg font-bold dark:border-white/20 dark:bg-white/10">
                BDW
              </div>
              <div>
                <p className="text-lg font-bold">Black Dog Works</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Custom Parts &amp; Prototyping</p>
              </div>
            </div>

            <p className="mb-4 inline-block rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-600 dark:bg-white/10 dark:text-neutral-200">
              {dict.badge}
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              {dict.hero.headline}
            </h1>

            <p className="mb-8 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              {dict.hero.subtext}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-2xl bg-neutral-950 px-6 py-4 text-center font-semibold text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                {dict.hero.cta_quote}
              </a>
              <a
                href="#examples"
                className="rounded-2xl border border-neutral-300 px-6 py-4 text-center font-semibold text-neutral-700 transition hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
              >
                {dict.hero.cta_examples}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-2xl dark:border-white/10 dark:bg-white/5">
            <div className="relative aspect-square bg-neutral-200 dark:bg-neutral-900">
              <Image
                src="/placeholders/hero-workshop.jpg"
                alt="Black Dog Works workshop"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                loading="eager"
                className="object-cover"
              />
            </div>
            <div className="border-t border-neutral-200 p-6 dark:border-white/10">
              <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{dict.process.label}</p>
              <p className="mt-3 text-3xl font-bold">{dict.process.steps}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="examples" className="border-y border-neutral-200 bg-neutral-50 px-6 py-16 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">{dict.parts.heading}</h2>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {dict.parts.items.map(item => (
              <div key={item} className="rounded-2xl border border-neutral-200 bg-neutral-100 p-5 dark:border-white/10 dark:bg-neutral-900">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{dict.projects.label}</p>
              <h2 className="text-3xl font-bold md:text-4xl">{dict.projects.heading}</h2>
            </div>
            <p className="max-w-xl text-neutral-600 dark:text-neutral-300">{dict.projects.subtext}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dict.projects.items.map((project, i) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white dark:border-white/10 dark:bg-white/5">
                <div className="relative aspect-[4/3] bg-neutral-200 dark:bg-neutral-800">
                  <Image
                    src={PROJECT_IMAGES[i]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {dict.steps.map(step => (
            <div key={step.label}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{step.label}</p>
              <h3 className="mb-3 text-2xl font-bold">{step.heading}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-16 dark:bg-neutral-900">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">{dict.cta_section.heading}</h2>
          <p className="text-lg leading-8 text-neutral-600 dark:text-neutral-300">{dict.cta_section.text}</p>
        </div>
      </section>

      <section id="quote" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">{dict.quote.heading}</h2>
            <p className="mb-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">{dict.quote.subtext}</p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-neutral-600 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
              <p className="font-semibold text-neutral-950 dark:text-white">{dict.quote.prices_heading}</p>
              <p className="mt-2">{dict.quote.price1}</p>
              <p>{dict.quote.price2}</p>
              <p>{dict.quote.price3}</p>
            </div>
          </div>

          <form
            onSubmit={async e => {
              e.preventDefault()
              setStatus('loading')
              const response = await fetch('/api/quote', { method: 'POST', body: new FormData(e.currentTarget) })
              setStatus(response.ok ? 'success' : 'error')
            }}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-white/5"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium">{dict.quote.name}</label>
              <input id="name" name="name" className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400 dark:border-white/10 dark:bg-neutral-950 dark:focus:border-white/40" placeholder={dict.quote.name_placeholder} />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium">{dict.quote.email}</label>
              <input id="email" name="email" type="email" className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400 dark:border-white/10 dark:bg-neutral-950 dark:focus:border-white/40" placeholder="you@example.com" />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium">{dict.quote.message}</label>
              <textarea id="message" name="message" className="min-h-32 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-neutral-400 dark:border-white/10 dark:bg-neutral-950 dark:focus:border-white/40" placeholder={dict.quote.message_placeholder} />
            </div>

            <div className="mb-5">
              <label htmlFor="photos" className="mb-2 block text-sm font-medium">{dict.quote.photos}</label>
              <input id="photos" name="photos" type="file" multiple accept="image/*,.stl,.step,.obj" className="w-full rounded-xl border border-dashed border-neutral-300 bg-white px-4 py-4 text-sm text-neutral-500 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-950 file:px-4 file:py-2 file:font-semibold file:text-white dark:border-white/20 dark:bg-neutral-950 dark:text-neutral-400 dark:file:bg-white dark:file:text-neutral-950" />
            </div>

            {status === 'success' ? (
              <p className="rounded-2xl bg-neutral-100 px-6 py-5 text-center font-semibold text-neutral-900 dark:bg-white/10 dark:text-white">
                ✓ {dict.quote.success}
              </p>
            ) : (
              <>
                {status === 'error' && (
                  <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600 dark:bg-red-500/20 dark:text-red-300">
                    {dict.quote.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                >
                  {status === 'loading' ? dict.quote.sending : dict.quote.submit}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-6 py-10 text-sm text-neutral-400 dark:border-white/10 dark:text-neutral-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Black Dog Works</p>
          <p>{dict.footer.tagline}</p>
        </div>
      </footer>
    </main>
  )
}
