export default function AboutPage() {
  return (
    <main>
      {/* Top image banner placeholder */}
      <div className="mx-auto max-w-[980px] px-6 pt-8">
        <div className="h-56 w-full rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
          Banner Image
        </div>
      </div>

      <section className="mx-auto max-w-[980px] px-6 py-10">
        <h1 className="text-3xl">The Soul Behind the Seam</h1>

        <div className="mt-8 rounded bg-sts-sectionB p-8">
          <h2 className="text-xl">Designed for Real Life. Completed by You.</h2>

          <div className="mt-6 space-y-5 text-sm text-black/80 leading-7">
            <p>
              Soul to Seam creates adaptable pieces that respond to changing environments and real human behavior...
            </p>
            <p>
              The JacketBag originated at a Stanford frat party...
            </p>
            <p>
              Prototyped through an iterative, human-centered process...
            </p>
          </div>
        </div>

        {/* Founder block */}
        <div className="mt-10 grid grid-cols-[240px_1fr] gap-8 items-start">
          <div className="h-72 rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
            Founder photo
          </div>

          <div className="text-sm text-black/80 leading-7">
            <p className="font-medium text-black">
              Soul to Seam was founded by product designer Anapaula Gutierrez.
            </p>
            <p className="mt-4">
              With over a decade of sewing experience and a background in product design from Stanford...
            </p>
            <p className="mt-6">
              At its core, Soul to Seam is about designing for real life, for movement, transition, and self-expression
              without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Edition CTA repeat */}
      <div className="bg-sts-sectionA">
        <section className="mx-auto max-w-[980px] px-6 py-14 text-center">
          <h2 className="text-xl">Founding Edition</h2>
          <p className="mt-2 text-sm text-black/70">The debut of the JacketBag. 15 pieces handmade by the founder.</p>
          <p className="mt-3 text-xs text-black/70">Patent Pending · $245</p>

          <div className="mt-6 flex items-center justify-center">
            <input
              placeholder="Email"
              className="w-[520px] max-w-[70vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
            />
          </div>

          <button className="mt-4 rounded-md bg-sts-accent px-6 py-2 text-sm text-sts-bg hover:opacity-90">
            Join Early Access
          </button>

          <p className="mt-3 text-xs text-black/70">Early access to the 15-piece Founding Edition.</p>
        </section>
      </div>

      <div className="h-24" />
    </main>
  );
}

