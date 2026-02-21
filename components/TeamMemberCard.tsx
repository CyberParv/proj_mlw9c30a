import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export default function TeamMemberCard({ name, role, bio, imageSrc }: Props) {
  return (
    <Card className="rounded-lg border border-white/10 bg-[#0A0A0A] text-white transition-transform duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <Image
          src={imageSrc}
          alt={name}
          width={800}
          height={600}
          className="h-56 w-full rounded-lg object-cover"
        />
        <div className="mt-4 space-y-2">
          <div className="text-lg font-bold uppercase tracking-wider">{name}</div>
          <div className="text-xs uppercase tracking-widest text-white/60">{role}</div>
          <p className="text-sm text-white/70">{bio}</p>
        </div>
      </CardContent>
    </Card>
  );
}
