
import { Badge } from '@/components/ui/badge';
import StatisticsSection from './StatisticsSection';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative z-10 py-16 px-6 mb-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Experience & Credentials
          </h2>
          
          {/* Statistics Section */}
          <StatisticsSection />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gray-50/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-400/50 transition-all duration-300">
              <h3 className="text-base font-bold mb-4 text-gray-700">Academic Journey</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Pursuing B-Tech in AI/ML (2023–2027) at PCET's Pimpri Chinchwad University, 
                focusing on cutting-edge technologies and practical applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-gray-200/30 text-gray-700 border-gray-400 text-xs">Deep Learning</Badge>
                <Badge variant="secondary" className="bg-gray-200/30 text-gray-700 border-gray-400 text-xs">Generative AI</Badge>
                <Badge variant="secondary" className="bg-gray-200/30 text-gray-700 border-gray-400 text-xs">MLOps</Badge>
              </div>
            </div>
            
            <div className="bg-gray-50/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-400/50 transition-all duration-300">
              <h3 className="text-base font-bold mb-4 text-gray-700">Achievements</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span>Built 50+ AI/ML projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span>Top performer in AI/ML hackathons</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span>Research focus on intelligent systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-50/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
              <h3 className="text-base font-bold mb-6 text-center text-gray-700">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'MLOps'].map((skill) => (
                  <div key={skill} className="text-center p-4 bg-gray-100/50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <div className="text-gray-700 font-semibold text-sm">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
