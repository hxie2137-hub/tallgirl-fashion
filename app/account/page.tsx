export default function AccountPage() {
  return (
    <main className="min-h-screen px-6 pb-24 pt-28 lg:px-12">
      <section className="grid gap-12 border-b thin-rule pb-16 xl:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Customer Account
          </p>
          <h1 className="magazine-type text-6xl leading-none md:text-8xl">
            Login
          </h1>
        </div>
        <p className="max-w-xl self-end text-sm leading-8 text-ink/65">
          This demo keeps checkout and account access as front-end flows while
          focusing on product discovery, fit guidance, and cart behavior.
        </p>
      </section>

      <section className="mx-auto max-w-xl py-16">
        <form className="space-y-8">
          <label className="block">
            <span className="mb-3 block text-[11px] uppercase tracking-[0.18em] text-ink/50">
              Email
            </span>
            <input
              type="email"
              className="w-full border-0 border-b border-ink bg-transparent py-4 text-[13px] uppercase tracking-[0.14em] outline-none"
            />
          </label>
          <label className="block">
            <span className="mb-3 block text-[11px] uppercase tracking-[0.18em] text-ink/50">
              Password
            </span>
            <input
              type="password"
              className="w-full border-0 border-b border-ink bg-transparent py-4 text-[13px] uppercase tracking-[0.14em] outline-none"
            />
          </label>
          <button
            type="button"
            className="h-14 w-full bg-ink text-[12px] uppercase tracking-[0.18em] text-white hover:bg-ink/80"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
