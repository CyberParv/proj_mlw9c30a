import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  vehicle?: string;
  rating: number;
  quote: string;
  avatar?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({ name, vehicle, rating, quote, avatar }: Props) {
  return (
    <Card className="rounded-lg border border-white/10 bg-[#0A0A0A] text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold text-white">
            {avatar ? avatar : getInitials(name)}
          </div>
          <div>
            <div className="text-lg font-bold uppercase tracking-wider">{name}</div>
            {vehicle && <div className="text-xs uppercase tracking-widest text-white/60">{vehicle}</div>}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn("h-4 w-4", index < rating ? "fill-[#D62828] text-[#D62828]" : "text-white/30")}
            />
          ))}
        </div>
        <p className="mt-4 text-sm text-white/70">{quote}</p>
      </CardContent>
    </Card>
  );
}
