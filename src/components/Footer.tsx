
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

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
              { icon: Github, url: "https://github.com/Riteshveer" },
              { icon: Linkedin, url: "https://www.linkedin.com/in/ritesh-veer-39a30328b" },
              { icon: FileText, url: "https://docs.google.com/document/d/1xIiTj--ZNi0oyUn7_6dzGHlCEnwt19KKIfubHoRRJmo/edit?usp=sharing" },
              { icon: Mail, url: "mailto:ritesh@example.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-gray-600 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="text-gray-500 mt-4 md:mt-0 text-sm">
            © 2024 Ritesh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
