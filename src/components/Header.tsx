import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

interface HeaderProps {
  showSocialIcons?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSocialIcons = false }) => {
  const handleHomeClick = () => {
    // Scroll to top smoothly or navigate to home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassy background with blur effect - less translucent */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-[#D4B896]/30"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Moved much further to the left on desktop */}
          <div className="lg:-ml-12">
            <button
              onClick={handleHomeClick}
              className="text-[#D4B896] hover:text-white font-light text-sm lg:text-base tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer bg-transparent border-none outline-none focus:outline-none active:outline-none"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Aatreyee Chatterjee
            </button>
          </div>

          {/* Social Icons - Show on mobile/tablet always, or on desktop when showSocialIcons is true */}
          <div className={`flex items-center gap-4 transition-all duration-500 ${
            showSocialIcons ? 'xl:flex' : 'xl:hidden'
          }`}>
            <a
              href="https://www.linkedin.com/in/aatreyee-chatterjee/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/thisisreyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Github className="w-4 h-4 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;