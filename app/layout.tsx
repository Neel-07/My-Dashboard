// src/app/layout.tsx
'use client'; // Ensure this line is at the top

import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import CategoriesDropdown from '@/components/CategoriesDropdown';
import FeatureGrid from '@/components/FeatureGrid';
import { useState } from 'react';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [refresh, setRefresh] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh); // Toggle the refresh state
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col mb-10">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar onRefresh={handleRefresh} />
          <main className="w-full h-full flex-1 p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <SearchBar onSearch={handleSearch} />
              <CategoriesDropdown onSelectCategory={handleCategoryChange} />
            </div>
            <div className="flex-1 flex flex-col">
              <FeatureGrid searchTerm={searchTerm} category={category} refresh={refresh} />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
