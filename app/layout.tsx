// src/app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import CategoriesDropdown from '@/components/CategoriesDropdown';
import FeatureGrid from '@/components/FeatureGrid';

export const metadata = {
  title: 'My Dashboard',
  description: 'A modern dashboard layout using Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col mb-10">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="w-full h-full flex-1 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <SearchBar />
              <CategoriesDropdown />
            </div>
            <div className="flex-1 flex flex-col">
              <FeatureGrid />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
