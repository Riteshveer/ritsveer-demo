
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Brain, Code, Server, Waves } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    programming: true,
    datascience: false,
    frontend: false,
    backend: false,
    computing: false,
    misc: false
  });
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
      experience: '4+ Years XP',
      icon: <Brain className="w-6 h-6 text-blue-600" />,
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
      experience: '2+ Years XP',
      icon: <Code className="w-6 h-6 text-orange-500" />,
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
      experience: '3+ Years XP',
      icon: <Code className="w-6 h-6 text-green-500" />,
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
      experience: '3+ Years XP',
      icon: <Server className="w-6 h-6 text-purple-600" />,
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
      experience: '3+ Years XP',
      icon: <Server className="w-6 h-6 text-gray-600" />,
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
      experience: '4+ Years XP',
      icon: <Waves className="w-6 h-6 text-teal-500" />,
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
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-600 text-sm">My technical & other skills</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.experience}</p>
                  </div>
                </div>
                <div className="text-gray-600">
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
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
