import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import HeroImage from '@/components/HeroImage';
import ContactForm from '@/components/ContactForm';
import SectionHeading from '@/components/SectionHeading';
import { Card } from '@/components/ui/card';

const contactFields = [
  { name: 'name', type: 'text', label: 'Your Name', required: true },
  { name: 'email', type: 'email', label: 'Email Address', required: true },
  { name: 'phone', type: 'tel', label: 'Phone Number', required: true },
  { name: 'vehicle', type: 'text', label: 'Vehicle (Year, Make, Model)', required: true },
  {
    name: 'service',
    type: 'select',
    label: 'Service Interested In',
    options: [
      'Express Wash',
      'Interior Detail',
      'Full Detail',
      'Paint Correction',
      'Ceramic Coating',
      'PPF Installation',
      'Not Sure - Need Consultation',
    ],
    required: true,
  },
  { name: 'preferredDate', type: 'date', label: 'Preferred Date', required: false },
  { name: 'message', type: 'textarea', label: 'Additional Details', required: false },
];

export default function ContactPage() {
  return (
    <main>
      <section className="min-h-[70vh]">
        <HeroImage
          title="Book Your Appointment"
          subtitle="Drop by, call, or fill out the form below. We'll get your vehicle scheduled ASAP."
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <SectionHeading title="Request an Appointment" subtitle="Tell us about your vehicle and we’ll reach out quickly." />
            <ContactForm fields={contactFields} submitLabel="Request Appointment" />
          </div>
          <Card className="rounded-lg bg-card border border-border p-8 space-y-6 text-white">
            <SectionHeading title="Contact Information" />
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
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <p>Free parking available in our lot</p>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="h-5 w-5 text-primary" />
              <span>@detailingbros</span>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="h-5 w-5 text-primary" />
              <span>DetailingBrosLA</span>
            </div>
            <div className="flex items-center gap-4">
              <Youtube className="h-5 w-5 text-primary" />
              <span>DetailingBros</span>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
