"use client"; // This marks the component as a Client Component

import React, { useState } from 'react';

const CategoriesDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      className="mt-10 ml-96  p-2 border border-gray-300 rounded w-48 md:w-56 lg:w-64"
    >
      <option>All Categories</option>
      <option>Business</option>
      <option>Sports</option>
      <option>Technology</option>
    </select>
  );
};

export default CategoriesDropdown;
