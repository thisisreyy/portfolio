import React from 'react';
import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface BottomNavigationProps {
  currentPage?: string;
  onNavigationChange?: (section: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  currentPage = 'home',
  onNavigationChange 
}) => {
  const handleNavigation = (section: string) => {
    // Update the current page state
    if (onNavigationChange) {
      onNavigationChange(section);
    }

    if (section === 'home') {
      // Scroll to top smoothly to return to landing page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section === 'about') {
      // Scroll to about section with offset to stop slightly before
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        const elementPosition = aboutSection.offsetTop;
        const offsetPosition = elementPosition - 60; // Stop 60px before the section
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (section === 'projects') {
      // Scroll to projects section with offset
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        const elementPosition = projectsSection.offsetTop;
        const offsetPosition = elementPosition - 60; // Stop 60px before the section
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (section === 'techstack') {
      // Scroll to tech stack section with offset
      const techStackSection = document.getElementById('techstack-section');
      if (techStackSection) {
        const elementPosition = techStackSection.offsetTop;
        const offsetPosition = elementPosition - 60; // Stop 60px before the section
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else if (section === 'contact') {
      // Scroll to contact section with offset
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const elementPosition = contactSection.offsetTop;
        const offsetPosition = elementPosition - 60; // Stop 60px before the section
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      console.log(`Navigate to ${section}`);
      // You can implement routing logic for other sections here later
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'projects', label: 'My Projects', icon: Briefcase },
    { id: 'techstack', label: 'My Tech Stack', icon: Code },
    { id: 'contact', label: 'Contact Me', icon: Mail },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/40 backdrop-blur-md border border-[#D4B896]/30 rounded-full px-4 py-2">
        <div className="flex items-center gap-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'text-white shadow-lg' 
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  backgroundColor: isActive ? '#98948A' : 'transparent',
                  boxShadow: isActive ? '0 4px 20px rgba(152, 148, 138, 0.3)' : 'none'
                }}
                title={item.label}
              >
                <Icon className={`w-4 h-4 transition-all duration-300 ${
                  isActive ? 'text-white' : 'group-hover:scale-110'
                }`} />
                
                {/* Tooltip */}
                <div className={`absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  isActive ? 'opacity-0' : ''
                }`}>
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-black/80"></div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;