import type { Product } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-16">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
