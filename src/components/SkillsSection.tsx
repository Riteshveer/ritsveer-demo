
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    programming: true,
    datascience: false,
    visualization: false,
    computing: false
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
      icon: '🧠',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Pandas', level: 90 },
        { name: 'TensorFlow', level: 85 }
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      experience: '3+ Years XP',
      icon: '{ }',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 95 },
        { name: 'C++/C', level: 90 },
        { name: 'Java', level: 90 }
      ]
    },
    {
      id: 'visualization',
      name: 'Visualization',
      experience: '3+ Years XP',
      icon: '📊',
      skills: [
        { name: 'Matplotlib', level: 90 },
        { name: 'Seaborn', level: 85 },
        { name: 'Plotly', level: 80 },
        { name: 'Tableau', level: 85 }
      ]
    },
    {
      id: 'computing',
      name: 'Computing',
      experience: '3+ Years XP',
      icon: '☁️',
      skills: [
        { name: 'GitHub', level: 90 },
        { name: 'Anaconda', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-gray-600">My technical expertise and competencies</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="flex items-center justify-between p-6 cursor-pointer"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                  </div>
                </div>
                <div className="text-blue-600">
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
              
              {expandedCategories[category.id] && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                        </div>
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-1500 ease-out"
                              style={{ 
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 0.1}s`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
