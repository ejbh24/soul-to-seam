import { Header } from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
    <Header
      imageSrc="/about_header.jpeg"
      imageAlt="About header"
      navClassName="text-white"
      title={
        <>
          The Soul Behind
          <br />
          the Seam
        </>
      }
      imgClassName="w-full h-fill object-fill"
    />
    <main>
      <section className="mx-auto max-w-[980px] px-6 py-10">
        <div className="mt-8 rounded bg-sts-sectionB p-8">
          <h2 className="text-[2.5vw] sm:text-[2.5vw] text-center">Designed for Real Life. Completed by You.</h2>

          <div className="mt-6 space-y-5 text-sm lg:text-[25px] text-black/80 leading-7 lg:leading-11">
            <p>
              Soul to Seam creates adaptable pieces that respond to changing environments and real
              human behavior. The garment is only finished when it is worn, brought to life through
              the movement and identity of the soul behind the seam.
            </p>
            <p>
              The JacketBag originated at a Stanford frat party. After watching people abandon
              their jackets to stay hands-free and avoid covering their outfits, it became clear
              there was a need for a better way to carry outerwear.
            </p>
            <p>
              What began as a situational observation revealed a broader design gap. Traditional
              jackets are static, and aren’t built to move between changing environments and needs.
              The JacketBag was developed as a response: an adaptable outerwear system that
              transforms with the wearer, allowing the garment to remain useful instead of
              becoming something to manage.
            </p>
            <p>
              Prototyped through an iterative, human-centered process, the JacketBag converts from
              jacket to structured carry while maintaining pocket access in both forms. Patent
              pending. Designed to reduce everyday friction.
            </p>
          </div>
        </div>

        {/* Founder block */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[35%_1fr] gap-8 items-start">
          <div className="relative w-full md:w-full aspect-[4/5] rounded overflow-hidden">
            <Image
              src="/graduation_pic.jpg"
              alt="Anapaula Gutierrez"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm lg:text-[25px] text-black/80 leading-7 lg:leading-11">
            <p className="font-medium text-black">
              Soul to Seam was founded by product designer Anapaula Gutierrez.
            </p>
            <p className="mt-4">
              With over a decade of sewing experience and a background in product design from
              Stanford, her work is rooted in observing how people move through the world and
              creating solutions that improve their quality of life. What began as altering
              clothing for herself, became a long-term exploration of how garments can adapt to
              the people who wear them.
            </p>
          </div>
        </div>
        <p className="mt-6 text-sm lg:text-[25px] text-black/80 leading-7 lg:leading-11">
          At its core, Soul to Seam is about designing for real life, for movement, transition,
          and self-expression without compromise.
        </p>
      </section>

      {/* Founding Edition CTA repeat */}
      <div className="bg-sts-sectionA">
        <section className="mx-auto max-w-[980px] px-6 py-14 text-center">
          <h2 className="text-xl">Founding Edition</h2>
          <p className="mt-2 text-sm text-black/70">The debut of the JacketBag. <br /> 15 pieces handmade by the founder.</p>
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
    </>
  );
}

