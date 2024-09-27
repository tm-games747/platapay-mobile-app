import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from './Sidebar';

const Header = () => {
  return (
    <header className="bg-[#3B006A] text-white p-4 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button className="mr-4 md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <Link to="/" className="h-8 w-32 relative">
          <img
            src="/IMG_1878.jpeg"
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