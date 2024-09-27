import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#3B006A] text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center">
        <button className="mr-4 md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <Link to="/" className="h-8 w-32 relative">
          <img
            src="/images/logo.png"
            alt="Platapay Logo"
            className="h-full w-auto object-contain"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;