
import { useState, useEffect, useRef } from 'react';
import { Brain, Code, Server, Waves, Database, Cpu } from 'lucide-react';

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

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL']
    },
    {
      id: 'datascience',
      name: 'Data Science & AI',
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
      id: 'frontend',
      name: 'Frontend Development',
      icon: <Code className="w-8 h-8 text-orange-500" />,
      skills: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
    },
    {
      id: 'backend',
      name: 'Backend Development',
      icon: <Server className="w-8 h-8 text-green-600" />,
      skills: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: <Cpu className="w-8 h-8 text-indigo-600" />,
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Git']
    },
    {
      id: 'tools',
      name: 'Tools & Technologies',
      icon: <Waves className="w-8 h-8 text-teal-600" />,
      skills: ['VS Code', 'Figma', 'Photoshop', 'Postman', 'Jupyter', 'Anaconda']
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className={`relative z-10 py-20 px-6 bg-gray-50 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className={`bg-gray-50 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
