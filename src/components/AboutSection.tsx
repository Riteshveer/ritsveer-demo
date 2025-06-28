
import { useState, useEffect, useRef } from 'react';
import { MessageCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            About
          </h2>
          <p className="text-gray-600 mb-6 text-sm">My Introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Character Image */}
          <div className={`flex justify-center transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/3a30f400-81be-45de-9d50-f5cde6d4de74.png" 
                alt="3D Character"
                className="w-80 h-80 object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-gray-600 leading-relaxed text-sm">
              <p className="mb-4">
                With 4+ years of experience in AI, I design, develop, and deploy cutting-edge 
                software and AI solutions, specializing in MedTech and beyond. I've led cross-
                functional teams, translating business goals into actionable Data & AI strategies 
                that deliver results.
              </p>
              <p className="mb-6">
                Skilled in Python, C++, Java, and deep learning frameworks, I 
                build scalable, high-performance systems. If you're looking for someone to drive 
                impactful projects, let's connect!
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className={`text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">04+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Hackathon</div>
              </div>
              <div className={`text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">23+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Projects</div>
              </div>
              <div className={`text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="text-xl md:text-2xl font-bold text-gray-700 mb-1">03+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Technology</div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-300 hover:scale-105 text-sm"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MessageCircle className="w-4 h-4" />
                Leave a message
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
