import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import RotatingText from './components/RotatingText';
import SocialSidebar from './components/SocialSidebar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const roles = [
  'Computer Science Student',
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Freelancer',
  'Problem Solver'
];

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showSocialInHeader, setShowSocialInHeader] = useState(false);
  const [isLandingLoaded, setIsLandingLoaded] = useState(false);

  // Landing page animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLandingLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll to detect current section and footer visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const aboutSection = document.getElementById('about-section');
      const projectsSection = document.getElementById('projects-section');
      const techStackSection = document.getElementById('techstack-section');
      const contactSection = document.getElementById('contact-section');
      
      // Check if user has scrolled to footer area (last 20% of the page)
      const footerThreshold = documentHeight - windowHeight * 1.2;
      const isInFooterArea = scrollPosition >= footerThreshold;
      
      // Only show social icons in header on desktop when in footer area
      setShowSocialInHeader(isInFooterArea && window.innerWidth >= 1280); // xl breakpoint
      
      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection('home');
      } else if (aboutSection && projectsSection && techStackSection && contactSection) {
        const aboutTop = aboutSection.offsetTop;
        const projectsTop = projectsSection.offsetTop;
        const techStackTop = techStackSection.offsetTop;
        const contactTop = contactSection.offsetTop;
        
        if (scrollPosition >= aboutTop - 200 && scrollPosition < projectsTop - 200) {
          setCurrentSection('about');
        } else if (scrollPosition >= projectsTop - 200 && scrollPosition < techStackTop - 200) {
          setCurrentSection('projects');
        } else if (scrollPosition >= techStackTop - 200 && scrollPosition < contactTop - 200) {
          setCurrentSection('techstack');
        } else if (scrollPosition >= contactTop - 200) {
          setCurrentSection('contact');
        }
      }
    };

    // Also handle window resize to update social icon visibility
    const handleResize = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const footerThreshold = documentHeight - windowHeight * 1.2;
      const isInFooterArea = scrollPosition >= footerThreshold;
      
      setShowSocialInHeader(isInFooterArea && window.innerWidth >= 1280);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadCV = () => {
    // Replace with your actual CV URL
    window.open('/path-to-your-cv.pdf', '_blank');
  };

  const handleAboutMe = () => {
    // Scroll to about section with offset to stop slightly before
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const elementPosition = aboutSection.offsetTop;
      const offsetPosition = elementPosition - 80; // Stop 80px before the section
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigationChange = (section: string) => {
    setCurrentSection(section);
  };

  return (
    <div className="relative">
      {/* Landing Page */}
      <div className="relative overflow-hidden" style={{
        minHeight: '100vh',
        background: `
          radial-gradient(circle at 20% 80%, rgba(84, 81, 74, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(84, 81, 74, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #000000 50%, #54514a 100%)
        `
      }}>
        {/* Metallic texture overlay */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 2%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 1%),
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.02) 49%, rgba(255,255,255,0.02) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.01) 49%, rgba(255,255,255,0.01) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 20px 20px, 20px 20px'
        }}></div>
        
        {/* Subtle noise texture for matte effect */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>

        {/* Brushed metal effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}></div>

        {/* Header Component */}
        <Header showSocialIcons={showSocialInHeader} />

        {/* Bottom Navigation */}
        <BottomNavigation 
          currentPage={currentSection} 
          onNavigationChange={handleNavigationChange}
        />

        {/* Social Sidebar - Hide when footer is visible on desktop */}
        <SocialSidebar isVisible={!showSocialInHeader} />

        {/* Main Content with Fade-in Animation */}
        <main className={`flex flex-col items-center justify-center min-h-screen px-8 text-center relative z-10 pt-28 pb-16 transition-all duration-1000 ${
          isLandingLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Greeting */}
            <div className={`space-y-3 transition-all duration-1000 delay-200 ${
              isLandingLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-white/80 text-lg font-light tracking-wide">Hello, I'm</p>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-tight metallic-text">
                Aatreyee Chatterjee
              </h1>
              
              {/* Rotating Text with Line */}
              <div className="space-y-4 pt-2">
                <div className="h-6 flex items-center justify-center">
                  <RotatingText 
                    texts={roles}
                    className="text-sm md:text-base text-white/60 font-light tracking-wide"
                  />
                </div>
                {/* Minimalistic line under rotating text */}
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-400 ${
              isLandingLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button
                onClick={handleDownloadCV}
                className="group flex items-center gap-3 px-10 py-5 border border-[#D4B896] text-[#D4B896] rounded-none hover:border-[#D4B896] hover:bg-[#D4B896]/10 transition-all duration-500 hover:tracking-wide backdrop-blur-sm hover:text-white"
              >
                <Download className="w-4 h-4 group-hover:text-white transition-colors duration-300" />
                <span className="font-light text-base">Download CV</span>
              </button>
              
              <button
                onClick={handleAboutMe}
                className="group flex items-center gap-3 px-10 py-5 bg-[#D4B896] text-black rounded-none hover:bg-[#D4B896]/90 transition-all duration-500 hover:tracking-wide backdrop-blur-sm"
              >
                <span className="font-light text-base">About Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Profile Image */}
            <div className={`mt-20 mb-8 transition-all duration-1000 delay-600 ${
              isLandingLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <img
                src="/me1.jpeg"
                alt="Aatreyee Chatterjee"
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover object-top border border-white/20 mx-auto transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
              />
              
              {/* Scroll Down Arrow */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleAboutMe}
                  className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to About section"
                >
                  <ChevronDown className="w-6 h-6 text-[#D4B896] group-hover:text-white transition-all duration-300 animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>

      {/* Projects Section */}
      <div id="projects-section">
        <ProjectsSection />
      </div>

      {/* Tech Stack Section */}
      <div id="techstack-section">
        <TechStackSection />
      </div>

      {/* Contact Section */}
      <div id="contact-section">
        <ContactSection />
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Custom CSS for metallic text effect and animations */}
      <style jsx>{`
        .metallic-text {
          background: linear-gradient(
            135deg,
            #f5f5f5 0%,
            #e8e8e8 15%,
            #ffffff 30%,
            #d4d4d4 45%,
            #f0f0f0 60%,
            #e0e0e0 75%,
            #ffffff 90%,
            #f8f8f8 100%
          );
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: metallicShine 4s ease-in-out infinite;
          text-shadow: 
            0 1px 0 rgba(255,255,255,0.4),
            0 2px 0 rgba(0,0,0,0.1),
            0 3px 0 rgba(0,0,0,0.05),
            0 4px 8px rgba(0,0,0,0.3);
          filter: drop-shadow(0 0 20px rgba(255,255,255,0.1));
        }

        @keyframes metallicShine {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Fallback for browsers that don't support background-clip: text */
        @supports not (-webkit-background-clip: text) {
          .metallic-text {
            color: #f5f5f5;
            text-shadow: 
              0 1px 0 rgba(255,255,255,0.4),
              0 2px 0 rgba(0,0,0,0.1),
              0 3px 0 rgba(0,0,0,0.05),
              0 4px 8px rgba(0,0,0,0.3);
          }
        }
      `}</style>
    </div>
  );
}

export default App;