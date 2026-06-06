"use client";

import { useState } from "react";

export function FashionImage({
  src,
  alt,
  className = "",
  fallbackLabel = "TallGirl"
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-stone text-[11px] uppercase tracking-[0.2em] text-ink/45 ${className}`}
        role="img"
        aria-label={alt}
      >
        {fallbackLabel}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
