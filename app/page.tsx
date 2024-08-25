// src/app/page.tsx
import FeatureGrid from '@/components/FeatureGrid';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <FeatureGrid />
    </div>
  );
}
