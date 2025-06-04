
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
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

  return (
    <section ref={sectionRef} id="contact" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Mail, title: 'Email', value: 'ritesh@example.com' },
              { icon: Phone, title: 'Phone', value: '+91 98765 43210' },
              { icon: Linkedin, title: 'LinkedIn', value: 'linkedin.com/in/ritesh' }
            ].map((contact, index) => (
              <div key={contact.title} className={`flex items-center space-x-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100 transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <contact.icon className="w-6 h-6 text-gray-700" />
                <div>
                  <div className="font-semibold text-sm">{contact.title}</div>
                  <div className="text-gray-600 text-xs">{contact.value}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`relative transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-gray-50/50 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-700 text-base">Let's Collaborate</CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Whether you have a specific project in mind or want to explore AI/ML possibilities, 
                  I'm always excited to discuss innovative solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white text-sm">
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
