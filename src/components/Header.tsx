import React from 'react';
import { MagneticButton } from './SharedComponents';

const Header: React.FC<{ activeSection: string; scrollToSection: (id: string) => void }> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'services', label: 'Serviços' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3" data-hover>
          <img src="/inpulse_logo.png" alt="Inpulse" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === item.id ? 'bg-gradient-to-r from-red-600 to-red-500 text-white' : 'text-gray-600 hover:text-red-600 hover:bg-red-50'}`}
              data-hover
            >
              {item.label}
            </button>
          ))}
        </div>

        <MagneticButton className="hidden md:block" onClick={() => scrollToSection('contact')}>
          Contactar
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Header;
