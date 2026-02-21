import Image from 'next/image';
import { BadgeCheck, Award, Thermometer, ThumbsUp, Droplet, Sparkles, Car, Paintbrush, Shield, Layers, MapPin, Phone, Mail } from 'lucide-react';
import HeroImage from '@/components/blocks/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import StatCounter from '@/components/StatCounter';
import GalleryGrid from '@/components/GalleryGrid';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';
import { Card } from '@/components/ui/card';

const stats = [
  { value: '5,000+', label: 'Cars Detailed' },
  { value: '10+', label: 'Years Experience' },
  { value: '4.9', label: 'Star Rating' },
];

const services = [
  {
    name: 'Express Wash',
    price: '$49',
    duration: '30 min',
    description: 'Hand wash, wheel cleaning, tire shine, and window cleaning',
    icon: Droplet,
  },
  {
    name: 'Interior Detail',
    price: '$149',
    duration: '2 hours',
    description: 'Deep vacuum, leather conditioning, dashboard treatment, and odor elimination',
    icon: Sparkles,
  },
  {
    name: 'Full Detail',
    price: '$249',
    duration: '4 hours',
    description: 'Complete interior and exterior detail with clay bar treatment and hand wax',
    icon: Car,
  },
  {
    name: 'Paint Correction',
    price: '$399+',
    duration: '6-8 hours',
    description: 'Multi-stage polish to remove swirls, scratches, and oxidation',
    icon: Paintbrush,
  },
  {
    name: 'Ceramic Coating',
    price: '$799+',
    duration: '1-2 days',
    description: 'Professional-grade 9H ceramic coating with 5-year warranty',
    icon: Shield,
  },
  {
    name: 'PPF Installation',
    price: '$1,499+',
    duration: '2-3 days',
    description: 'Paint protection film for high-impact areas or full vehicle wrap',
    icon: Layers,
  },
];

const features = [
  {
    title: 'Premium Products Only',
    description:
      'We use only top-tier products from Gtechniq, Gyeon, and Chemical Guys for lasting results',
    icon: BadgeCheck,
  },
  {
    title: 'Certified Technicians',
    description: 'Our team is IDA certified with specialized training in paint correction and ceramic coatings',
    icon: Award,
  },
  {
    title: 'Climate-Controlled Bay',
    description: 'Our 4,000 sq ft facility ensures perfect conditions for flawless finishes year-round',
    icon: Thermometer,
  },
  {
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll re-detail your vehicle at no charge. That's the Detailing Bros promise",
    icon: ThumbsUp,
  },
];

const galleryItems = [
  { imageSrc: '/images/gallery.jpg', alt: 'Black Porsche 911 ceramic coating', caption: 'Porsche 911 GT3 - Full Ceramic Coating' },
  { imageSrc: '/images/gallery.jpg', alt: 'Red Ferrari interior detail', caption: 'Ferrari 488 - Complete Interior Restoration' },
  { imageSrc: '/images/gallery.jpg', alt: 'White BMW paint correction', caption: 'BMW M4 - 3-Stage Paint Correction' },
  { imageSrc: '/images/gallery.jpg', alt: 'Blue Ford Mustang full detail', caption: 'Mustang GT - Show Car Prep' },
  { imageSrc: '/images/gallery.jpg', alt: 'Mercedes SUV PPF installation', caption: 'Mercedes GLE - Full Front PPF' },
  { imageSrc: '/images/gallery.jpg', alt: 'Tesla Model S detail', caption: 'Tesla Model S - New Car Protection Package' },
];

