import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className=" mt-10  p-2 border border-gray-300 rounded w-48 md:w-56 lg:w-64"
    />
  );
};

export default SearchBar;
