import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import TechStackIcons from './TechStackIcons';

const ProjectsSection: React.FC = () => {
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

  const projects = [
    {
      id: 1,
      title: "PennyWise - Expense Tracker",
      description: "A sleek, minimalistic expense tracker with intuitive categorization and seamless tracking capabilities.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: '/src/assets/images/pennywise.png',
      imageAlt: "Expense tracker application interface",
      githubUrl: "https://github.com/thisisreyy/pennywise",
      projectUrl: "https://www.pennywiseexpensetracker.com"
    },
    {
      id: 2,
      title: "Aranyaaa - ECommerce",
      description: "A fully responsive e-commerce website with nature-inspired theme and modern UI/UX design.",
      techStack: ["React", "Tailwind", "MySQL"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "E-commerce website interface",
      githubUrl: "https://github.com/thisisreyy/aranyaaa",
      projectUrl: "https://aranyaaa-ecommerce.netlify.app"
    }
  ];

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
      {/* Background textures - same as other sections */}
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
          {/* Small grey text above heading */}
          <p 
            className="text-white/50 text-sm font-light tracking-[0.25em] mb-4 uppercase"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            BROWSE MY RECENT
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight mb-8">
            Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 fade-up-element fade-up-delay-${index + 2}`}
            >
              {/* Project Image with Hover Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay with Icons */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-6">
                  {/* GitHub Link */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon bg-white/10 backdrop-blur-sm border border-[#D4B896]/30 rounded-full p-4 hover:bg-white/20 hover:border-[#D4B896]/60 transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-6 h-6 text-[#D4B896] group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  
                  {/* Project Link */}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon bg-white/10 backdrop-blur-sm border border-[#D4B896]/30 rounded-full p-4 hover:bg-white/20 hover:border-[#D4B896]/60 transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-6 h-6 text-[#D4B896] group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                  {project.description}
                </p>

                {/* Tech Stack with Dynamic Icons */}
                <div className="pt-2">
                  <TechStackIcons techStack={project.techStack} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;