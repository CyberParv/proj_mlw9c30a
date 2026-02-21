import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  popular = false,
}: Props) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0A] text-white",
        popular ? "ring-2 ring-[#D62828]" : ""
      )}
    >
      {popular && (
        <Badge className="absolute right-4 top-4 bg-[#D62828] text-white">Popular</Badge>
      )}
      <CardHeader className="space-y-4">
        <div className="text-sm font-semibold uppercase tracking-widest text-white/60">{name}</div>
        <div className="text-4xl font-bold uppercase tracking-tight text-white">{price}</div>
        <p className="text-sm text-white/70">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3 text-sm text-white/80">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[#D62828]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full rounded-md bg-[#D62828] px-6 py-2 font-bold uppercase tracking-wider text-white hover:bg-[#D62828]/90">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
