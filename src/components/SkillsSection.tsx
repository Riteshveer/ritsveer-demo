
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
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

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const skillCategories = [
    {
      id: 'datascience',
      name: 'Data Science & AI',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'TensorFlow', level: 85 }
      ]
    },
    {
      id: 'frontend',
      name: 'Front End',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 80 }
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 95 },
        { name: 'C++/C', level: 90 },
        { name: 'Java', level: 90 }
      ]
    },
    {
      id: 'backend',
      name: 'BackEnd',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      id: 'computing',
      name: 'Computing',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Anaconda', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      id: 'misc',
      name: 'Misc',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Figma', level: 75 },
        { name: 'Photoshop', level: 70 },
        { name: 'Excel', level: 85 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-600">My technical & other skills</p>
        </div>
        
        <div className="space-y-4">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              } ${
                expandedCategories[category.id] ? 'transform translate-y-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/20 rounded-xl transition-all duration-300"
                onClick={() => toggleCategory(category.id)}
              >
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <div className="text-gray-600">
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedCategories[category.id] 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                          <span className="text-gray-600 text-sm">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-300 to-blue-500 h-2 rounded-full transition-all duration-1500 ease-out"
                              style={{ 
                                width: isVisible && expandedCategories[category.id] ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
