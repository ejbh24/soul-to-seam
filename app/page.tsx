"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ScrollOnLoad } from "@/components/ScrollOnLoad";
import { useEmailCapture } from "@/components/useEmailCapture"

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
  const heroEmail = useEmailCapture("home-hero");
  const foundingEmail = useEmailCapture("home-founding");
  return (
    <>
      <Suspense fallback={null}>
        <ScrollOnLoad />
      </Suspense>
      <Header
        imageSrc="/logo.jpeg"
        imageAlt="Soul to Seam logo"
        imgClassName="w-full h-full object-fill"
      />
    <main>
      {/* Tagline */}
      <div className="w-full bg-sts-sectionA">
        <Section className="py-[3.5vw] md:py-6 text-center">
          <p className="text-[4vw] md:text-[2.5vw] text-black/70">It Doesn’t Stay a Jacket.</p>
        </Section>
      </div>

      <div className="h-8" /> {/* <-- adjust: h-4, h-8, etc. */}

      {/* Hero image placeholder */}
      <Section className="pb-10">
        <div className="mx-auto w-[67vw] md:w-[40vw] h-[84vw] md:h-[45vw] rounded bg-black/10 flex items-center justify-center">
          <span className="text-black/50">Hero Shot / Main Pic</span>
        </div>

        <p className="mt-8 text-center text-[2.5vw] md:text-sm text-black/70">
          A patent-pending design that transforms into a structured carry.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <input
            value={heroEmail.email}
            onChange={(e) => heroEmail.setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && heroEmail.submit()}
            placeholder="Email"
            className="w-[420px] max-w-[65vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
          />

          <button
           onClick={heroEmail.submit}
           disabled={heroEmail.loading}
           className="rounded-md bg-sts-accent px-4 py-2 text-[2.5vw] md:text-sm text-sts-bg hover:opacity-90"
          >
            {heroEmail.loading ? "Submitting..." : "Join Early Access"}
          </button>
        </div>

        {heroEmail.error && (
          <p className="mt-2 text-xs text-red-600 text-center">
            {heroEmail.error}
          </p>
        )}

      </Section>

      {/* Jacket problem */}
      <Section className="pt-12 pb-12 text-center">
        <h2 className="text-xl">The jacket problem.</h2>
        <p className="mt-2 text-sm text-black/70">Once you don’t need it, you’re still left carrying it.</p>

        <div className="mt-8 grid grid-cols-3 gap-[2.5vw] md:gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group relative w-[30mw] md:w-full h-[30vw] md:h-56 rounded bg-black/10 flex items-center justify-center"
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

          <div className="mt-8 grid grid-cols-2 gap-[2.5vw] md:gap-6">
             <div className="md:w-full h-[65vw] md:h-[600px] rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
              Bag form
            </div>
             <div className="md:w-full h-[65vw] md:h-[600px] rounded bg-black/10 flex items-center justify-center text-black/50 text-sm">
              Jacket form / gif
            </div>
          </div>

          <p className="mt-6 text-[3.5vw] md:text-sm text-black/70">
            Converts in seconds. Pocket access in both forms. Patent Pending.
          </p>

          <a href="#early-access" className="mt-4 block w-[85%] mx-auto rounded-md bg-sts-accent py-2 text-sm text-sts-bg text-center">
            Join Early Access
          </a>
 
        </Section>
      </div>

      {/* From the Studio */}
      <div id="studio" className="bg-sts-bg scroll-mt-28">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">
            From The Studio
          </h2>
          <p className="mt-2 text-[3vw] md:text-sm text-black/70">
            The JacketBag, exhibited in leather, denim, and corduroy.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-[2.5vw] md:gap-6">
            {[1, 2, 3].map((i) => (
              <button
                key={i}
                className="group relative w-[302mw] md:w-full h-[50vw] md:h-96 rounded bg-black/10 flex items-center justify-center"
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
      <div id="early-access" className="bg-sts-sectionA scroll-mt-28">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">Founding Edition</h2>
          <p className="mt-2 text-sm text-black/70">
            The debut of the JacketBag. <br /> 15 pieces handmade by the founder.
          </p>
          <p className="mt-3 text-xs text-black/70">Patent Pending · $245</p>

          <div className="mt-6 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <input
                value={foundingEmail.email}
                onChange={(e) => foundingEmail.setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && foundingEmail.submit()}
                placeholder="Email"
                className="w-[520px] max-w-[70vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
               />
            </div>

            {foundingEmail.error && (
              <p className="mt-2 text-xs text-red-600 text-center">
                {foundingEmail.error}
               </p>
            )}

            <button
              onClick={foundingEmail.submit}
              disabled={foundingEmail.loading}
              className="mt-4 rounded-md bg-sts-accent px-6 py-2 text-sm text-sts-bg hover:opacity-90"
              >
             {foundingEmail.loading ? "Submitting..." : "Join Early Access"}
           </button>
         </div>
 
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
    {heroEmail.showThanks && (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={() => heroEmail.setShowThanks(false)}
    >
    <div
      className="bg-white p-6 rounded-xl shadow-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-start gap-6">
        <div>
          <h3 className="font-semibold">Thanks for signing up.</h3>
          <p className="text-sm text-black/70 mt-1">
            You’re on the early access list!
          </p>
        </div>
          <button
            onClick={() => heroEmail.setShowThanks(false)}
            className="text-black/60 hover:text-black"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
    )}

    </>
  );
}

