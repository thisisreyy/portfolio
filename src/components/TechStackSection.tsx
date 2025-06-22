import React, { useEffect, useRef } from 'react';
import { 
  Code, 
  Server, 
  MessageSquareCode, 
  Wrench,
  // Tech icons from lucide-react
  Database,
  Globe,
  Terminal,
  FileCode,
  Layers,
  Cpu,
  HardDrive,
  Cloud,
  GitBranch,
  Monitor
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
      title: 'Frontend',
      icon: Code,
      color: '#61DAFB', // React blue
      technologies: [
        { 
          name: 'HTML5', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/html-5-svgrepo-com.svg' // Path to SVG icon
        },
        { name: 'CSS3', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/css-3-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'JavaScript', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/javascript-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'React', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/react-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Bootstrap', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/bootstrap-fill-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Tailwind', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/frontend/tailwind-svgrepo-com.svg' // Path to SVG icon
         }
      ]
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: '#68A063', // Node.js green
      technologies: [
        { name: 'Node.js', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/node-js-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'MongoDB', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/mongo-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Flask', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/flask-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Django', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/django-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'MySQL', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/mysql-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Apache', 
          icon: 'svg', // Special marker for SVG
          svgPath: '/src/assets/backend/apache-svgrepo-com.svg' // Path to SVG icon
         }
      ]
    },
    {
      id: 'languages',
      title: 'Languages',
      icon: MessageSquareCode,
      color: '#F7DF1E', // JavaScript yellow
      technologies: [
        { name: 'Python', 
          icon: 'svg',
          svgPath: '/src/assets/languages/python-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'Java', 
          icon: 'svg',
          svgPath: '/src/assets/languages/java-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'C#',
          icon: 'svg', 
          svgPath: '/src/assets/languages/Logo_C_sharp.svg.svg' // Path to SVG icon
         },
        { name: 'PHP',
          icon: 'svg',
          svgPath: '/src/assets/languages/php02-svgrepo-com.svg' // Path to SVG icon
         },
        { name: 'C', 
          icon: 'svg',
          svgPath: '/src/assets/languages/C_logo.svg' // Path to SVG icon
         },
        { name: 'C++', 
          icon: 'svg',
          svgPath: '/src/assets/languages/c++.svg' // Path to SVG icon
         }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: Wrench,
      color: '#FF6B35', // Orange
      technologies: [
        { name: 'Git', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/git-svgrepo-com.svg'
         },
        { name: 'AWS', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/aws-svgrepo-com.svg'
         },
        { name: 'Linux', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/linux-svgrepo-com.svg'
         },
        { name: 'Cloudflare', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/cloudflare-svgrepo-com.svg'
         },
        { name: 'VSCode', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/vscode-svgrepo-com.svg'
         },
        { name: 'SublimeText', 
          icon: 'svg',
          svgPath: '/src/assets/tools&tech/sublimetext-icon-svgrepo-com.svg'
         }
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
          {/* Small grey text above heading */}
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className={`group bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/5 fade-up-element fade-up-delay-${categoryIndex + 2}`}
              >
                {/* Category Header - CENTERED */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
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
                  <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-white/90 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Technologies Grid - BIGGER CONTAINERS with CENTER ALIGNMENT */}
                <div className="flex flex-wrap justify-center gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="tech-item bg-black/20 backdrop-blur-sm border border-[#D4B896]/20 rounded-full px-5 py-3 flex items-center justify-center gap-3 hover:bg-black/30 hover:border-[#D4B896]/40 transition-all duration-300 hover:scale-105"
                    >
                      {/* Tech Icon - Bigger size */}
                      <div className="text-lg flex-shrink-0 tech-icon gentle-bob">
                        {tech.icon === 'svg' ? (
                          <img 
                            src={tech.svgPath} 
                            alt={tech.name}
                            className="w-5 h-5"
                          />
                        ) : (
                          <span>{tech.icon}</span>
                        )}
                      </div>
                      
                      {/* Tech Name - Bigger text, centered */}
                      <span className="text-white/80 font-light text-sm hover:text-white transition-colors duration-300 whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .gentle-bob {
          animation: gentleBob 4s ease-in-out infinite;
        }

        @keyframes gentleBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px); /* Very gentle bobbing */
          }
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;