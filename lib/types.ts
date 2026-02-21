export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  price: string;
  duration?: string;
  description: string;
  icon?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface GalleryImage {
  src?: string;
  alt: string;
  caption?: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  vehicle?: string;
  rating: number;
  quote: string;
  avatar?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "tel" | "select" | "date" | "textarea";
  label: string;
  required?: boolean;
  options?: string[];
}
