import Link from "next/link";
import { Header } from "@/components/Header";

function Section({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`mx-auto max-w-[980px] px-6 ${className}`}>{children}</section>;
}

export default function HomePage() {
  return (
    <>
      <Header
        imageSrc="/logo.jpeg"
        imageAlt="Soul to Seam logo"
        imgClassName="w-full h-full object-fill"
      />
    <main>
      {/* Tagline */}
      <div className="w-full bg-sts-sectionA">
        <Section className="py-[2vw] md:py-6 text-center">
          <p className="text-[4vw] md:text-[2.5vw] text-black/70">It Doesn’t Stay a Jacket.</p>
        </Section>
      </div>

      <div className="h-8" /> {/* <-- adjust: h-4, h-8, etc. */}

      {/* Hero image placeholder */}
      <Section className="pb-10">
        <div className="mx-auto h-[520px] max-w-[520px] rounded bg-black/10 flex items-center justify-center">
          <span className="text-black/50">Hero Shot / Main Pic</span>
        </div>

        <p className="mt-8 text-center text-sm text-black/70">
          A patent-pending design that transforms into a structured carry.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <input
            placeholder="Email"
            className="w-[420px] max-w-[65vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
          />
          <button className="rounded-md bg-sts-accent px-4 py-2 text-sm text-sts-bg hover:opacity-90">
            Join Early Access
          </button>
        </div>
      </Section>

      {/* Jacket problem */}
      <Section className="pt-12 pb-12 text-center">
        <h2 className="text-xl">The jacket problem.</h2>
        <p className="mt-2 text-sm text-black/70">Once you don’t need it, you’re still left carrying it.</p>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-40 rounded bg-black/10 flex items-center justify-center text-black/50 text-sm"
            >
              Image {i}
            </div>
          ))}
        </div>
      </Section>

      {/* Outerwear that carries itself */}
      <div className="bg-sts-bg">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">Outerwear That Carries Itself</h2>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="h-[360px] rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
              Bag form
            </div>
            <div className="h-[360px] rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
              Jacket form / gif
            </div>
          </div>

          <p className="mt-6 text-sm text-black/70">
            Converts in seconds. Pocket access in both forms. Patent Pending.
          </p>

          <button className="mt-4 w-full rounded-md bg-sts-accent py-3 text-sm text-sts-bg hover:opacity-90">
            Join Early Access
          </button>
        </Section>
      </div>

      {/* From the Studio */}
      <div id="studio" className="bg-sts-bg scroll-mt-28">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">From The Studio</h2>
          <p className="mt-2 text-sm text-black/70">
            The JacketBag, exhibited in leather, denim, and corduroy.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <button
                key={i}
                className="group relative h-56 rounded bg-black/10 flex items-center justify-center"
                aria-label={`Studio image ${i}`}
              >
                <span className="text-black/50 text-sm">Studio {i}</span>
                <span className="absolute right-3 top-3 opacity-60 group-hover:opacity-100">↗</span>
              </button>
            ))}
          </div>
        </Section>
      </div>

      {/* Designed for Real Life */}
      <Section className="pt-12 pb-12 text-center">
        <h2 className="text-xl">Designed for Real Life. Completed by You.</h2>
        <p className="mx-auto mt-4 max-w-[760px] text-sm text-black/70">
          Soul to Seam is a design-led brand creating adaptable, functional products that reduce friction in everyday life,
          completed through the identity and expression of the wearer.
        </p>
      </Section>

      {/* Founding Edition CTA */}
      <div className="bg-sts-sectionA">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">Founding Edition</h2>
          <p className="mt-2 text-sm text-black/70">
            The debut of the JacketBag. <br /> 15 pieces handmade by the founder.
          </p>
          <p className="mt-3 text-xs text-black/70">Patent Pending · $245</p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <input
              placeholder="Email"
              className="w-[520px] max-w-[70vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
            />
          </div>

          <button className="mt-4 rounded-md bg-sts-accent px-6 py-2 text-sm text-sts-bg hover:opacity-90">
            Join Early Access
          </button>

          <p className="mt-3 text-xs text-black/70">Early access to the 15-piece Founding Edition.</p>

          <div className="mt-10">
            <Link href="/about" className="text-sm text-black/70 underline hover:text-black">
              Read “The Soul Behind the Seam”
            </Link>
          </div>
        </Section>
      </div>

      <div className="h-24" />
    </main>
    </>
  );
}

