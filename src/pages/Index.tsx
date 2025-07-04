
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative z-10">
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10">
        <AboutSection />
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10">
        <SkillsSection />
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="relative z-10">
        <ProjectsSection />
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10">
        <ServicesSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 shadow-lg animate-fade-in"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
};

export default Index;
