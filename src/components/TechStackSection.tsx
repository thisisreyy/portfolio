import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Server, 
  MessageSquareCode, 
  Wrench
} from 'lucide-react';

const TechStackSection: React.FC = () => {
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

  const techCategories = [
    {
      id: 'frontend',
      title: 'Frontend Technologies',
      icon: Code,
      color: '#61DAFB', // React blue
      technologies: [
        { name: 'HTML5', svgPath: '/src/assets/frontend/html-5-svgrepo-com.svg' },
        { name: 'CSS3', svgPath: '/src/assets/frontend/css-3-svgrepo-com.svg' },
        { name: 'JavaScript', svgPath: '/src/assets/frontend/javascript-svgrepo-com.svg' },
        { name: 'React', svgPath: '/src/assets/frontend/react-svgrepo-com.svg' },
        { name: 'Bootstrap', svgPath: '/src/assets/frontend/bootstrap-fill-svgrepo-com.svg' },
        { name: 'Tailwind', svgPath: '/src/assets/frontend/tailwind-svgrepo-com.svg' },
        { name: 'Angular', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Vite', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
        { name: 'TypeScript', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Technologies',
      icon: Server,
      color: '#68A063', // Node.js green
      technologies: [
        { name: 'Node.js', svgPath: '/src/assets/backend/node-js-svgrepo-com.svg' },
        { name: 'MongoDB', svgPath: '/src/assets/backend/mongo-svgrepo-com.svg' },
        { name: 'Flask', svgPath: '/src/assets/backend/flask-svgrepo-com.svg' },
        { name: 'Django', svgPath: '/src/assets/backend/django-svgrepo-com.svg' },
        { name: 'MySQL', svgPath: '/src/assets/backend/mysql-svgrepo-com.svg' },
        { name: 'Apache', svgPath: '/src/assets/backend/apache-svgrepo-com.svg' },
        { name: 'Docker', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'PostgreSQL', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Express.js', svgPath: '/src/assets/backend/express-js.svg' }
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: MessageSquareCode,
      color: '#F7DF1E', // JavaScript yellow
      technologies: [
        { name: 'Python', svgPath: '/src/assets/languages/python-svgrepo-com.svg' },
        { name: 'Java', svgPath: '/src/assets/languages/java-svgrepo-com.svg' },
        { name: 'C#', svgPath: '/src/assets/languages/Logo_C_sharp.svg.svg' },
        { name: 'PHP', svgPath: '/src/assets/languages/php02-svgrepo-com.svg' },
        { name: 'C', svgPath: '/src/assets/languages/C_logo.svg' },
        { name: 'C++', svgPath: '/src/assets/languages/c++.svg' },
        { name: 'Rust', svgPath: '/src/assets/languages/rust-svgrepo-com.svg' },
        { name: 'Kotlin', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
        { name: 'Haskell', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Wrench,
      color: '#FF6B35', // Orange
      technologies: [
        { name: 'Git', svgPath: '/src/assets/tools&tech/git-svgrepo-com.svg' },
        { name: 'AWS', svgPath: '/src/assets/tools&tech/aws-svgrepo-com.svg' },
        { name: 'Linux', svgPath: '/src/assets/tools&tech/linux-svgrepo-com.svg' },
        { name: 'Cloudflare', svgPath: '/src/assets/tools&tech/cloudflare-svgrepo-com.svg' },
        { name: 'VSCode', svgPath: '/src/assets/tools&tech/vscode-svgrepo-com.svg' },
        { name: 'SublimeText', svgPath: '/src/assets/tools&tech/sublimetext-icon-svgrepo-com.svg' },
        { name: 'Figma', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Photoshop', svgPath: '/src/assets/tools&tech/photoshop-cc-logo-svgrepo-com.svg' },
        { name: 'Netlify', svgPath: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' }
      ]
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
          <p 
            className="text-white/50 text-sm font-light tracking-[0.25em] mb-4 uppercase"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            EXPLORE MY
          </p>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight mb-8">
            Tech Stack
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>

        {/* Tech Categories Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className={`bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-2xl p-8 hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 fade-up-element fade-up-delay-${categoryIndex + 2}`}
              >
                {/* Category Header with Icon */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{ 
                      backgroundColor: `${category.color}20`,
                      border: `1px solid ${category.color}40`
                    }}
                  >
                    <IconComponent 
                      className="w-6 h-6 transition-colors duration-300" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid - 3x3 layout for 9 items */}
                <div className="grid grid-cols-3 gap-6 justify-items-center">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="tech-icon-container group relative"
                    >
                      <img 
                        src={tech.svgPath} 
                        alt={tech.name}
                        className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 hover:scale-110 cursor-pointer synchronized-bob"
                        style={{
                          filter: 'brightness(0.9) contrast(1.1)'
                        }}
                      />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        {tech.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* Synchronized bobbing animation for ALL tech icons */
        .synchronized-bob {
          animation: synchronizedBob 3s ease-in-out infinite;
        }

        @keyframes synchronizedBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        /* Pause animation on hover and add scale effect */
        .tech-icon-container:hover .synchronized-bob {
          animation-play-state: paused;
          transform: translateY(-4px) scale(1.1);
        }

        /* Ensure all icons start animation at the same time */
        .tech-icon-container {
          animation-delay: 0s;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;