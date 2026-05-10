export default function NRSCWebsite() {
  const featuredDrops = [
    {
      title: "NRSC Midnight Tee",
      description:
        "Oversized heavyweight tee with tonal front graphics and aggressive back print inspired by underground street racing culture.",
      price: "$45",
      tag: "BEST SELLER",
      vibe: "NRSC Midnight Series"
    },
    {
      title: "NRSC Ghostline Hoodie",
      description:
        "Premium faded hoodie with reflective sleeve details and oversized NRSC back branding for late-night meets.",
      price: "$85",
      tag: "LIMITED DROP",
      vibe: "No Remorse Collection"
    },
    {
      title: "NRSC Division Jacket",
      description:
        "Track-inspired lightweight racing jacket featuring monochrome motorsport graphics and DFW coordinates.",
      price: "$120",
      tag: "NEW RELEASE",
      vibe: "DFW Street Division"
    },
    {
      title: "No Remorse Gloves",
      description:
        "Minimal racing gloves with silicone grip and reflective NRSC logos.",
      price: "$40",
      tag: "TRACK SERIES",
      vibe: "NRSC Track Series"
    }
  ];

  const gallery = ["Night Runs", "Downtown Meets", "Street Builds", "Track Days"];

  const communityEvents = [
    "Weekly Night Meets",
    "Member Spotlights",
    "Cruises & Rollouts"
  ];

  const merchHighlights = [
    "Heavyweight Oversized Fits",
    "Reflective Motorsport Graphics",
    "Limited Seasonal Drops"
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black font-sans text-white">
      <section className="relative flex min-h-screen items-center justify-center border-b border-zinc-800 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-400">
            Dallas • Fort Worth • Texas
          </p>

          <h1 className="mb-6 text-6xl font-black leading-none tracking-tight md:text-8xl">
            NO REMORSE
            <br />
            STREET CLUB
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Built for the streets, late-night runs, custom builds, and the culture.
            NRSC represents the DFW automotive scene with a clean, aggressive aesthetic.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/noremorsestreetclub.dfw"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Follow on Instagram
            </a>

            <a
              href="#shop"
              className="rounded-2xl border border-zinc-700 px-8 py-4 transition hover:bg-zinc-900"
            >
              View Merch
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
              About NRSC
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              More Than a Car Club.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-zinc-300">
              No Remorse Street Club was created for enthusiasts who live for the culture — clean builds, loud engines, late nights, and real community. Whether it’s imports, muscle, motorcycles, or custom fabrication, NRSC brings DFW together.
            </p>

            <p className="leading-relaxed text-zinc-500">
              This website is designed to scale with the brand, including future merch drops, member applications, event registrations, and secure online checkout functionality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {gallery.map((item) => (
              <div
                key={item}
                className="flex aspect-square items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-950 text-lg font-semibold text-zinc-500 hover:border-zinc-600"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="border-b border-zinc-800 bg-gradient-to-b from-black to-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
                NRSC Apparel Division
              </p>

              <h2 className="mb-4 text-5xl font-black leading-none md:text-6xl">
                BUILT FOR
                <br />
                NIGHT RUNS.
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
                Built around the identity of No Remorse Street Club — oversized silhouettes, monochrome palettes, reflective graphics, and premium heavyweight materials designed for the DFW street scene.
              </p>
            </div>

            <div className="max-w-sm rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
                Future Integrations
              </div>

              <div className="space-y-2 text-zinc-300">
                <div>• Shopify Storefront</div>
                <div>• Stripe Checkout</div>
                <div>• Printful Fulfillment</div>
                <div>• Limited Product Drops</div>
              </div>
            </div>
          </div>

          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            <div className="relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black opacity-90" />

              <div className="relative z-10">
                <div className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Featured Drop
                </div>

                <h3 className="mb-4 text-5xl font-black leading-none">
                  STREET
                  <br />
                  DIVISION
                </h3>

                <p className="mb-8 max-w-md leading-relaxed text-zinc-400">
                  Premium NRSC apparel designed for late-night runs, car meets, track nights, and the underground street scene across DFW.
                </p>

                <button type="button" className="rounded-2xl bg-white px-8 py-4 font-bold text-black hover:scale-105">
                  SHOP COLLECTION
                </button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featuredDrops.map((item) => (
                <article key={item.title} className="group overflow-hidden rounded-[2rem] border border-zinc-800 bg-black hover:border-zinc-600">
                  <div className="relative flex aspect-square items-center justify-center bg-zinc-950">
                    <div className="absolute left-4 top-4 rounded-full border border-zinc-700 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zinc-300">
                      {item.tag}
                    </div>

                    <div className="relative z-10 text-center px-6">
                      <div className="mb-2 text-3xl font-black group-hover:scale-105">
                        {item.title}
                      </div>
                      <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                        {item.vibe}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex justify-between">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <div className="text-lg font-semibold text-zinc-300">{item.price}</div>
                    </div>

                    <p className="mb-6 text-sm text-zinc-500">
                      {item.description}
                    </p>

                    <button type="button" className="w-full rounded-2xl border border-zinc-700 py-3 hover:bg-white hover:text-black">
                      ADD TO CART
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {merchHighlights.map((detail) => (
              <div key={detail} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                <div className="mb-3 text-2xl font-bold">{detail}</div>
                <p className="text-zinc-500">Designed for premium underground streetwear culture.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">Support The Mission</p>
            <h2 className="mb-6 text-4xl font-black md:text-5xl">Give Back Through NRSC</h2>
            <p className="mx-auto max-w-3xl text-lg text-zinc-400">
              Support the growth of No Remorse Street Club and mental health awareness initiatives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-zinc-800 bg-black p-10">
              <h3 className="mb-4 text-3xl font-black">Support The Club</h3>
              <p className="mb-8 text-zinc-400">
                Donations help fund events, merch, and community projects.
              </p>
              <a href="https://cash.app" className="rounded-2xl bg-white px-8 py-4 font-bold text-black">
                Donate to NRSC
              </a>
            </div>

            <div className="rounded-[2rem] border border-zinc-800 bg-black p-10">
              <h3 className="mb-4 text-3xl font-black">Help Save Lives</h3>
              <p className="mb-8 text-zinc-400">
                Support mental health awareness and crisis prevention.
              </p>
              <a href="https://988lifeline.org/donate/" className="rounded-2xl border border-zinc-700 px-8 py-4 font-bold hover:bg-white hover:text-black">
                Donate to 988 Lifeline
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm text-zinc-600">
        © 2026 No Remorse Street Club • DFW Texas
      </footer>
    </main>
  );
}
