
import { Brain, Database, Code, Award } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "End-to-end ML pipeline development from data preprocessing to model deployment",
      features: ["Feature Engineering", "Model Selection", "Hyperparameter Tuning", "Performance Optimization"]
    },
    {
      icon: Database,
      title: "Data Cleaning & Visualization",
      description: "Transform raw data into actionable insights with advanced visualization techniques",
      features: ["Data Preprocessing", "Statistical Analysis", "Interactive Dashboards", "Report Generation"]
    },
    {
      icon: Code,
      title: "System Design & Prototyping",
      description: "Design scalable AI systems and rapid prototyping for proof of concepts",
      features: ["Architecture Design", "Scalable Solutions", "API Development", "Cloud Integration"]
    },
    {
      icon: Award,
      title: "Applied Research",
      description: "Research-driven approach to solve complex problems with cutting-edge techniques",
      features: ["Literature Review", "Experimental Design", "Algorithm Innovation", "Technical Writing"]
    }
  ];

  return (
    <section id="services" className="relative z-10 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Technical Capabilities
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI/ML expertise across the entire development lifecycle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