const packages = [
  {
    name: 'Bronze',
    price: '$149',
    description: 'Essential maintenance detail',
    features: ['Hand wash & dry', 'Wheel & tire cleaning', 'Interior vacuum', 'Dashboard wipe down', 'Window cleaning'],
    popular: false,
  },
  {
    name: 'Silver',
    price: '$299',
    description: 'Complete refresh package',
    features: [
      'Everything in Bronze',
      'Clay bar treatment',
      'One-step polish',
      'Carnauba wax',
      'Leather conditioning',
      'Engine bay cleaning',
    ],
    popular: true,
  },
  {
    name: 'Gold',
    price: '$549',
    description: 'Ultimate showroom finish',
    features: [
      'Everything in Silver',
      'Two-stage paint correction',
      '6-month sealant',
      'Headlight restoration',
      'Trim restoration',
      'Odor elimination',
    ],
    popular: false,
  },
];

const testimonials = [
  {
    name: 'Marcus Johnson',
    vehicle: '2023 Porsche 911 Turbo S',
    rating: 5,
    quote:
      "I've tried every detailer in town, and Detailing Bros is on another level. The ceramic coating on my 911 is flawless—water beads off like magic even after 6 months.",
    avatar: 'MJ',
  },
  {
    name: 'Sarah Chen',
    vehicle: '2022 BMW X5',
    rating: 5,
    quote:
      "They got my kids' mess out of my X5 and made it look brand new. The interior smells amazing and the leather is so soft. Worth every penny!",
    avatar: 'SC',
  },
  {
    name: 'David Rodriguez',
    vehicle: '1967 Ford Mustang',
    rating: 5,
    quote:
      'Trusted them with my classic Mustang for a show prep. They treated it with more care than I do. Took first place at the car show thanks to their work!',
    avatar: 'DR',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen">
        <HeroImage
          title="Your Ride Deserves the Best"
          subtitle="Professional auto detailing that transforms your vehicle. From basic washes to full ceramic coatings, Detailing Bros delivers showroom-quality results every time."
          primaryCtaLabel="Book Your Detail"
          primaryCtaHref="/contact"
          secondaryCtaLabel="View Services"
          secondaryCtaHref="/services"
          imageSrc="/images/hero.jpg"
        />
        <div className="bg-black text-white py-12">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading
            title="Our Detailing Services"
            subtitle="From quick exterior washes to complete paint correction and ceramic coating packages"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {services.map((service) => (
              <ServiceCard
                key={service.name}
                title={service.name}
                subtitle={service.duration}
                price={service.price}
                duration={service.duration}
                description={service.description}
                icon={<service.icon className="h-6 w-6" />}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading
            title="Why Choose Detailing Bros"
            subtitle="We're not just detailers—we're car enthusiasts who treat every vehicle like our own"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {features.map((feature) => (
              <Card key={feature.title} className="rounded-lg bg-card border border-border p-6 space-y-4">
                <feature.icon className="h-10 w-10 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading
            title="Our Recent Work"
            subtitle="Before and after transformations that speak for themselves"
          />
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading
            title="Detailing Packages"
            subtitle="Choose the perfect package for your vehicle's needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {packages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
                ctaLabel="Select Package"
                ctaHref="/contact"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading
            title="What Our Customers Say"
            subtitle="Join thousands of satisfied car owners"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                vehicle={testimonial.vehicle}
                rating={testimonial.rating}
                quote={testimonial.quote}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            title="Ready to Transform Your Ride?"
            subtitle="Book your appointment today and experience the Detailing Bros difference. First-time customers get 15% off any service."
            primaryCtaLabel="Schedule Now"
            primaryCtaHref="/contact"
            secondaryCtaLabel="Call (555) 234-5678"
            secondaryCtaHref="tel:5552345678"
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <SectionHeading title="Visit Our Shop" subtitle="Stop by our facility and see the Detailing Bros difference." />
            <div className="space-y-4 text-base md:text-lg">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>4521 Motor Avenue, Los Angeles, CA 90034</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@detailingbros.com</span>
              </div>
              <div>
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 5:00 PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
          <Card className="rounded-lg overflow-hidden border border-border">
            <div className="relative h-80 w-full">
              <Image src="/images/gallery.jpg" alt="Detailing Bros shop" fill className="object-cover" />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
