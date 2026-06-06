"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const navItems = [
  { label: "NEW IN", href: "/products?tag=New%20Arrival" },
  { label: "JEANS", href: "/products?category=Tall%20Jeans" },
  { label: "TOPS", href: "/products?category=Long%20Sleeve%20Tops" },
  { label: "DRESSES", href: "/products?category=Maxi%20Dresses" },
  { label: "LOOKBOOK", href: "/#lookbook" },
  { label: "SALE", href: "/products?tag=Best%20Seller" }
];

export function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    function syncCartCount() {
      const rawCart = window.localStorage.getItem("tallgirl-cart");
      const cart = rawCart ? JSON.parse(rawCart) : [];
      const count = cart.reduce(
        (sum: number, item: { quantity?: number }) => sum + (item.quantity || 1),
        0
      );
      setCartCount(count);
    }

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener("focus", syncCartCount);
    window.addEventListener("tallgirl-cart-updated", syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener("focus", syncCartCount);
      window.removeEventListener("tallgirl-cart-updated", syncCartCount);
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b thin-rule bg-paper/88 backdrop-blur">
      <div className="grid h-16 grid-cols-[220px_1fr_300px] items-center px-8 text-[12px] uppercase tracking-[0.16em] text-ink lg:px-12">
        <Link href="/" className="text-[22px] font-light tracking-[0.18em]">
          TALLGIRL
        </Link>
        <nav className="hidden justify-center gap-8 xl:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:opacity-50">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-5">
          <form onSubmit={onSubmit} className="hidden items-center lg:flex">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              aria-label="Search products"
              className="w-24 border-0 border-b border-ink/25 bg-transparent px-0 py-1 text-[12px] uppercase tracking-[0.12em] outline-none placeholder:text-ink focus:w-36 focus:border-ink"
            />
          </form>
          <Link href="#" className="hover:opacity-50">
            Login
          </Link>
          <Link href="/cart" className="hover:opacity-50">
            Cart{cartCount > 0 ? ` ${cartCount}` : ""}
          </Link>
        </div>
      </div>
    </header>
  );
}
