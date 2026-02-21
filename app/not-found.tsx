import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">404 - Page Not Found</h1>
        <p className="text-mutedForeground">The page you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
