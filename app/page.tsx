'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Dishwasher rack clip',
    description: 'Small replacement clip recreated from a broken original.',
    image: '/placeholders/dishwasher-clip.jpg',
  },
  {
    title: 'Car interior bracket',
    description: 'Custom plastic bracket for a missing interior piece.',
    image: '/placeholders/car-bracket2.jpeg',
  },
  {
    title: 'Prototype enclosure',
    description: 'Simple enclosure for testing a small electronics project.',
    image: '/placeholders/prototype-enclosure.jpg',
  },
]

export default function HomePage() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-bold">
                BDW
              </div>

              <div>
                <p className="text-lg font-bold">
                  Black Dog Works
                </p>

                <p className="text-sm text-neutral-400">
                  Custom Parts & Prototyping
                </p>
              </div>
            </div>

            <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-2 text-sm text-neutral-200">
              Black Dog Works • Custom 3D Printed Parts
            </p>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
              Broken plastic part? We’ll recreate it.
            </h1>

            <p className="mb-8 text-lg leading-8 text-neutral-300">
              Send a photo of the broken part, explain what it needs to do,
              and we’ll let you know if it can be redesigned and 3D printed.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#quote"
                className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Request a Quote
              </a>

              <a
                href="#examples"
                className="rounded-2xl border border-white/20 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                See What We Make
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="relative aspect-square bg-neutral-900">
              <Image
                src="/placeholders/hero-workshop.jpg"
                alt="Black Dog Works workshop"
                fill
                className="object-cover"
              />
            </div>

            <div className="border-t border-white/10 p-6">
              <p className="text-sm uppercase tracking-widest text-neutral-400">
                Simple process
              </p>

              <p className="mt-3 text-3xl font-bold">
                Photo → Quote → Print → Pickup
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="examples"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">
            Parts we can help with
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {[
              'Appliance knobs',
              'Clips and brackets',
              'Car interior pieces',
              'Custom mounts',
              'Adapters and spacers',
              'Small repair parts',
              'Workshop organizers',
              'Prototype pieces',
            ].map(item => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-neutral-900 p-5"
              >
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
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">
                Recent Projects
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                Real-world parts and prototypes
              </h2>
            </div>

            <p className="max-w-xl text-neutral-300">
              A few examples of the kinds of parts Black Dog Works can help
              recreate, adapt, or prototype.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(project => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] bg-neutral-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-neutral-300">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Step 1
            </p>

            <h3 className="mb-3 text-2xl font-bold">
              Send a photo
            </h3>

            <p className="text-neutral-300">
              Upload clear photos of the broken part, the item it belongs to,
              and any rough measurements.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Step 2
            </p>

            <h3 className="mb-3 text-2xl font-bold">
              Get a quote
            </h3>

            <p className="text-neutral-300">
              We review the part and send you a quote based on complexity,
              design time, and print requirements.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">
              Step 3
            </p>

            <h3 className="mb-3 text-2xl font-bold">
              Approve and print
            </h3>

            <p className="text-neutral-300">
              Once approved, we print the part and arrange pickup, local
              delivery, or shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Not every part can be 3D printed — but many can.
          </h2>

          <p className="text-lg leading-8 text-neutral-300">
            We’ll be honest about what is realistic. Some parts need strength,
            heat resistance, flexibility, or precision that may require special
            materials or another manufacturing method.
          </p>
        </div>
      </section>

      <section id="quote" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">
              Request a quote
            </h2>

            <p className="mb-6 text-lg leading-8 text-neutral-300">
              Tell us what broke, what it connects to, and what the part needs
              to do. Photos are the most helpful.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-neutral-300">
              <p className="font-semibold text-white">
                Typical starting prices
              </p>

              <p className="mt-2">
                Simple replacement parts: $20–$40
              </p>

              <p>
                Custom design + print: $50–$120+
              </p>

              <p>
                Multiple iterations/prototypes: quoted per project
              </p>
            </div>
          </div>

          <form
            onSubmit={async e => {
              e.preventDefault()

              setStatus('loading')

              const response = await fetch('/api/quote', {
                method: 'POST',
                body: new FormData(e.currentTarget),
              })

              setStatus(response.ok ? 'success' : 'error')
            }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none focus:border-white/40"
                placeholder="Your name"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none focus:border-white/40"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                What do you need?
              </label>

              <textarea
                id="message"
                name="message"
                className="min-h-32 w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 outline-none focus:border-white/40"
                placeholder="Example: The plastic clip on my dishwasher rack broke. I still have one intact clip to copy."
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="photos"
                className="mb-2 block text-sm font-medium"
              >
                Upload photos
              </label>

              <input
                id="photos"
                name="photos"
                type="file"
                multiple
                accept="image/*,.stl,.step,.obj"
                className="w-full rounded-xl border border-dashed border-white/20 bg-neutral-950 px-4 py-4 text-sm text-neutral-400 file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:font-semibold file:text-neutral-950"
              />
            </div>

            {status === 'success' ? (
              <p className="rounded-2xl bg-white/10 px-6 py-5 text-center font-semibold text-white">
                ✓ Request received — we&apos;ll be in touch soon.
              </p>
            ) : (
              <>
                {status === 'error' && (
                  <p className="mb-4 rounded-xl bg-red-500/20 px-4 py-3 text-sm text-red-300">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full rounded-2xl bg-white px-6 py-4 font-semibold text-neutral-950 transition hover:bg-neutral-200 disabled:opacity-50"
                >
                  {status === 'loading'
                    ? 'Sending…'
                    : 'Send Quote Request'}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-neutral-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Black Dog Works</p>

          <p>
            Montreal, Quebec • Custom Parts & Prototyping
          </p>
        </div>
      </footer>
    </main>
  )
}