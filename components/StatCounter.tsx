'use client';
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  value: string;
  label: string;
}

function parseValue(value: string) {
  const numeric = parseFloat(value.replace(/,/g, '').replace(/[^\d.]/g, ''));
  return isNaN(numeric) ? 0 : numeric;
}

export default function StatCounter({ value, label }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 60;
    const endValue = parseValue(value);
    const increment = endValue / totalFrames;

    const animate = () => {
      frame += 1;
      setCount(Math.min(Math.round(increment * frame), endValue));
      if (frame < totalFrames) {
        requestAnimationFrame(animate);
      }
    };

    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [value]);

  // Keep any non-numeric suffix (e.g. "+", etc.)
  const match = value.match(/[\d,.]+(.*)$/);
  const suffix = match ? match[1] : "";

  return (
    <div className={cn("text-center text-white")}>
      <div className="text-4xl font-bold uppercase tracking-tight text-[#D62828]">
        {count ? count.toLocaleString() : 0}
        {suffix}
      </div>
      <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/70">
        {label}
      </div>
    </div>
  );
}
