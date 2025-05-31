
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <Card className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 h-full">
      <CardHeader>
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </div>
        <CardTitle className="text-white group-hover:text-cyan-400 transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-slate-300">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <ul className="space-y-3">
          {service.features.map((feature, index) => (
            <li key={feature} className="flex items-center space-x-3 group/item">
              <CheckCircle className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors duration-300 flex-shrink-0" />
              <span className="text-slate-300 group-hover/item:text-slate-200 transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
