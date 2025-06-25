
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    programming: true, // Start with programming expanded
    datascience: false,
    frontend: false,
    backend: false,
    visualization: false,
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
      icon: '🧠',
      color: 'from-purple-500 to-purple-600',
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
      icon: '🎨',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'TypeScript', level: 75 }
      ]
    },
    {
      id: 'programming',
      name: 'Programming',
      experience: '3+ Years XP',
      icon: '{ }',
      color: 'from-purple-500 to-purple-600',
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
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 95 },
        { name: 'Database', level: 85 },
        { name: 'API Design', level: 80 }
      ]
    },
    {
      id: 'visualization',
      name: 'Visualization',
      experience: '3+ Years XP',
      icon: '📊',
      color: 'from-purple-500 to-purple-600',
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
      color: 'from-purple-500 to-purple-600',
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
      icon: '🔧',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Research', level: 90 },
        { name: 'Documentation', level: 85 },
        { name: 'Communication', level: 88 }
      ]
    }
  ];

  const AnimatedProgress = ({ value, delay = 0 }: { value: number; delay?: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const timer = setTimeout(() => {
          setCurrentValue(value);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isVisible, value, delay]);

    return (
      <div className="relative">
        <Progress 
          value={currentValue} 
          className="h-2 bg-gray-200"
        />
        <style jsx>{`
          .progress-indicator {
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            transition: width 1.5s ease-out;
          }
        `}</style>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-600">My technical & other skills</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
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
                    <p className="text-sm text-purple-600">{category.experience}</p>
                  </div>
                </div>
                <div className="text-purple-600">
                  {expandedCategories[category.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
              
              {expandedCategories[category.id] && (
                <div className="px-6 pb-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-800 font-medium text-sm">{skill.name}</span>
                        <span className="text-purple-600 font-semibold text-sm">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1500 ease-out"
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
