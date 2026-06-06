"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

const sizes = ["XS", "S", "M", "L", "XL"];

export function AddToCart({ product }: { product: Product }) {
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function addToCart() {
    const rawCart = window.localStorage.getItem("tallgirl-cart");
    const cart = rawCart ? JSON.parse(rawCart) : [];
    cart.push({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      quantity
    });
    window.localStorage.setItem("tallgirl-cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("tallgirl-cart-updated"));
    setAdded(true);
  }

  return (
    <div className="mt-10 space-y-8">
      <div>
        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-ink/50">
          Size
        </p>
        <div className="grid grid-cols-5 border border-ink">
          {sizes.map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`h-12 border-r border-ink text-[12px] uppercase tracking-[0.14em] last:border-r-0 ${
                size === item ? "bg-ink text-white" : "bg-transparent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-ink/50">
          Quantity
        </p>
        <div className="flex h-12 w-40 items-center justify-between border border-ink">
          <button
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="h-full w-12 text-xl"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="text-[13px]">{quantity}</span>
          <button
            onClick={() => setQuantity((value) => value + 1)}
            className="h-full w-12 text-xl"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={addToCart}
        className="h-14 w-full bg-ink text-[12px] uppercase tracking-[0.18em] text-white hover:bg-ink/80"
      >
        {added ? "Added To Cart" : "Add To Cart"}
      </button>
    </div>
  );
}
