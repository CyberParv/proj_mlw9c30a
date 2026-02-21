import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="space-y-3">
      <h2 className={cn("text-3xl font-bold uppercase tracking-widest text-white md:text-4xl")}>
        {title}
      </h2>
      {subtitle && <p className="max-w-2xl text-sm text-white/70 md:text-base">{subtitle}</p>}
      <div className="h-1 w-16 rounded-full bg-[#D62828]" />
    </div>
  );
}
