import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { FashionImage } from "@/components/FashionImage";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="px-6 pb-24 pt-24 lg:px-12">
      <div className="grid gap-12 xl:grid-cols-[1fr_480px]">
        <div className="grid gap-4 md:grid-cols-2">
          {product.images.map((image, index) => (
            <FashionImage
              key={image}
              src={image}
              alt={index === 0 ? product.name : `${product.name} alternate view`}
              className="aspect-[3/4] w-full object-cover grayscale"
              fallbackLabel={product.category}
            />
          ))}
        </div>

        <aside className="xl:sticky xl:top-24 xl:self-start">
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-8">
            <h1 className="magazine-type text-5xl leading-none md:text-7xl">
              {product.name}
            </h1>
            <p className="pt-2 text-[13px] uppercase tracking-[0.14em]">
              ${product.price}
            </p>
          </div>
          <p className="mt-8 max-w-md text-sm leading-7 text-ink/70">
            {product.description}
          </p>
          <p className="mt-6 border-y thin-rule py-4 text-[12px] uppercase tracking-[0.14em]">
            Height Fit: {product.heightFit}
          </p>
          <div className="mt-8">
            <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-ink/50">
              Fit Notes
            </p>
            <div className="grid border-t border-ink text-[12px] uppercase tracking-[0.12em]">
              {product.fitNotes.map((note) => (
                <p key={note} className="border-b thin-rule py-4">
                  {note}
                </p>
              ))}
            </div>
          </div>
          <details className="mt-8 border-y thin-rule py-5">
            <summary className="cursor-pointer text-[12px] uppercase tracking-[0.14em]">
              Size Guide
            </summary>
            <div className="mt-5 grid grid-cols-3 gap-y-3 text-[12px] uppercase tracking-[0.1em] text-ink/70">
              <span>XS 170-176</span>
              <span>S 172-180</span>
              <span>M 174-184</span>
              <span>L 176-188</span>
              <span>XL 178-190</span>
            </div>
          </details>
          <AddToCart product={product} />
        </aside>
      </div>
    </main>
  );
}
