'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  figmaUrl: string;
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with product catalog, cart functionality, and secure payment integration.',
      image: '/projects/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com/Bhavanarisatwik',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates.',
      image: '/projects/project2.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubUrl: 'https://github.com/Bhavanarisatwikm',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather app that provides current conditions and forecasts based on user location or search.',
      image: '/projects/project3.jpg',
      tags: ['JavaScript', 'API', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/Bhavanarisatwik',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS to showcase projects and skills.',
      image: '/projects/project4.jpg',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Bhavanarisatwik',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    {
      id: 5,
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform with search, filtering, and user contribution features.',
      image: '/projects/project5.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    {
      id: 6,
      title: 'Figma Project',
      description: 'A modern UI/UX design project created in Figma with responsive components, design system, and interactive prototypes for a mobile application.',
      image: '/projects/figma-project.svg',
      tags: ['UI/UX', 'Figma', 'Prototyping', 'Design System'],
      githubUrl: 'https://www.figma.com/@satwikbhavanari',
      demoUrl: 'https://demo-link.com',
      figmaUrl: 'https://www.figma.com/@satwikbhavanari',
    },
    
  ];

  // Project card component
  const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
    return (
      <div 
        className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:translate-y-[-5px] fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{objectFit: 'cover'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-accent">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            <Link 
              href={project.githubUrl} 
              target="_blank" 
              className="text-accent hover:text-primary transition-colors inline-flex items-center"
            >
              {project.id === 6 ? (
                <>
                  <svg className="w-5 h-5 mr-1" viewBox="0 0 38 57" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 25.649 21.2341 23.3334 24 23.3334C26.7659 23.3334 29 25.649 29 28.5C29 31.351 26.7659 33.6667 24 33.6667C21.2341 33.6667 19 31.351 19 28.5Z" />
                    <path d="M19 47.5C19 44.649 21.2341 42.3334 24 42.3334C26.7659 42.3334 29 44.649 29 47.5C29 50.351 26.7659 52.6667 24 52.6667C21.2341 52.6667 19 50.351 19 47.5Z" />
                    <path d="M19 9.5C19 6.64903 21.2341 4.33337 24 4.33337C26.7659 4.33337 29 6.64903 29 9.5C29 12.351 26.7659 14.6667 24 14.6667C21.2341 14.6667 19 12.351 19 9.5Z" />
                    <path d="M9.5 28.5C9.5 31.351 7.26587 33.6667 4.5 33.6667C1.73413 33.6667 -0.5 31.351 -0.5 28.5C-0.5 25.649 1.73413 23.3334 4.5 23.3334C7.26587 23.3334 9.5 25.649 9.5 28.5Z" />
                    <path d="M29 9.5C29 12.351 31.2341 14.6667 34 14.6667C36.7659 14.6667 39 12.351 39 9.5C39 6.64903 36.7659 4.33337 34 4.33337C31.2341 4.33337 29 6.64903 29 9.5Z" />
                  </svg>
                  Figma
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </>
              )}
            </Link>
            <Link 
              href={project.demoUrl} 
              target="_blank" 
              className="text-primary hover:text-accent transition-colors inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-center max-w-3xl mt-6">
            Here are some of my recent projects. Each project represents my passion for creating 
            efficient, user-friendly applications using modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 