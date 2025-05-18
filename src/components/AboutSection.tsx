'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className={`w-full md:w-1/3 fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/projects/profile-pic.jpg" 
                alt="About Me" 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{objectFit: 'cover'}}
              />
            </div>
          </div>
          
          {/* Content */}
          <div className={`w-full md:w-2/3 fade-in delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-lg mb-6">
            Enthusiastic undergraduate student in Computer Science and Engineering, seeking a challenging internship to apply academic knowledge. 
            Deep interest in web development, blockchain, cybersecurity, and cybercrime, with a proactive approach to problem-solving and learning. 
            </p>
            <p className="text-lg mb-6">
            Possesses strong teamwork and communication skills, prepared to thrive and adapt in a professional setting. 
              I enjoy solving complex problems and learning new technologies to enhance my skill set.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p>Bhavanari Shiva Satwik</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p>satwik.bhavanari@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Location:</h4>
                <p>Bengluru, India</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Availability:</h4>
                <p>Full-time / Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 