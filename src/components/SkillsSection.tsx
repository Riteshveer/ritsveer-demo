
import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
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

  const skills = [
    { name: "Python", level: 95, category: "Programming Languages" },
    { name: "SQL", level: 90, category: "Programming Languages" },
    { name: "Java (Core)", level: 70, category: "Programming Languages" },
    { name: "C", level: 70, category: "Programming Languages" },
    { name: "NumPy", level: 85, category: "Libraries & Frameworks" },
    { name: "Pandas", level: 88, category: "Libraries & Frameworks" },
    { name: "Matplotlib", level: 80, category: "Libraries & Frameworks" },
    { name: "Seaborn", level: 80, category: "Libraries & Frameworks" },
    { name: "TensorFlow", level: 82, category: "Libraries & Frameworks" },
    { name: "Tableau", level: 85, category: "Tools & Platforms" },
    { name: "GitHub", level: 90, category: "Tools & Platforms" },
    { name: "Anaconda", level: 85, category: "Tools & Platforms" }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across programming languages, frameworks, and development tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-gray-50/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-400/50 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-900 font-semibold text-sm">{skill.name}</h3>
                <span className="text-gray-700 text-xs">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className={`bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full transition-all duration-1000 ${isVisible ? '' : 'w-0'}`}
                  style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${index * 0.1}s` }}
                ></div>
              </div>
              <span className="text-gray-500 text-xs">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
