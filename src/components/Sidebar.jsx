import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Image, CreditCard, History, HelpCircle, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <nav className="py-4">
      <ul className="space-y-2">
        <SidebarItem to="/" icon={<Home />} text="Home" />
        <SidebarItem to="/image-list" icon={<Image />} text="Image List" />
        <SidebarItem to="/wallet" icon={<CreditCard />} text="Wallet" />
        <SidebarItem to="/history" icon={<History />} text="Transaction History" />
        <SidebarItem to="/help-support" icon={<HelpCircle />} text="Help & Support" />
        <SidebarItem to="/settings" icon={<Settings />} text="Settings" />
      </ul>
    </nav>
  );
};

const SidebarItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  </li>
);

export default Sidebar;