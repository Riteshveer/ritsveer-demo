
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp, FileText, Award, Brain, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import NetworkBackground from '@/components/NetworkBackground';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Show all');

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
      category: "Data mining",
      fullDescription: "Developed a comprehensive customer churn prediction system using ensemble methods including Random Forest and XGBoost. Achieved 95% accuracy through feature engineering and hyperparameter optimization."
    },
    {
      id: 2,
      title: "E-commerce Recommendation System",
      description: "Personalized product recommendations using collaborative filtering and deep learning",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=250&fit=crop",
      tags: ["Deep Learning", "TensorFlow", "Recommendation Systems"],
      category: "Data mining",
      fullDescription: "Built a hybrid recommendation system combining collaborative filtering with deep neural networks. Implemented real-time recommendations with 40% improvement in user engagement."
    },
    {
      id: 3,
      title: "Real-time Sentiment Analysis",
      description: "Social media sentiment analysis with live data streaming and visualization",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["NLP", "Streamlit", "Real-time Processing"],
      category: "Dataviz",
      fullDescription: "Developed a real-time sentiment analysis system for social media posts using BERT and live data streaming. Created interactive dashboards for sentiment visualization."
    },
    {
      id: 4,
      title: "Plant Disease Classification",
      description: "Computer vision model for early detection of plant diseases in crops",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      tags: ["Computer Vision", "CNN", "Agriculture Tech"],
      category: "Scientific paper",
      fullDescription: "Built a convolutional neural network for plant disease detection achieving 92% accuracy. Deployed as a mobile-friendly web app for farmers to get instant diagnoses."
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description: "Interactive financial analytics dashboard with real-time data visualization",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["React", "D3.js", "Finance"],
      category: "Dashboard",
      fullDescription: "Created a comprehensive financial dashboard for portfolio tracking and market analysis with interactive charts and real-time data feeds."
    },
    {
      id: 6,
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding deep learning architectures",
      thumbnail: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop",
      tags: ["JavaScript", "Visualization", "Deep Learning"],
      category: "Shiny",
      fullDescription: "Built an interactive web application that allows users to design and visualize neural network architectures with real-time parameter adjustment."
    }
  ];

  const categories = ['Show all', 'Data mining', 'Dataviz', 'Scientific paper', 'Dashboard', 'Shiny'];

  const filteredProjects = selectedCategory === 'Show all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ritesh
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Experience', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group text-sm"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Credentials
            </h2>
            
            {/* Statistics Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center animate-fade-in">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">PROJECTS</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">ML MODELS</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">HACKATHONS</div>
              </div>
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">3+</div>
                <div className="text-slate-400 text-xs uppercase tracking-wider">TECHNOLOGIES</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Academic Journey</h3>
                <p className="text-slate-300 mb-4 text-sm">
                  Pursuing B-Tech in AI/ML (2023–2027) at PCET's Pimpri Chinchwad University, 
                  focusing on cutting-edge technologies and practical applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-cyan-900/30 text-cyan-300 border-cyan-600 text-xs">Deep Learning</Badge>
                  <Badge variant="secondary" className="bg-blue-900/30 text-blue-300 border-blue-600 text-xs">Generative AI</Badge>
                  <Badge variant="secondary" className="bg-purple-900/30 text-purple-300 border-purple-600 text-xs">MLOps</Badge>
                </div>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-cyan-400">Achievements</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
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
                <h3 className="text-lg font-bold mb-6 text-center text-cyan-400">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Data Science', 'MLOps'].map((skill) => (
                    <div key={skill} className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                      <div className="text-cyan-400 font-semibold text-sm">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              Comprehensive expertise across the AI/ML technology stack
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
                  <span className="text-cyan-400 text-xs">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-slate-400 text-xs">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PORTFOLIO
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto mb-8">
              A glimpse of the projects I've been working on
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Capabilities
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
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

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-base text-slate-300 max-w-3xl mx-auto">
              Ready to collaborate on your next AI/ML project? Let's connect!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold text-sm">Email</div>
                  <div className="text-slate-300 text-xs">ritesh@example.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold text-sm">Phone</div>
                  <div className="text-slate-300 text-xs">+91 98765 43210</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors duration-300">
                <Linkedin className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="font-semibold text-sm">LinkedIn</div>
                  <div className="text-slate-300 text-xs">linkedin.com/in/ritesh</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-slate-800/50 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-lg">Let's Collaborate</CardTitle>
                  <CardDescription className="text-slate-300 text-sm">
                    Whether you have a specific project in mind or want to explore AI/ML possibilities, 
                    I'm always excited to discuss innovative solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm">
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
            <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 md:mb-0">
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
            <div className="text-slate-400 mt-4 md:mt-0 text-xs">
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
