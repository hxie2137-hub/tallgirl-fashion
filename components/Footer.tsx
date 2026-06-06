import Link from "next/link";

const customerLinks = [
  { label: "Size Guide", href: "/size-guide" },
  { label: "Shipping", href: "/about#shipping" },
  { label: "Returns", href: "/about#returns" }
];

const brandLinks = [
  { label: "About", href: "/about" },
  { label: "Lookbook", href: "/#lookbook" },
  { label: "New In", href: "/products?tag=New%20Arrival" }
];

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper px-6 py-14 lg:px-12">
      <div className="grid gap-12 text-[12px] uppercase tracking-[0.14em] md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-xl tracking-[0.18em]">
            TALLGIRL
          </Link>
          <p className="mt-5 max-w-sm normal-case leading-6 tracking-0 text-ink/55">
            Minimal womenswear designed around height, proportion, and a quieter
            kind of confidence.
          </p>
        </div>
        <div>
          <p className="mb-5 text-ink/45">Customer Care</p>
          <div className="grid gap-3">
            {customerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-50">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-ink/45">Brand</p>
          <div className="grid gap-3">
            {brandLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:opacity-50">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
