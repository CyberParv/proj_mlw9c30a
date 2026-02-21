'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}

export default function Navbar({ title, items, ctaLabel, ctaHref }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:h-20 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="text-lg font-bold uppercase tracking-widest text-white">{title}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-white md:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[#D62828]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button className="rounded-md bg-[#D62828] px-8 py-2 font-bold uppercase tracking-wider text-white hover:bg-[#D62828]/90">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          aria-label="Open navigation"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className={cn("fixed inset-0 z-50 transition-opacity", open ? "opacity-100" : "pointer-events-none opacity-0")}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-72 bg-[#0A0A0A] p-6 shadow-xl transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold uppercase tracking-widest text-white">{title}</span>
            <button aria-label="Close navigation" onClick={() => setOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider text-white">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#D62828]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <Button className="w-full rounded-md bg-[#D62828] px-6 py-2 font-bold uppercase tracking-wider text-white hover:bg-[#D62828]/90">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
