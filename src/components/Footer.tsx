
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 md:mb-0">
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
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-gray-600 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-gray-500 mt-4 md:mt-0 text-xs">
            © 2024 Ritesh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
