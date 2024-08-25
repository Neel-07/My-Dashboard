import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-18 bg-indigo-500 flex items-center justify-center py-4 px-8 shadow-md">
      <h1 className="text-2xl font-bold text-white">My DashBoard</h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;

