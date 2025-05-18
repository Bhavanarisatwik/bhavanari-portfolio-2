'use client';
import { useEffect, useRef, useState } from 'react';

// Skill type definition
interface Skill {
  name: string;
  level: number;
  icon?: string;
}

const SkillsSection = () => {
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
  
  // Skill categories
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
  ];
  
  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'SQL', level: 60 },
    { name: 'API Design', level: 80 },
  ];
  
  const toolsSkills: Skill[] = [
    { name: 'Git', level: 85 },
    { name: 'Webpack', level: 70 },
    { name: 'Docker', level: 60 },
    { name: 'CI/CD', level: 65 },
    { name: 'VS Code', level: 90 },
  ];
  
  const softSkills: Skill[] = [
    { name: 'Communication', level: 85 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Teamwork', level: 85 },
    { name: 'Time Management', level: 80 },
    { name: 'Adaptability', level: 85 },
  ];

  // Skill progress bar component
  const SkillBar = ({ skill, delay }: { skill: Skill, delay: number }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{skill.name}</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
          <div 
            className={`h-2.5 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out`}
            style={{ 
              width: isVisible ? `${skill.level}%` : '0%', 
              transitionDelay: `${delay * 0.1}s` 
            }}
          ></div>
        </div>
      </div>
    );
  };

  // Skill category component
  const SkillCategory = ({ 
    title, 
    skills, 
    baseDelay = 0 
  }: { 
    title: string, 
    skills: Skill[], 
    baseDelay?: number 
  }) => {
    return (
      <div className={`w-full fade-in bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-primary/10 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: `${baseDelay * 0.1}s` }}>
        <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-accent">{title}</h3>
        <div>
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} delay={baseDelay + index} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
          <p className="text-center max-w-3xl mt-6">
            Here are my technical and professional skills that I've developed over the years.
            I continuously learn and improve these skills to stay current with industry trends.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} baseDelay={0} />
          <SkillCategory title="Backend Development" skills={backendSkills} baseDelay={5} />
          <SkillCategory title="Tools & Technologies" skills={toolsSkills} baseDelay={10} />
          <SkillCategory title="Soft Skills" skills={softSkills} baseDelay={15} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 