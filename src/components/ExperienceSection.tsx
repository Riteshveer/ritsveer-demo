import { Badge } from '@/components/ui/badge';
import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('academic');
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

  const academicExperience = [
    {
      title: "B-Tech in AI/ML",
      organization: "PCET's Pimpri Chinchwad University",
      period: "2023 - 2027",
      description: "Pursuing Bachelor's in Artificial Intelligence & Machine Learning, focusing on cutting-edge technologies and practical applications."
    },
    {
      title: "Deep Learning Specialization",
      organization: "Coursera - DeepLearning.AI",
      period: "2023 - Present",
      description: "Advanced coursework in neural networks, deep learning, and AI applications."
    }
  ];

  const professionalExperience = [
    {
      title: "Lead MLE & Data Scientist",
      organization: "BrainSightAI",
      period: "Jul 2023 - Present",
      description: "Leading machine learning engineering and data science initiatives, developing AI solutions for real-world problems."
    },
    {
      title: "Senior MLE & Data Scientist",
      organization: "BrainSightAI", 
      period: "May 2022 - Jul 2023",
      description: "Developed and deployed machine learning models, worked on data analytics and AI research projects."
    },
    {
      title: "Machine Learning Engineer",
      organization: "BrainSightAI",
      period: "Aug 2021 - May 2022",
      description: "Implemented ML algorithms, data preprocessing, and model optimization for various AI applications."
    },
    {
      title: "Programmer Analyst Trainee",
      organization: "Cognizant",
      period: "Jan 2021 - Jul 2021",
      description: "Training program focused on software development, data analysis, and emerging technologies."
    },
    {
      title: "AI Engineer Intern",
      organization: "DCKAP",
      period: "Sep 2020 - Jan 2021",
      description: "Worked on artificial intelligence projects, gained hands-on experience with ML frameworks."
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className={`relative z-10 py-12 px-6 mb-12 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Experience & Credentials
          </h2>
          <p className="text-gray-600 mb-6">My journey in the academic & professional front</p>
          
          {/* Statistics Section with 2cm gap */}
          <div className="mt-8" style={{ marginTop: '2cm' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "10+", label: "PROJECTS" },
                { value: "15+", label: "ML MODELS" },
                { value: "5+", label: "HACKATHONS" },
                { value: "3+", label: "TECHNOLOGIES" }
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center transition-all duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-xl md:text-2xl font-bold text-gray-700 mb-2">{stat.value}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mt-10 mb-6">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('academic')}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'academic'
                    ? 'bg-white text-gray-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Academic
              </button>
              <button
                onClick={() => setActiveTab('professional')}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === 'professional'
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Professional
              </button>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 h-full"></div>

          {/* Experience Items */}
          <div className="space-y-8">
            {(activeTab === 'academic' ? academicExperience : professionalExperience).map((item, index) => (
              <div key={index} className={`flex items-center transition-all duration-700 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:border-gray-300 transition-all duration-300">
                    <h3 className="text-base font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-purple-600 font-semibold mb-2 text-sm">{item.organization}</p>
                    <div className="flex items-center text-gray-500 text-xs mb-2">
                      <Calendar className="w-3 h-3 mr-1" />
                      {item.period}
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className={`w-3 h-3 rounded-full border-4 ${activeTab === 'academic' ? 'bg-gray-700 border-gray-300' : 'bg-purple-600 border-purple-200'}`}></div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-12 text-center transition-all duration-800 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <h3 className="text-lg font-bold mb-4 text-gray-700">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'MLOps', 'Python', 'TensorFlow', 'PyTorch'].map((skill, index) => (
              <Badge key={skill} variant="secondary" className={`bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 transition-all duration-500 text-xs ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: `${1.2 + index * 0.05}s` }}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
