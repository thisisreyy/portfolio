import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, Building2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to all fade-up elements in this section
            const elements = entry.target.querySelectorAll('.fade-up-element');
            elements.forEach((element) => {
              element.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden py-20 section-background" 
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(84, 81, 74, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(84, 81, 74, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #000000 50%, #54514a 100%)
        `
      }}
    >
      {/* Background textures - same as landing page */}
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

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 fade-up-element">
          {/* Small grey text above heading - now using header font style */}
          <p 
            className="text-white/50 text-sm font-light tracking-[0.25em] mb-4 uppercase"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            GET TO KNOW MORE
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight mb-8">
            About Me
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Profile Image */}
          <div className="flex justify-center lg:justify-end fade-up-element fade-up-delay-2">
            <img
              src="/IMG_6822-removebg-preview.png"
              alt="Aatreyee Chatterjee"
              className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain transition-all duration-700 hover:scale-105 consistent-bob"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6 fade-up-element fade-up-delay-3">
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-lg p-4 text-center hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-300">
                <Award className="w-6 h-6 text-[#D4B896] mx-auto mb-2" />
                <h3 className="text-white font-light text-sm mb-1">Experience</h3>
                <p className="text-white/60 text-xs">4 Years</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-lg p-4 text-center hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-300">
                <Briefcase className="w-6 h-6 text-[#D4B896] mx-auto mb-2" />
                <h3 className="text-white font-light text-sm mb-1">Completed</h3>
                <p className="text-white/60 text-xs">10+ Projects</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-lg p-4 text-center hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-300">
                <Building2 className="w-6 h-6 text-[#D4B896] mx-auto mb-2" />
                <h3 className="text-white font-light text-sm mb-1">Worked For</h3>
                <p className="text-white/60 text-xs">3 companies</p>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-5 fade-up-element fade-up-delay-4">
              <p className="text-white/70 leading-relaxed font-light">
                Hey there! I'm <span className="text-white font-normal">Aatreyee Chatterjee</span>, but most people know me as Rey. I'm a final-year Computer Science student with a passion for building meaningful digital experiences. My journey into programming began early, and ever since, I've been fascinated by the limitless potential of technology to solve real-world problems.
              </p>
              
              <p className="text-white/70 leading-relaxed font-light">
                My core interests lie in full-stack development and UI/UX design. I'm driven by the idea that great software should not only work well but also feel right — intuitive, elegant, and human-centered. I love blending technical precision with creative design to craft applications that are both functional and delightful to use.
              </p>
              
              <p className="text-white/70 leading-relaxed font-light">
                Outside the world of code, I'm a visual storyteller and a self-taught musician. Whether I'm behind the camera or strumming one of my instruments, I'm always exploring new ways to create and connect. My portfolio is a reflection of who I am — a curious creator at the intersection of technology, design, and art.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .consistent-bob {
          animation: consistentBob 4s ease-in-out infinite;
        }

        @keyframes consistentBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;