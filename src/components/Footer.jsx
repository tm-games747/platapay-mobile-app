import React from 'react';
import { Home, CreditCard, QrCode, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="md:hidden bg-[#3B006A] text-white py-2 fixed bottom-0 left-0 right-0 shadow-lg">
      <nav className="flex justify-around items-center relative">
        <Link to="/" className="flex flex-col items-center p-2">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/cards" className="flex flex-col items-center p-2">
          <CreditCard className="w-6 h-6" />
          <span className="text-xs mt-1">Cards</span>
        </Link>
        <Link to="/scan" className="flex flex-col items-center p-2 relative">
          <div className="absolute -top-8 bg-[#4B0082] rounded-full p-4">
            <QrCode className="w-8 h-8" />
          </div>
          <span className="text-xs mt-8">Scan</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center p-2">
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center p-2">
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;