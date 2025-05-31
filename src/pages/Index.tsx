
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, FileText, Award, Brain, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import NetworkBackground from '@/components/NetworkBackground';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Customer Churn Prediction",
      description: "ML model predicting customer churn with 95% accuracy using ensemble methods",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Machine Learning", "Python", "Scikit-learn"],
      fullDescription: "Developed a comprehensive customer churn prediction system using ensemble methods including Random Forest and XGBoost. Achieved 95% accuracy through feature engineering and hyperparameter optimization."
    },
    {
      id: 2,
      title: "E-commerce Recommendation System",
      description: "Personalized product recommendations using collaborative filtering and deep learning",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop",
      tags: ["Deep Learning", "TensorFlow", "Recommendation Systems"],
      fullDescription: "Built a hybrid recommendation system combining collaborative filtering with deep neural networks. Implemented real-time recommendations with 40% improvement in user engagement."
    },
    {
      id: 3,
      title: "Real-time Sentiment Analysis",
      description: "Social media sentiment analysis with live data streaming and visualization",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["NLP", "Streamlit", "Real-time Processing"],
      fullDescription: "Developed a real-time sentiment analysis system for social media posts using BERT and live data streaming. Created interactive dashboards for sentiment visualization."
    },
    {
      id: 4,
      title: "Plant Disease Classification",
      description: "Computer vision model for early detection of plant diseases in crops",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      tags: ["Computer Vision", "CNN", "Agriculture Tech"],
      fullDescription: "Built a convolutional neural network for plant disease detection achieving 92% accuracy. Deployed as a mobile-friendly web app for farmers to get instant diagnoses."
    }
  ];

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

  const links = [
    { name: "GitHub", icon: Github, url: "https://github.com/ritesh", description: "Open source projects and code repositories" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/ritesh", description: "Professional network and achievements" },
    { name: "Kaggle", icon: Award, url: "https://kaggle.com/ritesh", description: "Data science competitions and datasets" },
    { name: "Resume", icon: FileText, url: "#", description: "Download detailed resume and credentials" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <NetworkBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ritesh
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Projects', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <HeroSection />
      </section>

      {/* Experience & Credentials */}
      <section id="experience" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Credentials
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Academic Journey</h3>
                <p className="text-slate-300 mb-4">
                  Pursuing B-Tech in AI/ML (2023–2027) at PCET's Pimpri Chinchwad University, 
                  focusing on cutting-edge technologies and practical applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-cyan-900/30 text-cyan-300 border-cyan-600">Deep Learning</Badge>
                  <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-600">Generative AI</Badge>
                  <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-600">MLOps</Badge>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Achievements</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Built 50+ AI/ML projects</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Top performer in AI/ML hackathons</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Research focus on intelligent systems</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'MLOps'].map((skill) => (
                    <div key={skill} className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                      <div className="text-cyan-400 font-semibold">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing innovative AI/ML solutions that solve real-world problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Capabilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
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

      {/* Websites & Resources */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resources & Links
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with me and explore my work across different platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <Card key={link.name} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <link.icon className="w-12 h-12 mx-auto text-cyan-400 mb-4" />
                  <CardTitle className="text-white">{link.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-center mb-4">
                    {link.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    Visit {link.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              What colleagues and collaborators say about working with me
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to collaborate on your next AI/ML project? Let's connect!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-slate-300">ritesh@example.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-slate-300">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-slate-300">linkedin.com/in/ritesh</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Let's Collaborate</CardTitle>
                  <CardDescription className="text-slate-300">
                    Whether you have a specific project in mind or want to explore AI/ML possibilities, 
                    I'm always excited to discuss innovative solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    Start a Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Ritesh
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Github, url: "https://github.com/ritesh" },
                { icon: Linkedin, url: "https://linkedin.com/in/ritesh" },
                { icon: Mail, url: "mailto:ritesh@example.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 hover:bg-slate-700 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-slate-400 mt-4 md:mt-0">
              © 2024 Ritesh. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
