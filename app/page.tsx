import Link from "next/link";
import { FashionImage } from "@/components/FashionImage";
import { HomeProductSection } from "@/components/HomeProductSection";
import { products } from "@/lib/products";

const heroImage =
  "/images/hero.png";

const lookbookImages = [
  "/images/lookbook.png",
  "/images/street-coat.png",
  "/images/gallery-dress.png"
];

const sizeRows = [
  ["XS", "170-176", "78-84", "60-66", "109"],
  ["S", "172-180", "84-90", "66-72", "110"],
  ["M", "174-184", "90-96", "72-78", "111"],
  ["L", "176-188", "96-102", "78-86", "112"],
  ["XL", "178-190", "102-110", "86-94", "113"]
];

export default function Home() {
  const newArrivals = products.filter((product) => product.tag === "New Arrival").slice(0, 4);
  const tallJeans = products.filter((product) => product.category === "Tall Jeans").slice(0, 4);
  const bestSellers = products.filter((product) => product.tag === "Best Seller").slice(0, 4);

  return (
    <main>
      <section className="bg-paper pt-16">
        <div className="grid min-h-[calc(100vh-4rem)] grid-rows-[1fr_auto]">
          <div className="relative overflow-hidden border-b thin-rule">
            <FashionImage
              src={heroImage}
              alt="TallGirl Fashion editorial model wearing minimal womenswear"
              className="h-[62vh] min-h-[520px] w-full object-cover object-[center_18%]"
              fallbackLabel="TallGirl Fashion"
            />
          </div>
          <div className="grid gap-8 px-6 py-10 lg:grid-cols-[1fr_1.1fr_auto] lg:items-end lg:px-12">
            <p className="text-[12px] uppercase tracking-[0.22em] text-ink/55">
              DESIGNED FOR TALL WOMEN
            </p>
            <h1 className="magazine-type max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              Longer cuts. Better proportions. Effortless style.
            </h1>
            <Link
              href="/products?tag=New%20Arrival"
              className="w-fit border-b border-ink pb-1 text-[12px] uppercase tracking-[0.18em]"
            >
              Shop New In
            </Link>
          </div>
        </div>
      </section>

      <HomeProductSection
        title="New Arrivals"
        subtitle="The latest proportions"
        products={newArrivals}
        href="/products?tag=New%20Arrival"
      />

      <section className="grid min-h-[560px] border-y thin-rule lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-6 py-20 lg:px-12">
          <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink/45">
            Tall proportions only
          </p>
          <h2 className="magazine-type max-w-2xl text-5xl leading-none md:text-7xl">
            Cut for height. Kept quiet.
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-7 text-ink/60">
            Extended sleeves, longer inseams, cleaner rises. Nothing decorative.
            Nothing accidental.
          </p>
        </div>
        <FashionImage
          src="/images/lookbook.png"
          alt="Black and white TallGirl Fashion studio portrait"
          className="h-full min-h-[520px] w-full object-cover grayscale"
          fallbackLabel="Tall Proportions"
        />
      </section>

      <HomeProductSection
        title="Tall Jeans"
        subtitle="Extended inseams"
        products={tallJeans}
        href="/products?category=Tall%20Jeans"
      />

      <section id="lookbook" className="px-6 py-20 lg:px-12">
        <div className="mb-8">
          <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Editorial styling
          </p>
          <h2 className="magazine-type text-5xl leading-none md:text-7xl">
            Lookbook
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr_1fr]">
          {lookbookImages.map((image, index) => (
            <FashionImage
              key={image}
              src={image}
              alt={`TallGirl Fashion lookbook ${index + 1}`}
              className={`w-full object-cover grayscale ${
                index === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
              }`}
              fallbackLabel="Lookbook"
            />
          ))}
        </div>
      </section>

      <section className="grid border-y thin-rule px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Size Guide
          </p>
          <h2 className="magazine-type text-5xl leading-none md:text-7xl">
            Tall fit.
          </h2>
        </div>
        <div className="mt-12 overflow-x-auto lg:mt-0">
          <table className="w-full min-w-[620px] border-t border-ink text-left text-[12px] uppercase tracking-[0.12em]">
            <thead className="text-ink/45">
              <tr>
                <th className="py-4 font-light">Size</th>
                <th className="py-4 font-light">Height</th>
                <th className="py-4 font-light">Bust</th>
                <th className="py-4 font-light">Waist</th>
                <th className="py-4 font-light">Trouser Length</th>
              </tr>
            </thead>
            <tbody>
              {sizeRows.map((row) => (
                <tr key={row[0]} className="border-t thin-rule">
                  {row.map((cell, index) => (
                    <td key={cell} className="py-5">
                      {index === 0 ? cell : `${cell} cm`}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <HomeProductSection
        title="Best Sellers"
        subtitle="Quiet essentials"
        products={bestSellers}
        href="/products?tag=Best%20Seller"
      />

      <section className="grid min-h-[420px] items-center border-t border-ink px-6 py-20 lg:grid-cols-[1fr_520px] lg:px-12">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Newsletter
          </p>
          <h2 className="magazine-type max-w-3xl text-5xl leading-none md:text-7xl">
            New lengths, first.
          </h2>
        </div>
        <form className="mt-12 lg:mt-0">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border-0 border-b border-ink bg-transparent py-4 text-[13px] uppercase tracking-[0.14em] outline-none placeholder:text-ink/45"
          />
          <button className="mt-6 border-b border-ink pb-1 text-[12px] uppercase tracking-[0.14em]">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
