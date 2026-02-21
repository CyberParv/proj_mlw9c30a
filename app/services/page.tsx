import { Card } from '@/components/ui/card';
import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const serviceCategories = [
  {
    name: 'Exterior Services',
    services: [
      {
        name: 'Hand Wash & Dry',
        price: '$35',
        description: 'Two-bucket method wash with pH-neutral soap, microfiber dry, and tire dressing',
      },
      { name: 'Clay Bar Treatment', price: '$75', description: 'Removes embedded contaminants for a glass-smooth finish' },
      { name: 'One-Step Polish', price: '$199', description: 'Light paint correction to remove minor swirls and enhance gloss' },
      { name: 'Two-Step Paint Correction', price: '$399', description: 'Compound and polish to remove moderate scratches and swirls' },
      { name: 'Multi-Stage Correction', price: '$599+', description: 'Full paint restoration for heavily damaged or neglected paint' },
    ],
  },
  {
    name: 'Interior Services',
    services: [
      { name: 'Interior Vacuum & Wipe', price: '$49', description: 'Thorough vacuum, dashboard and console wipe down' },
      { name: 'Deep Interior Clean', price: '$149', description: 'Steam cleaning, leather conditioning, carpet shampooing' },
      { name: 'Odor Elimination', price: '$99', description: 'Ozone treatment to permanently remove smoke, pet, and food odors' },
    ],
  },
  {
    name: 'Protection Services',
    services: [
      { name: 'Carnauba Wax', price: '$99', description: 'Hand-applied premium wax with 2-3 month durability' },
      { name: 'Paint Sealant', price: '$149', description: 'Synthetic protection lasting 6-8 months' },
      { name: 'Ceramic Coating', price: '$799+', description: 'Professional 9H coating with multi-year protection' },
      { name: 'Paint Protection Film', price: '$499+', description: 'Self-healing film for rock chip and scratch protection' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="min-h-[70vh]">
        <HeroImage
          title="Professional Detailing Services"
          subtitle="From daily drivers to exotic supercars, we have the expertise and equipment to make your vehicle shine"
          primaryCtaLabel="Get a Quote"
          primaryCtaHref="/contact"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading title="Service Menu" subtitle="Comprehensive detailing options tailored to your vehicle." />
          <div className="space-y-10">
            {serviceCategories.map((category) => (
              <div key={category.name} className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  {category.services.map((service) => (
                    <Card key={service.name} className="rounded-lg bg-card border border-border p-6 space-y-3">
                      <div className="flex items-center justify-between text-lg font-semibold text-white">
                        <span>{service.name}</span>
                        <span className="text-primary">{service.price}</span>
                      </div>
                      <p className="text-mutedForeground">{service.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6">
          <CTABanner
            title="Not Sure What You Need?"
            subtitle="Bring your vehicle in for a free inspection and we'll recommend the perfect service package"
            primaryCtaLabel="Book Free Inspection"
            primaryCtaHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
