"use client";

import { useState } from "react";
import { Gem, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  images: string[];
  alt: string;
}

export function ProductImageGallery({ images, alt }: Props) {
  const [selected, setSelected] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-[4/3] bg-gradient-to-br from-gold/10 via-card to-card rounded-lg flex items-center justify-center">
        <Gem className="h-20 w-20 text-gold/20" />
      </div>
    );
  }

  const prev = () => setSelected((s) => (s === 0 ? images.length - 1 : s - 1));
  const next = () => setSelected((s) => (s === images.length - 1 ? 0 : s + 1));

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-[4/3] bg-card rounded-lg overflow-hidden mb-4 group">
        <img
          src={images[selected]}
          alt={`${alt} ${selected + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Arrow navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === selected
                      ? "w-4 bg-gold"
                      : "w-1.5 bg-white/60 hover:bg-white"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "aspect-square bg-card border-2 rounded overflow-hidden cursor-pointer transition-all hover:border-gold/60",
                i === selected
                  ? "border-gold"
                  : "border-border"
              )}
            >
              <img
                src={img}
                alt={`${alt} thumb ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
