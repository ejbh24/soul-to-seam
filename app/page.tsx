"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { CrossPageScrollOnLoad } from "@/components/CrossPageScrollOnLoad";
import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
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

const studioWheels = [
  {
    alt: "Leather JacketBag",
    images: [
      "/wheel_1_a.jpg",
      "/wheel_1_b.jpeg",
      "/wheel_1_c.jpg",
      "/wheel_1_d.jpeg",      
    ],
  },
  {
    alt: "Denim JacketBag",
    images: [
      "/wheel_2_a.jpg",
      "/wheel_2_b.jpg",
      "/wheel_2_c.jpg",
      "/wheel_2_d.jpg",
    ],
  },
  {
    alt: "Corduroy JacketBag",
    images: [
      "/wheel_3_a.jpg",
      "/wheel_3_b.jpg",
      "/wheel_3_c.jpg",
      "/wheel_3_d.jpg",
    ],
  },
];

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Section({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`mx-auto max-w-[980px] px-6 ${className}`}>{children}</section>;
}

function LoadingImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [displaySrc, setDisplaySrc] = useState(src);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (src === displaySrc) return;

    setLoading(true);

    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      setDisplaySrc(src);
      setLoading(false);
    };
  }, [src, displaySrc]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={displaySrc}
        alt={alt}
        fill
        loading="eager"
        className="object-cover"
      />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-5 w-5 rounded-full border border-black/20 border-t-black/70 animate-spin" />
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  const heroEmail = useEmailCapture("home-hero");
  const foundingEmail = useEmailCapture("home-founding");
  const [studioIndexes, setStudioIndexes] = useState([0, 0, 0]);
  return (
    <>
      <Suspense fallback={null}>
        <ScrollOnLoad />
      </Suspense>
      <CrossPageScrollOnLoad />

      <Header
        imageSrc="/header_1.jpeg"
        imageAlt="Soul to Seam logo"
        imgClassName="w-full h-full object-fill"
      />
    <main>
      {/* Tagline */}
      <div className="w-full bg-sts-sectionA">
        <Section className="py-[3.5vw] md:py-6 text-center">
          <p className={`${playfair.className} text-[1.84rem] md:text-[2.725rem] text-black/70`}>
          It Doesn’t Stay a Jacket.
          </p>
        </Section>
      </div>

      <div className="h-8" /> {/* <-- adjust: h-4, h-8, etc. */}

      {/* Hero image placeholder */}
      <Section className="pb-10">
        <div className="mx-auto w-[59vw] md:w-[31.5vw] h-[84vw] md:h-[45vw] rounded bg-black/10 flex items-center justify-center">
          <Image
            src="/2_models.jpg"
            alt="Two models wearing jackets"
            width={1200}
            height={1600}
            priority
            className="w-full h-full object-contain"
          />
        </div>

        <p className="mt-8 text-center text-[1.05rem] md:text-[1.525rem] text-black/70">
          A patent-pending design that transforms into a structured carry.
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <input
            value={heroEmail.email}
            onChange={(e) => heroEmail.setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && heroEmail.submit()}
            placeholder="EMAIL"
            className="w-[420px] max-w-[50vw] md:max-w-[65vw] rounded-md border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sts-accent/40"
          />

          <button
           onClick={heroEmail.submit}
           disabled={heroEmail.loading}
           className="w-[58vw] md:w-auto rounded-md bg-sts-accent px-4 py-2 text-[2.5vw] md:text-sm text-sts-bg hover:opacity-90"
          >
            {heroEmail.loading ? "Submitting..." : "JOIN EARLY ACCESS"}
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
        <h2 className={`${playfair.className} text-[1.84rem] md:text-[2.725rem]`}>
          The jacket problem.
        </h2>
        <p className="mt-2 text-[1.05rem] md:text-[1.525rem] text-black/70">
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
                  loading="eager"
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
          <h2 id="how-it-works" className={`${playfair.className} text-[1.84rem] md:text-[2.725rem]`}>
            Outerwear That Carries Itself
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="w-[85%] md:w-[50vh] max-w-[720px] h-[115vw] md:h-[78vh] rounded overflow-hidden bg-black/10">
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

          <p className="mt-6 text-[1.05rem] md:text-[1.525rem] text-black/70">
            Converts in seconds. Pocket access in both forms. Patent Pending.
          </p>

          <button
            onClick={() =>
              document.getElementById("early-access")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-4 block w-[85%] mx-auto rounded-md bg-sts-accent py-2 text-sm text-sts-bg text-center"
          >
            JOIN EARLY ACCESS
          </button>
 
        </Section>
      </div>

      {/* From the Studio */}
      <div id="studio" className="bg-sts-bg">
        <Section className="pt-12 pb-14 text-center">
          <h2 className={`${playfair.className} text-[1.84rem] md:text-[2.725rem]`}>
            From The Studio
          </h2>
          <p className="mt-2 text-[1.05rem] md:text-[1.525rem] text-black/70">
            The JacketBag, exhibited in leather, denim, and corduroy.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {studioWheels.map((wheel, i) => {
              const currentIndex = studioIndexes[i];
              const currentSrc = wheel.images[currentIndex];
              const isStaticWheel = wheel.images.length === 1;

              return (
                <button
                  key={i}
                  onClick={() => {
                    if (isStaticWheel) return;

                    setStudioIndexes((prev) => {
                      const next = [...prev];
                      next[i] = (next[i] + 1) % wheel.images.length;
                      return next;
                    });
                  }}
                  className="group relative w-[70%] md:w-full mx-auto h-[90vw] md:h-96 rounded"
                  aria-label={`Studio image ${i + 1}`}
                  type="button"
                >
                  <LoadingImage
                    src={currentSrc}
                    alt={wheel.alt}
                  />

                  <span className="absolute top-1/2 -translate-y-1/2 left-[calc(100%+11px)] md:left-1/2 md:top-[calc(100%+11px)] md:-translate-x-1/2 md:translate-y-0 text-3xl opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </Section>
      </div>

      {/* Designed for Real Life */}
      <Section className="pt-12 pb-12 text-center">
        <h2 id="brand-philosophy" className={`${playfair.className} text-[1.84rem] md:text-[2.725rem]`}>Designed for Real Life. Completed by You.</h2>
        <p className="mx-auto mt-4 max-w-[760px] text-[1.05rem] md:text-[1.525rem] text-black/70">
          Soul to Seam is a design-led brand creating adaptable, functional products that reduce friction in everyday life,
          completed through the identity and expression of the wearer.
        </p>
          <Image
            src="/heart_logo.png"
            alt="Two models wearing jackets"
            width={257}
            height={257}
            priority
            className="mx-auto"
          />
      </Section>

      {/* Founding Edition CTA */}
      <div id="early-access" className="bg-sts-sectionA scroll-mt-28">
        <Section className="pt-12 pb-14 text-center">
          <h2 className={`${playfair.className} text-[1.84rem] md:text-[2.725rem]`}>Founding Edition</h2>
          <p className="mt-2 text-[1.05rem] md:text-[1.525rem] text-black/70">
            The debut of the JacketBag. <br /> 15 pieces handmade by the founder.
          </p>
          <p className="mt-3 text-[1.05rem] md:text-[1.525rem] text-black/70">Patent Pending · Starting at $245</p>

          <div className="mt-6 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <input
                value={foundingEmail.email}
                onChange={(e) => foundingEmail.setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && foundingEmail.submit()}
                placeholder="EMAIL"
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
             {foundingEmail.loading ? "Submitting..." : "JOIN EARLY ACCESS"}
           </button>
         </div>
 
          <p className="mt-3 text-[1.05rem] md:text-[1.525rem] text-black/70">Early access to the 15-piece Founding Edition.</p>

          <div className="mt-10">
            <Link href="/about" className="text-[1rem]  text-black/70 underline hover:text-black">
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
                <a
                  href="https://www.facebook.com/profile.php?id=61587957758639&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Soul to Seam on Facebook"
                  className="transition-all hover:text-black hover:scale-110"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.instagram.com/soultoseam?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Soul to Seam on Instagram"
                  className="transition-all hover:text-black hover:scale-110"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.tiktok.com/@soultoseam?_r=1&_t=ZP-94ahrtlCOoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Soul to Seam on TikTok"
                  className="transition-all hover:text-black hover:scale-110"
                >
                  <FaTiktok />
                </a>

                <a
                  href="https://linkedin.com/company/soultoseam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Soul to Seam on LinkedIn"
                  className="transition-all hover:text-black hover:scale-110"
                >
                  <FaLinkedinIn />
                </a>
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
                <button
                  onClick={() =>
                    document.getElementById("how-it-works")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="block w-full text-center hover:underline"
                >
                  How It Works
                </button>
                <button
                  onClick={() =>
                    document.getElementById("brand-philosophy")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  className="block w-full text-center hover:underline"
                >
                  Brand Philosophy
                </button>
                <Link href="/about" className="block hover:underline">
                  About
                </Link>
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
