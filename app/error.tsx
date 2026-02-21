'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-lg text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Something went wrong</h1>
        <p className="text-mutedForeground">{error.message}</p>
      </div>
    </div>
  );
}
