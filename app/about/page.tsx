import Image from 'next/image';
import HeroImage from '@/components/HeroImage';
import SectionHeading from '@/components/SectionHeading';
import TeamMemberCard from '@/components/TeamMemberCard';
import { Card } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Mike Ramirez',
    role: 'Co-Founder & Lead Detailer',
    bio: 'IDA Certified Detailer with 15+ years experience. Specializes in paint correction and ceramic coatings.',
    imageSrc: '/images/team.jpg',
  },
  {
    name: 'Tony Ramirez',
    role: 'Co-Founder & Operations',
    bio: "Manages day-to-day operations and customer relations. The friendly face you'll see when you drop off your car.",
    imageSrc: '/images/team.jpg',
  },
  {
    name: 'Carlos Mendez',
    role: 'Senior Detailer',
    bio: '5 years with Detailing Bros. Expert in interior restoration and leather repair.',
    imageSrc: '/images/team.jpg',
  },
  {
    name: 'Jessica Park',
    role: 'PPF Specialist',
    bio: 'Certified XPEL installer with precision skills for flawless film application.',
    imageSrc: '/images/team.jpg',
  },
];

const certifications = ['IDA Certified', 'Gtechniq Accredited', 'XPEL Certified Installer', 'Gyeon Certified', 'Chemical Guys Pro'];

export default function AboutPage() {
  return (
    <main>
      <section className="min-h-[70vh]">
        <HeroImage
          title="The Detailing Bros Story"
          subtitle="Two brothers, one passion: making cars look their absolute best"
          imageSrc="/images/hero.jpg"
        />
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <SectionHeading title="Started in a Garage, Now We're Here" />
            <p className="text-base md:text-lg">
              Detailing Bros was founded in 2014 by brothers Mike and Tony Ramirez. What started as weekend side work in their
              parents&apos; garage has grown into LA&apos;s most trusted detailing shop. Our obsession with perfection and genuine
              love for cars drives everything we do. We&apos;ve detailed everything from daily commuters to million-dollar exotics,
              and we treat every single vehicle with the same level of care and attention.
            </p>
          </div>
          <Card className="rounded-lg overflow-hidden border border-border">
            <div className="relative h-80 w-full">
              <Image src="/images/about.jpg" alt="Brothers working on a classic car in the shop" fill className="object-cover" />
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <SectionHeading title="Meet the Team" subtitle="Experienced specialists dedicated to elite results." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {teamMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <SectionHeading title="Certifications & Partners" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certifications.map((logo) => (
              <Card key={logo} className="rounded-lg bg-card border border-border p-6 text-center text-white">
                <span className="text-sm md:text-base font-semibold">{logo}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
