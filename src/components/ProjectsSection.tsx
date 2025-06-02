
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Show all');

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

  return (
    <section id="projects" className="relative z-10 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            PORTFOLIO
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
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
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-100/50 text-gray-600 hover:bg-gray-200 border border-gray-300'
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
  );
};

export default ProjectsSection;
