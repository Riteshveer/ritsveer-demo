
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="relative z-10 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center space-x-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <Mail className="w-6 h-6 text-gray-700" />
              <div>
                <div className="font-semibold text-sm">Email</div>
                <div className="text-gray-600 text-xs">ritesh@example.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <Phone className="w-6 h-6 text-gray-700" />
              <div>
                <div className="font-semibold text-sm">Phone</div>
                <div className="text-gray-600 text-xs">+91 98765 43210</div>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50/50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <Linkedin className="w-6 h-6 text-gray-700" />
              <div>
                <div className="font-semibold text-sm">LinkedIn</div>
                <div className="text-gray-600 text-xs">linkedin.com/in/ritesh</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
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
