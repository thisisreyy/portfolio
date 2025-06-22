import React from 'react';
import { Linkedin, Github, Instagram } from 'lucide-react';

interface SocialSidebarProps {
  isVisible?: boolean;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ isVisible = true }) => {
  return (
    <div className={`fixed left-8 bottom-1/4 transform translate-y-1/2 z-50 flex-col gap-8 hidden xl:flex transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
    }`}>
      <a
        href="https://www.linkedin.com/in/aatreyee-chatterjee/"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
      >
        <Linkedin className="w-7 h-7 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href="https://github.com/thisisreyy"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
      >
        <Github className="w-7 h-7 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
      >
        <Instagram className="w-7 h-7 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
      </a>
      
      {/* Vertical line */}
      <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto mt-4"></div>
    </div>
  );
};

export default SocialSidebar;