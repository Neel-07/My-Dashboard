import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar: React.FC<{ onHamburgerClick: () => void }> = ({ onHamburgerClick }) => {
  return (
    <nav className="w-full h-18 bg-indigo-500 flex items-center justify-between py-4 px-8 shadow-md">
      <div className="flex items-center space-x-4">
        <button
          onClick={onHamburgerClick}
          className="text-white md:hidden"
        >
          <GiHamburgerMenu size={24} />
        </button>
        <h1 className="text-2xl font-bold text-white sm-max:text-xl ">My Dashboard</h1>
      </div>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
