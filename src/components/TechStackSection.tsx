import React, { useEffect, useRef } from 'react';

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
      technologies: [
        { name: 'HTML5', svgPath: '/src/assets/frontend/html-5-svgrepo-com.svg' },
        { name: 'CSS3', svgPath: '/src/assets/frontend/css-3-svgrepo-com.svg' },
        { name: 'JavaScript', svgPath: '/src/assets/frontend/javascript-svgrepo-com.svg' },
        { name: 'React', svgPath: '/src/assets/frontend/react-svgrepo-com.svg' },
        { name: 'Bootstrap', svgPath: '/src/assets/frontend/bootstrap-fill-svgrepo-com.svg' },
        { name: 'Tailwind', svgPath: '/src/assets/frontend/tailwind-svgrepo-com.svg' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Technologies',
      technologies: [
        { name: 'Node.js', svgPath: '/src/assets/backend/node-js-svgrepo-com.svg' },
        { name: 'MongoDB', svgPath: '/src/assets/backend/mongo-svgrepo-com.svg' },
        { name: 'Flask', svgPath: '/src/assets/backend/flask-svgrepo-com.svg' },
        { name: 'Django', svgPath: '/src/assets/backend/django-svgrepo-com.svg' },
        { name: 'MySQL', svgPath: '/src/assets/backend/mysql-svgrepo-com.svg' },
        { name: 'Apache', svgPath: '/src/assets/backend/apache-svgrepo-com.svg' }
      ]
    },
    {
      id: 'languages',
      title: 'Programming Languages',
      technologies: [
        { name: 'Python', svgPath: '/src/assets/languages/python-svgrepo-com.svg' },
        { name: 'Java', svgPath: '/src/assets/languages/java-svgrepo-com.svg' },
        { name: 'C#', svgPath: '/src/assets/languages/Logo_C_sharp.svg.svg' },
        { name: 'PHP', svgPath: '/src/assets/languages/php02-svgrepo-com.svg' },
        { name: 'C', svgPath: '/src/assets/languages/C_logo.svg' },
        { name: 'C++', svgPath: '/src/assets/languages/c++.svg' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      technologies: [
        { name: 'Git', svgPath: '/src/assets/tools&tech/git-svgrepo-com.svg' },
        { name: 'AWS', svgPath: '/src/assets/tools&tech/aws-svgrepo-com.svg' },
        { name: 'Linux', svgPath: '/src/assets/tools&tech/linux-svgrepo-com.svg' },
        { name: 'Cloudflare', svgPath: '/src/assets/tools&tech/cloudflare-svgrepo-com.svg' },
        { name: 'VSCode', svgPath: '/src/assets/tools&tech/vscode-svgrepo-com.svg' },
        { name: 'SublimeText', svgPath: '/src/assets/tools&tech/sublimetext-icon-svgrepo-com.svg' }
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
          {techCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`fade-up-element fade-up-delay-${categoryIndex + 2}`}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-light text-[#D4B896] mb-8 text-center">
                {category.title}
              </h3>

              {/* Technologies Grid - Clean 3x2 layout for 6 items */}
              <div className="grid grid-cols-3 gap-8 justify-items-center">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={tech.name}
                    className={`tech-icon-container tech-bob-${(techIndex % 6) + 1}`}
                    title={tech.name}
                  >
                    <img 
                      src={tech.svgPath} 
                      alt={tech.name}
                      className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:scale-110 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Staggered bobbing animations for tech icons */
        .tech-bob-1 { animation: techBob 3s ease-in-out infinite; animation-delay: 0s; }
        .tech-bob-2 { animation: techBob 3s ease-in-out infinite; animation-delay: 0.2s; }
        .tech-bob-3 { animation: techBob 3s ease-in-out infinite; animation-delay: 0.4s; }
        .tech-bob-4 { animation: techBob 3s ease-in-out infinite; animation-delay: 0.6s; }
        .tech-bob-5 { animation: techBob 3s ease-in-out infinite; animation-delay: 0.8s; }
        .tech-bob-6 { animation: techBob 3s ease-in-out infinite; animation-delay: 1s; }

        @keyframes techBob {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .tech-icon-container {
          transition: all 0.3s ease;
        }

        .tech-icon-container:hover {
          transform: translateY(-4px) scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;