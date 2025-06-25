
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    programming: true, // Start with programming expanded
    datascience: false,
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
      skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'TensorFlow']
    },
    {
      id: 'programming',
      name: 'Programming',
      experience: '3+ Years XP',
      icon: '{ }',
      skills: ['Python', 'SQL', 'C++/C', 'Java']
    },
    {
      id: 'computing',
      name: 'Computing',
      experience: '3+ Years XP',
      icon: '☁️',
      skills: ['Tableau', 'GitHub', 'Anaconda']
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
              className={`bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-gray-400/50 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
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
                    <p className="text-sm text-gray-500">{category.experience}</p>
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
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="bg-white rounded-lg p-4 border border-gray-100 hover:border-blue-200 transition-all duration-300"
                      >
                        <div className="text-gray-900 font-medium text-sm">{skill}</div>
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
