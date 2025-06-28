
import { Send } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_4h6zynb',
        'template_877fcsa',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ritesh',
        },
        'ZZdqR8eryhvfHwjJR'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className={`relative z-10 py-16 px-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[50px]'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's connect!
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className={`relative transition-all duration-700 max-w-2xl w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300/20 to-gray-500/20 rounded-2xl blur-xl"></div>
            <Card className="relative bg-gray-50/50 backdrop-blur-sm border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-700 text-lg">Send me a message</CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  Whether you have a specific project in mind or want to explore AI/ML possibilities, 
                  I'm always excited to discuss innovative solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/70 text-sm"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/70 text-sm"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-white/70 min-h-[100px] text-sm"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white text-sm"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
