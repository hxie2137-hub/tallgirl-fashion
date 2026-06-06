"use client";

import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/lib/products";
import { categories } from "@/lib/products";
import { ProductGrid } from "@/components/ProductGrid";

type SortOption = "Featured" | "Price Low" | "Price High" | "Name";

const heightFilters = [
  { label: "All Heights", min: 0, max: 999 },
  { label: "170-175cm", min: 170, max: 175 },
  { label: "176-180cm", min: 176, max: 180 },
  { label: "181cm+", min: 181, max: 999 }
];

function parseHeightFit(heightFit: string) {
  const numbers = heightFit.match(/\d+/g)?.map(Number) || [];
  return {
    min: numbers[0] || 0,
    max: numbers[1] || 999
  };
}

export function ProductBrowser({
  products,
  initialCategory,
  initialQuery,
  initialTag
}: {
  products: Product[];
  initialCategory?: string;
  initialQuery?: string;
  initialTag?: string;
}) {
  const [category, setCategory] = useState<string>(initialCategory || "All");
  const [query, setQuery] = useState(initialQuery || "");
  const [sort, setSort] = useState<SortOption>("Featured");
  const [heightFilter, setHeightFilter] = useState(heightFilters[0]);

  const filteredProducts = useMemo(() => {
    const visibleProducts = products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesTag = !initialTag || product.tag === initialTag;
      const productHeight = parseHeightFit(product.heightFit);
      const matchesHeight =
        productHeight.max >= heightFilter.min && productHeight.min <= heightFilter.max;
      const lowerQuery = query.trim().toLowerCase();
      const matchesQuery =
        !lowerQuery ||
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.heightFit.toLowerCase().includes(lowerQuery);

      return matchesCategory && matchesTag && matchesHeight && matchesQuery;
    });

    return [...visibleProducts].sort((a, b) => {
      if (sort === "Price Low") return a.price - b.price;
      if (sort === "Price High") return b.price - a.price;
      if (sort === "Name") return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
  }, [category, heightFilter, initialTag, products, query, sort]);

  return (
    <section className="px-6 pb-24 pt-28 lg:px-12">
      <div className="mb-12 grid gap-8 xl:grid-cols-[1fr_420px]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            TallGirl Fashion
          </p>
          <h1 className="magazine-type text-6xl leading-none md:text-8xl">
            Shop
          </h1>
        </div>
        <div className="self-end space-y-5">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search product"
            className="w-full border-0 border-b border-ink bg-transparent py-3 text-[13px] uppercase tracking-[0.14em] outline-none placeholder:text-ink/45"
          />
          <div className="flex items-center justify-between gap-4 text-[12px] uppercase tracking-[0.14em]">
            <span className="text-ink/45">{filteredProducts.length} pieces</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="border-0 border-b border-ink bg-transparent py-2 uppercase outline-none"
              aria-label="Sort products"
            >
              <option>Featured</option>
              <option>Price Low</option>
              <option>Price High</option>
              <option>Name</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-x-7 gap-y-4 text-[12px] uppercase tracking-[0.14em]">
        {["All", ...categories].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item as ProductCategory | "All")}
            className={
              category === item
                ? "border-b border-ink pb-1"
                : "pb-1 text-ink/50 hover:text-ink"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap gap-x-7 gap-y-4 border-t thin-rule pt-5 text-[12px] uppercase tracking-[0.14em]">
        {heightFilters.map((item) => (
          <button
            key={item.label}
            onClick={() => setHeightFilter(item)}
            className={
              heightFilter.label === item.label
                ? "border-b border-ink pb-1"
                : "pb-1 text-ink/50 hover:text-ink"
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      {filteredProducts.length ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="py-20 text-center text-[12px] uppercase tracking-[0.16em] text-ink/50">
          No products found
        </p>
      )}
    </section>
  );
}
