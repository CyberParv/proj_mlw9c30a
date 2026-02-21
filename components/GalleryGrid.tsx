'use client';
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  imageSrc?: string;
  src?: string;
  alt: string;
  caption?: string;
}

interface Props {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div className="relative">
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {items.map((item) => (
          <button
            key={item.imageSrc || item.src}
            onClick={() => setSelected(item)}
            className="group mb-4 w-full overflow-hidden rounded-lg border border-white/10 bg-black/5 text-left"
          >
            <div className="relative">
              <Image
                src={item.imageSrc ?? item.src ?? ""}
                alt={item.alt}
                width={800}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-sm font-bold uppercase tracking-widest">{item.alt}</div>
                {item.caption && (
                  <div className="text-xs uppercase tracking-wider text-white/70">{item.caption}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 transition-opacity",
          selected ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {selected && (
          <div className="relative w-full max-w-4xl">
            <button
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selected.imageSrc ?? selected.src ?? ""}
              alt={selected.alt}
              width={1600}
              height={900}
              className="w-full rounded-lg object-cover"
            />
            <div className="mt-4 text-center text-white">
              <div className="text-lg font-bold uppercase tracking-wider">{selected.alt}</div>
              {selected.caption && (
                <div className="text-sm uppercase tracking-widest text-white/70">{selected.caption}</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
