import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  imageSrc?: string;
}

export default function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc = "/images/cta.jpg",
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0A0A0A]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Detailing Bros CTA"
          width={1600}
          height={900}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#D62828]/20" />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4 text-white">
          <h2 className="text-3xl font-bold uppercase tracking-widest md:text-4xl">{title}</h2>
          <p className="text-sm text-white/70 md:text-base">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="rounded-md bg-[#D62828] px-8 py-3 font-bold uppercase tracking-wider text-white hover:bg-[#D62828]/90">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
          <Button
            variant="outline"
            className={cn(
              "rounded-md border-white/40 px-8 py-3 font-bold uppercase tracking-wider text-white hover:border-[#D62828] hover:text-[#D62828]"
            )}
          >
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
