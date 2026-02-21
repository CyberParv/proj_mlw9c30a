import './globals.css';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Detailing Bros | Premium Auto Detailing in Los Angeles',
  description:
    "LA's trusted auto detailing experts. Professional car wash, paint correction, ceramic coating, and PPF installation. Book your appointment today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={barlow.className}>
      <body className="bg-white text-foreground">
        <Navbar
          title="Detailing Bros"
          items={[
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book Now"
          ctaHref="/contact"
        />
        {children}
        <Footer
          title="Detailing Bros"
          subtitle="LA's trusted auto detailing experts"
          items={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          services={[
            { label: 'Express Wash', href: '/services' },
            { label: 'Ceramic Coating', href: '/services' },
          ]}
          contactItems={[
            '4521 Motor Avenue, Los Angeles, CA 90034',
            '(555) 234-5678',
            'info@detailingbros.com',
          ]}
          hours={[
            'Mon-Fri: 8AM-6PM',
            'Sat: 9AM-5PM',
            'Sun: Closed',
          ]}
          socialItems={[
            { label: 'Instagram', href: '#' },
            { label: 'Facebook', href: '#' },
            { label: 'YouTube', href: '#' },
          ]}
        />
      </body>
    </html>
  );
}
