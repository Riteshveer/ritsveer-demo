
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Cpu, Database } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Deep Learning Engineer",
    "AI/ML Specialist", 
    "Data Science Expert",
    "Generative AI Developer"
  ];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText !== currentPhrase) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText !== '') {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, phrases]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="relative">
          {/* Floating icons */}
          <div className="absolute -top-20 -left-20 animate-pulse">
            <Sparkles className="w-8 h-8 text-cyan-400 opacity-60" />
          </div>
          <div className="absolute -top-16 -right-16 animate-pulse" style={{ animationDelay: '1s' }}>
            <Cpu className="w-10 h-10 text-blue-400 opacity-60" />
          </div>
          <div className="absolute -bottom-10 left-10 animate-pulse" style={{ animationDelay: '2s' }}>
            <Database className="w-6 h-6 text-purple-400 opacity-60" />
          </div>

          {/* Main content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="text-cyan-400">Ritesh</span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl mb-8 text-slate-300 h-16 flex items-center justify-center">
              <span className="mr-3">I'm a</span>
              <span className="text-cyan-400 font-semibold min-w-fit">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed">
              Specializing in building <span className="text-cyan-400 font-semibold">intelligent systems</span> with 
              <span className="text-blue-400 font-semibold"> AI, ML, and data science</span>. 
              Transforming complex problems into elegant solutions.
            </p>

            {/* Highlighted expertise */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Deep Learning', 'Generative AI', 'End-to-End ML Systems'].map((skill, index) => (
                <div 
                  key={skill}
                  className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-cyan-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
              <ChevronDown className="w-8 h-8 text-slate-400 mx-auto hover:text-cyan-400 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
