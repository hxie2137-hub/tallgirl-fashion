import { ProductBrowser } from "@/components/ProductBrowser";
import { products } from "@/lib/products";

export default function ProductsPage({
  searchParams
}: {
  searchParams: { category?: string; q?: string; tag?: string };
}) {
  return (
    <main>
      <ProductBrowser
        products={products}
        initialCategory={searchParams.category}
        initialQuery={searchParams.q}
        initialTag={searchParams.tag}
      />
    </main>
  );
}
