export default function AboutPage() {
  return (
    <main className="px-6 pb-24 pt-28 lg:px-12">
      <section className="grid gap-12 border-b thin-rule pb-20 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Brand System
          </p>
          <h1 className="magazine-type text-6xl leading-none md:text-8xl">
            Built around height.
          </h1>
        </div>
        <div className="max-w-2xl self-end text-sm leading-8 text-ink/65">
          <p>
            TallGirl Fashion is a concept womenswear store focused on tall
            proportions: longer inseams, longer sleeves, adjusted rises, and
            quieter silhouettes. The interface is built to feel editorial while
            still supporting core commerce flows.
          </p>
        </div>
      </section>

      <section className="grid gap-10 border-b thin-rule py-16 md:grid-cols-3">
        {[
          ["01", "Proportion first", "Every product includes a height-fit range and fit notes."],
          ["02", "Editorial commerce", "Large imagery, restrained navigation, and minimal product metadata."],
          ["03", "Desktop focused", "Wide layouts, four-column product grids, and fixed navigation."]
        ].map(([number, title, body]) => (
          <div key={number}>
            <p className="mb-8 text-[12px] uppercase tracking-[0.16em] text-ink/35">
              {number}
            </p>
            <h2 className="mb-4 text-[13px] uppercase tracking-[0.14em]">
              {title}
            </h2>
            <p className="text-sm leading-7 text-ink/60">{body}</p>
          </div>
        ))}
      </section>

      <section id="shipping" className="grid gap-10 border-b thin-rule py-16 lg:grid-cols-2">
        <h2 className="magazine-type text-5xl leading-none">Shipping</h2>
        <p className="max-w-xl text-sm leading-8 text-ink/65">
          Standard shipping is estimated at 3-6 business days. This demo
          presents a realistic customer-care section so the store feels like a
          complete ecommerce experience.
        </p>
      </section>

      <section id="returns" className="grid gap-10 py-16 lg:grid-cols-2">
        <h2 className="magazine-type text-5xl leading-none">Returns</h2>
        <p className="max-w-xl text-sm leading-8 text-ink/65">
          Returns are accepted within 30 days for unworn items. Fit guidance is
          surfaced on listing and detail pages to reduce size uncertainty.
        </p>
      </section>
    </main>
  );
}
