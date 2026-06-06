import Link from "next/link";
import type { Product } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";

export function HomeProductSection({
  title,
  subtitle,
  products,
  href
}: {
  title: string;
  subtitle: string;
  products: Product[];
  href: string;
}) {
  return (
    <section className="px-6 py-20 lg:px-12">
      <div className="mb-8 flex items-end justify-between gap-8">
        <div>
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            {subtitle}
          </p>
          <h2 className="magazine-type text-5xl leading-none md:text-7xl">
            {title}
          </h2>
        </div>
        <Link
          href={href}
          className="hidden border-b border-ink pb-1 text-[12px] uppercase tracking-[0.14em] md:block"
        >
          View All
        </Link>
      </div>
      <ProductGrid products={products} />
    </section>
  );
}
