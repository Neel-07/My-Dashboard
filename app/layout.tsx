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
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh); // Toggle the refresh state
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false); // Close sidebar
  };

  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col overflow-x-hidden"> {/* Updated to prevent overflow */}
        <Navbar onHamburgerClick={handleHamburgerClick} />
        <div className="flex flex-1 relative">
          <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} onRefresh={handleRefresh} />
          <main className={`w-full h-full flex-1 p-4 flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : ''}`}>
            <div className="flex justify-between items-center mb-4 sm-max:flex-col ">
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
