import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, subtitle, price, duration, description, icon }: Props) {
  return (
    <Card
      className={cn(
        "group rounded-lg border border-white/10 bg-[#0A0A0A] text-white transition-all duration-300 hover:border-[#D62828]"
      )}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/5 text-[#D62828]">
            {icon}
          </div>
          <Badge className="bg-[#D62828] text-white">{price}</Badge>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="text-xl font-bold uppercase tracking-wider">{title}</h3>
          <p className="text-sm uppercase tracking-widest text-white/60">{subtitle}</p>
        </div>
        <p className="mt-4 text-sm text-white/70">{description}</p>
        <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">
          Duration: {duration}
        </div>
      </CardContent>
    </Card>
  );
}
