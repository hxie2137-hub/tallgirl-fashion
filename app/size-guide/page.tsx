const sizeRows = [
  ["XS", "170-176", "78-84", "60-66", "109", "58"],
  ["S", "172-180", "84-90", "66-72", "110", "59"],
  ["M", "174-184", "90-96", "72-78", "111", "60"],
  ["L", "176-188", "96-102", "78-86", "112", "61"],
  ["XL", "178-190", "102-110", "86-94", "113", "62"]
];

const fitPrinciples = [
  "Longer sleeves without widening the shoulder.",
  "Extended inseams with full-length break.",
  "Adjusted rise and torso length for taller proportions.",
  "Height-fit notes surfaced before purchase."
];

export default function SizeGuidePage() {
  return (
    <main className="px-6 pb-24 pt-28 lg:px-12">
      <section className="mb-16 grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Fit Reference
          </p>
          <h1 className="magazine-type text-6xl leading-none md:text-8xl">
            Size Guide
          </h1>
        </div>
        <p className="max-w-xl self-end text-sm leading-8 text-ink/65">
          The chart is designed for taller frames and combines standard body
          measurements with garment length references.
        </p>
      </section>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-t border-ink text-left text-[12px] uppercase tracking-[0.12em]">
          <thead className="text-ink/45">
            <tr>
              <th className="py-4 font-light">Size</th>
              <th className="py-4 font-light">Height</th>
              <th className="py-4 font-light">Bust</th>
              <th className="py-4 font-light">Waist</th>
              <th className="py-4 font-light">Trouser Length</th>
              <th className="py-4 font-light">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            {sizeRows.map((row) => (
              <tr key={row[0]} className="border-t thin-rule">
                {row.map((cell, index) => (
                  <td key={`${row[0]}-${index}`} className="py-5">
                    {index === 0 ? cell : `${cell} cm`}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="mt-20 grid gap-8 border-t thin-rule pt-12 md:grid-cols-4">
        {fitPrinciples.map((principle, index) => (
          <div key={principle}>
            <p className="mb-8 text-[12px] uppercase tracking-[0.16em] text-ink/35">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-sm leading-7 text-ink/65">{principle}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
