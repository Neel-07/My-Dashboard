"use client";

import React, { useState } from 'react';

interface CategoriesDropdownProps {
  onSelectCategory: (category: string) => void;
}

const CategoriesDropdown: React.FC<CategoriesDropdownProps> = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="mt-10 ml-auto mb-0 p-2 border border-gray-300 rounded sm-max:ml-0,mb-4"
    >
      <option value="All Categories">All Categories</option>
      <option value="Business">Business</option>
      <option value="Sports">Sports</option>
      <option value="Health and Wellness">Health and Wellness</option>
    </select>
  );
};

export default CategoriesDropdown;
