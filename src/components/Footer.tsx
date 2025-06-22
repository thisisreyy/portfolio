import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const handleHomeClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden pt-12 pb-32" style={{
      background: `
        radial-gradient(circle at 20% 80%, rgba(84, 81, 74, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(84, 81, 74, 0.1) 0%, transparent 50%),
        linear-gradient(135deg, #000000 0%, #000000 50%, #54514a 100%)
      `
    }}>
      {/* Background textures - same as header */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 2%),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 1%),
          linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.02) 49%, rgba(255,255,255,0.02) 51%, transparent 52%),
          linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.01) 49%, rgba(255,255,255,0.01) 51%, transparent 52%)
        `,
        backgroundSize: '60px 60px, 40px 40px, 20px 20px, 20px 20px'
      }}></div>
      
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: '180px 180px'
      }}></div>

      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.03) 2px,
          rgba(255,255,255,0.03) 4px
        )`
      }}></div>

      {/* Glassy background with blur effect - same as header */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-t border-[#D4B896]/30"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <div className="space-y-6">
          
          {/* Name - Same styling as header */}
          <div>
            <button
              onClick={handleHomeClick}
              className="text-[#D4B896] hover:text-white font-light text-lg lg:text-xl tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer bg-transparent border-none outline-none focus:outline-none active:outline-none"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              Aatreyee Chatterjee
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 hover:bg-white/5 rounded-lg transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 text-[#D4B896] group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm font-light">
              ©2024 Aatreyee Chatterjee. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;