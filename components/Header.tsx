
import React, { useState } from 'react';
import type { Tab } from '../types';
import { ChurchIcon, MenuIcon, XIcon } from './Icons';

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  churchName: string;
}

const NavLink: React.FC<{
  label: Tab;
  activeTab: Tab;
  onClick: (tab: Tab) => void;
  isMobile?: boolean;
}> = ({ label, activeTab, onClick, isMobile = false }) => {
  const baseClasses = "cursor-pointer font-medium transition-colors duration-200";
  const activeClasses = "text-secondary";
  const inactiveClasses = "text-white hover:text-secondary";
  const mobileClasses = "block py-2 px-4 text-lg";

  return (
    <li
      className={`${baseClasses} ${label === activeTab ? activeClasses : inactiveClasses} ${isMobile ? mobileClasses : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
};

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, churchName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (tab: Tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const navItems: Tab[] = ['Home', 'Calendar', 'About', 'Notifications'];

  return (
    <header className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('Home')}>
            <ChurchIcon className="w-8 h-8 text-secondary" />
            <span className="text-xl font-bold text-white tracking-tight">{churchName}</span>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map(item => (
                <NavLink key={item} label={item} activeTab={activeTab} onClick={handleNavClick} />
              ))}
            </ul>
          </nav>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden bg-primary pb-4">
          <ul>
            {navItems.map(item => (
              <NavLink key={item} label={item} activeTab={activeTab} onClick={handleNavClick} isMobile />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
