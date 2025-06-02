
const SkillsSection = () => {
  const skills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "TensorFlow", level: 90, category: "Deep Learning" },
    { name: "PyTorch", level: 88, category: "Deep Learning" },
    { name: "Scikit-learn", level: 92, category: "Machine Learning" },
    { name: "Pandas", level: 94, category: "Data Science" },
    { name: "NumPy", level: 93, category: "Data Science" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "Docker", level: 80, category: "DevOps" },
    { name: "Git", level: 90, category: "Tools" },
    { name: "Jupyter", level: 95, category: "Tools" },
    { name: "React", level: 82, category: "Frontend" },
    { name: "FastAPI", level: 85, category: "Backend" }
  ];

  return (
    <section id="skills" className="relative z-10 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across the AI/ML technology stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-50/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 hover:border-gray-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-900 font-semibold text-sm">{skill.name}</h3>
                <span className="text-gray-700 text-xs">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-gray-600 to-gray-800 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
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
