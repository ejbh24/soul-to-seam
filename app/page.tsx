"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { Header } from "@/components/Header";
import { ScrollOnLoad } from "@/components/ScrollOnLoad";
import { useEmailCapture } from "@/components/useEmailCapture"
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from "react-icons/fa";

const quadrantImages = [
  { src: "/quadrant_a.png", alt: "Top left jacket problem image" },
  { src: "/quadrant_b.png", alt: "Top right jacket problem image" },
  { src: "/quadrant_c.png", alt: "Bottom left jacket problem image" },
  { src: "/quadrant_d.png", alt: "Bottom right jacket problem image" },
];

const studioImages = [
  { src: "/solo1.png", alt: "Leather JacketBag" },
  { src: "/solo2.png", alt: "Denim JacketBag" },
  { src: "/solo3.png", alt: "Corduroy JacketBag" },
];

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
        <div className="mx-auto w-[59vw] md:w-[31.5vw] h-[84vw] md:h-[45vw] rounded bg-black/10 flex items-center justify-center">
          <Image
            src="/2_models.png"
            alt="Two models wearing jackets"
            width={1200}
            height={1600}
            priority
            className="w-full h-full object-contain"
          />
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
        <p className="mt-2 text-sm text-black/70">
          Once you don’t need it, you’re still left carrying it.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="grid grid-cols-2 gap-[2.5vw] gap-x-[0.5%] gap-y-[5.5%] w-[600px] mx-auto">
            {quadrantImages.map((image) => (
              <div
                key={image.src}
                className="group relative w-[93%] mx-auto aspect-[5/6] rounded overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Outerwear that carries itself */}
      <div className="bg-sts-bg">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">Outerwear That Carries Itself</h2>

          <div className="mt-8 flex justify-center">
            <div className="w-[85%] md:w-full max-w-[720px] h-[95vw] md:h-[650px] rounded overflow-hidden bg-black/10">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/conversion.mp4" type="video/mp4" />
              </video>
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
            {studioImages.map((image, i) => (
              <button
                key={i}
                className="group relative w-[302mw] md:w-full h-[50vw] md:h-96 rounded overflow-hidden"
                aria-label={`Studio image ${i + 1}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />

                <span className="absolute right-3 top-3 opacity-60 group-hover:opacity-100">
                  ↗
                </span>
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
          <Image
            src="/heart_logo.png"
            alt="Two models wearing jackets"
            width={300}
            height={300}
            priority
            className="mx-auto"
          />
      </Section>

      {/* Founding Edition CTA */}
      <div id="early-access" className="bg-sts-sectionA scroll-mt-28">
        <Section className="pt-12 pb-14 text-center">
          <h2 className="text-xl">Founding Edition</h2>
          <p className="mt-2 text-sm text-black/70">
            The debut of the JacketBag. <br /> 15 pieces handmade by the founder.
          </p>
          <p className="mt-3 text-xs text-black/70">Patent Pending · Starting at $245</p>

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
      <div className="w-full border-t border-black/10 bg-[#f3f1ed]">
        <section className="mx-auto max-w-[980px] px-6 pt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-28 text-center">

            <div className="flex flex-col items-center">
              <h3 className="text-[28px] font-normal tracking-[0.02em] text-black">
                SOCIALS
              </h3>

              <div className="mt-6 flex items-center gap-6 text-[44px] text-black/45">
                <FaFacebookF />
                <FaInstagram />
                <FaTiktok />
                <FaLinkedinIn />
              </div>

              <p className="mt-4 text-[18px] text-black/80">
                @soultoseam
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[28px] font-normal tracking-[0.02em] text-black">
                DISCOVER
              </h3>

              <div className="mt-6 space-y-3 text-[18px] text-black/85">
                <p>How It Works</p>
                <p>Brand Philosophy</p>
                <p>About</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[28px] font-normal tracking-[0.02em] text-black">
                CONTACT US
              </h3>

              <p className="mt-6 text-[18px] text-black/85">
                info@soultoseam
              </p>
            </div>

          </div>
        </section>
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
    {foundingEmail.showThanks && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        onClick={() => foundingEmail.setShowThanks(false)}
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
          onClick={() => foundingEmail.setShowThanks(false)}
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
