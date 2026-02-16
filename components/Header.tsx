import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "From the Studio", href: "/#studio" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-sts-bg/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-[980px] px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-20 rounded bg-black/5" aria-hidden />
            <span className="text-sm tracking-wide text-black/70">Soul to Seam</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-black/70">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-black transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 rounded bg-black/5 h-16" aria-hidden />
      </div>
    </header>
  );
}

