
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Sparkles, Cpu, Database, Github, Linkedin, Award } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 animate-fade-in-up">
      <div className="container mx-auto text-center">
        <div className="relative">
          {/* Floating icons */}
          <div className="absolute -top-20 -left-20 animate-pulse">
            <Sparkles className="w-8 h-8 text-gray-700 opacity-60" />
          </div>
          <div className="absolute -top-16 -right-16 animate-pulse" style={{ animationDelay: '1s' }}>
            <Cpu className="w-10 h-10 text-gray-600 opacity-60" />
          </div>
          <div className="absolute -bottom-10 left-10 animate-pulse" style={{ animationDelay: '2s' }}>
            <Database className="w-6 h-6 text-gray-500 opacity-60" />
          </div>

          {/* Main content */}
          <div className="animate-scale-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-200/20 to-gray-300/20 rounded-full border border-gray-300/30 text-gray-700 text-xs font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="text-gray-700">Ritesh</span>
            </h1>
            
            <div className="text-lg md:text-xl lg:text-xl mb-8 text-gray-600 h-12 flex items-center justify-center">
              <span className="mr-3">I'm a</span>
              <span className="text-gray-700 font-semibold min-w-fit">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            
            <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
              Specializing in building <span className="text-gray-700 font-semibold">intelligent systems</span> with 
              <span className="text-gray-600 font-semibold"> AI, ML, and data science</span>. 
              Transforming complex problems into elegant solutions.
            </p>

            {/* Social media icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://github.com/ritesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-400/50"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/ritesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-400/50"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://kaggle.com/ritesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100/50 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 transition-all duration-300 hover:scale-110 border border-gray-200 hover:border-gray-400/50"
              >
                <Award className="w-6 h-6" />
              </a>
            </div>

            {/* Highlighted expertise */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Deep Learning', 'Generative AI', 'End-to-End ML Systems'].map((skill, index) => (
                <div 
                  key={skill}
                  className="px-6 py-3 bg-gray-100/50 backdrop-blur-sm rounded-full border border-gray-200 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-gray-700 font-medium text-sm">{skill}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white px-8 py-4 text-sm font-semibold rounded-full shadow-lg hover:shadow-gray-500/25 transition-all duration-300 hover:scale-105"
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-400/50 text-gray-700 hover:bg-gray-100/10 px-8 py-4 text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
              <ChevronDown className="w-8 h-8 text-gray-500 mx-auto hover:text-gray-700 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
