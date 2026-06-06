"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FashionImage } from "@/components/FashionImage";

type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
};

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const rawCart = window.localStorage.getItem("tallgirl-cart");
    setItems(rawCart ? JSON.parse(rawCart) : []);
  }, []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  function clearCart() {
    window.localStorage.removeItem("tallgirl-cart");
    setItems([]);
  }

  return (
    <main className="min-h-screen px-6 pb-24 pt-28 lg:px-12">
      <div className="mb-12 flex items-end justify-between border-b thin-rule pb-8">
        <div>
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-ink/50">
            TallGirl Fashion
          </p>
          <h1 className="magazine-type text-6xl leading-none md:text-8xl">
            Cart
          </h1>
        </div>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="border-b border-ink pb-1 text-[12px] uppercase tracking-[0.14em]"
          >
            Clear
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-28 text-center">
          <p className="mb-8 text-[12px] uppercase tracking-[0.16em] text-ink/50">
            Your cart is empty
          </p>
          <Link
            href="/products"
            className="border-b border-ink pb-1 text-[12px] uppercase tracking-[0.14em]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 xl:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={`${item.id}-${item.size}-${index}`}
                className="grid grid-cols-[120px_1fr_auto] gap-6 border-b thin-rule pb-8"
              >
                <FashionImage
                  src={item.image}
                  alt={item.name}
                  className="aspect-[3/4] w-full object-cover"
                  fallbackLabel="TallGirl"
                />
                <div className="text-[12px] uppercase tracking-[0.12em]">
                  <Link href={`/products/${item.slug}`}>{item.name}</Link>
                  <p className="mt-3 text-ink/50">Size {item.size}</p>
                  <p className="mt-1 text-ink/50">Qty {item.quantity}</p>
                </div>
                <p className="text-[12px] uppercase tracking-[0.12em]">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
          <aside className="self-start border-t border-ink pt-6">
            <div className="mb-8 flex justify-between text-[12px] uppercase tracking-[0.14em]">
              <span>Subtotal</span>
              <span>${total}</span>
            </div>
            <button className="h-14 w-full bg-ink text-[12px] uppercase tracking-[0.18em] text-white">
              Checkout
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
