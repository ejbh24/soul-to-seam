import Image from "next/image";
import Link from "next/link";
import { ScrollButton } from "@/components/ScrollButton";

export function Header({
  imageSrc,
  imageAlt,
  title,
  imgClassName,
  navClassName,
}: {
  imageSrc: string;
  imageAlt: string;
  title?: React.ReactNode;
  imgClassName?: string;
  navClassName?: string;
}) {
  return (
    <header className="relative w-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={2000}     // any large number (just for Next optimization)
        height={800}     // match rough aspect ratio of your image
        priority
        className={imgClassName ?? "w-full h-auto"}
      />

      {/* Nav overlay */}
      <div className="absolute top-0 right-0 z-10 pl-[4vw] pr-[2vw] pt-[1vw] md:pr-6 md:pt-6">
        <nav
          className={`flex items-center gap-[4vw] md:gap-7 text-[3vw] md:text-lg ${
             navClassName ?? "text-black"
          }`}
        >   
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <ScrollButton
            targetId="studio">
            From the Studio
          </ScrollButton>
        </nav>
      </div>

      {/* Optional title overlay */}
      {title && (
        <div className="pointer-events-none absolute inset-0 flex items-center px-6">
          <h1 className="pl-[33vw] pt-[1vw] md:pt-0 sm:pl-[38vw] text-[7vw] sm:text-[7vw] font-medium leading-tight text-black">
            {title}
          </h1>
        </div>
      )}
    </header>
  );
}

