import Link from "next/link";
import type { Product } from "@/lib/products";
import { FashionImage } from "@/components/FashionImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone">
        <FashionImage
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-[1.035] group-hover:opacity-0"
          fallbackLabel={product.category}
        />
        <FashionImage
          src={product.images[1]}
          alt={`${product.name} alternate view`}
          className="absolute inset-0 h-full w-full scale-[1.01] object-cover grayscale opacity-0 transition duration-700 group-hover:scale-[1.045] group-hover:opacity-100"
          fallbackLabel={product.category}
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-4 text-[12px] uppercase tracking-[0.08em]">
        <div>
          <p>{product.name}</p>
          <p className="mt-1 text-ink/50">{product.category}</p>
        </div>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
