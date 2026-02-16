import Image from "next/image";
import Link from "next/link";

export function Header({
  imageSrc,
  imageAlt,
  title,
  imgClassName,
}: {
  imageSrc: string;
  imageAlt: string;
  title?: React.ReactNode;
  imgClassName?: string;
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
      <div className="absolute top-0 right-0 z-10 px-6 pt-5">
        <nav className="flex items-center gap-7 text-lg text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#studio">From the Studio</Link>
        </nav>
      </div>

      {/* Optional title overlay */}
      {title && (
        <div className="pointer-events-none absolute inset-0 flex items-center px-6">
          <h1 className="pl-40 pt-16 md:pt-0 sm:pl-160 text-3xl sm:text-8xl font-medium leading-tight text-black">
            {title}
          </h1>
        </div>
      )}
    </header>
  );
}

