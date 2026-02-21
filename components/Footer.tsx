import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterItem {
  label: string;
  href: string;
}

interface Props {
  title: string;
  subtitle: string;
  items: FooterItem[];
  services: FooterItem[];
  contactItems: string[];
  hours: string[];
  socialItems: FooterItem[];
}

export default function Footer({
  title,
  subtitle,
  items,
  services,
  contactItems,
  hours,
  socialItems,
}: Props) {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="text-2xl font-bold uppercase tracking-widest">{title}</div>
          <p className="text-sm text-white/70">{subtitle}</p>
          <div className="flex items-center gap-4">
            {socialItems.map((item) => {
              const Icon =
                item.label === "Instagram"
                  ? Instagram
                  : item.label === "YouTube"
                  ? Youtube
                  : Facebook;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#D62828] hover:text-[#D62828]"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[#D62828]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-[#D62828]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-[#D62828]" />
              <span>{contactItems[0]}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#D62828]" />
              <span>{contactItems[1]}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#D62828]" />
              <span>{contactItems[2]}</span>
            </li>
          </ul>
          <div className="space-y-2 pt-2 text-sm text-white/70">
            <div className="flex items-center gap-2 text-white">
              <Clock className="h-4 w-4 text-[#D62828]" />
              <span className="font-semibold uppercase tracking-wider">Hours</span>
            </div>
            {hours.map((hour) => (
              <div key={hour}>{hour}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/60 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-xs text-white/60 md:px-6">
          <span>© {new Date().getFullYear()} {title}. All rights reserved.</span>
          <span>Performance. Precision. Shine.</span>
        </div>
      </div>
    </footer>
  );
}
